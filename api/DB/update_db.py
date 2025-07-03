
from typing import List, Tuple, Optional
import sqlite3

import bcrypt
from passlib.hash import bcrypt

DB_PATH = "Vionis.db"  # путь к SQLite-базе

# 📘 1. Чтение пользователей
def read_users() -> List[Tuple[int, str, str]]:
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users")
        return cursor.fetchall()

# ✏️ Добавление пользователя с хешированием пароля
def insert_user(username: str, email: str, password: str) -> bool:
    hashed_password = bcrypt.hash(password)
    try:
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
                (username, email, hashed_password)
            )
            conn.commit()
        return True
    except sqlite3.IntegrityError:
        return False  # логин или email уже существует

# 🔄 Обновление пароля (тоже с хешированием)
def update_password(email: str, new_password: str) -> bool:
    hashed_password = bcrypt.hash(new_password)
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute(
            "UPDATE users SET password = ? WHERE email = ?",
            (hashed_password, email)
        )
        conn.commit()
        return cursor.rowcount > 0
insert_user('Кирилл', 'kira.foka99@gmail.com', 'KKK08III')