import os
import json
from threading import Lock

CONFIG_PATH =os.path.join(os.path.dirname(__file__), "config.json")
Github_icon_black =  os.path.join(os.path.dirname(__file__), "UI/Authorization/icons/github_black.svg")
Github_icon_white =  os.path.join(os.path.dirname(__file__), "UI/Authorization/icons/github_white.svg")

config_lock = Lock()  # глобальный замок для синхронизации доступа
# Загрузка конфигурации из файла

def load_config():
    if os.path.exists(CONFIG_PATH):
        try:
            with config_lock:
                if os.path.getsize(CONFIG_PATH) == 0:
                    raise ValueError("Файл пустой")
                with open(CONFIG_PATH, "r", encoding="utf-8") as f:
                    return json.load(f)
        except Exception as e:
            print(f"[Ошибка чтения конфига]: {e}")
    return {}

# Сохранение данных в конфигурационный файл
def save_config(config):
    try:
        with config_lock:
            with open(CONFIG_PATH, "w", encoding="utf-8") as f:
                json.dump(config, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"[Ошибка сохранения конфига]: {e}")