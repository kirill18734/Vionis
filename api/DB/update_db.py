import hashlib
from typing import List, Tuple, Optional
import sqlite3

DB_PATH = "Vionis.db"  # путь к SQLite-базе
def to_sha256(text):
    # Преобразуем строку в байты
    byte_data = text.encode('utf-8')
    # Хэшируем
    hash_object = hashlib.sha256(byte_data)
    # Получаем хэш в виде строки hex
    return hash_object.hexdigest()
def check_password(email: str, password: str) -> bool:
    hashed_input = to_sha256(password)
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT password FROM users WHERE email = ?", (email,))
        result = cursor.fetchone()
        if result:
            stored_hash = result[0]
            return hashed_input == stored_hash
        return False  # пользователь не найден

# 📘 1. Чтение пользователей
def read_users() -> List[Tuple[int, str, str]]:
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users")
        return cursor.fetchall()

# ✏️ Добавление пользователя с хешированием пароля
def insert_user(username: str, email: str, password: str) -> bool:
    hashed_password = to_sha256(password)  # или hash_password(password), если используешь bcrypt

    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()

        # Проверка: есть ли уже такой email
        cursor.execute("SELECT 1 FROM users WHERE email = ?", (email,))
        if cursor.fetchone():
            print("Пользователь существует")
            return False

        # Вставка нового пользователя
        cursor.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            (username, email, hashed_password)
        )
        conn.commit()
        return True


# 🔄 Обновление пароля (тоже с хешированием)
def update_password(email: str, new_password: str) -> bool:
    hashed_password = to_sha256(new_password)
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute(
            "UPDATE users SET password = ? WHERE email = ?",
            (hashed_password, email)
        )
        conn.commit()
        return cursor.rowcount > 0

