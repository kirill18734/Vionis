from UI.Authorization.main import run_authorization
from UI.app.main import run_app
from config import load_config


if __name__ == "__main__":
    if load_config().get('login', '') and load_config().get('password', ''):
        run_app()
    else:
        run_authorization()