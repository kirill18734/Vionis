from PyQt5.QtGui import QIcon, QCursor
from PyQt5.QtWidgets import QApplication, QMainWindow

from UI.Authorization.QMainWindow import Ui_MainWindow
from UI.Authorization.style import DARK_STYLE as DARK_MAIN, LIGHT_STYLE as LIGHT_MAIN
import sys

from config import load_config, Github_icon_white, Github_icon_black, save_config


class EntryWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)

        self.is_maximized = False
        self.apply_theme(load_config().get("theme", "light"))  # Применить тему из конфига
        self.ui.btn_them.clicked.connect(
            lambda: self.save_change('dark' if load_config().get("theme", "light") == 'light' else 'light'))

    # Применение темы (светлая или тёмная)
    def apply_theme(self, theme):
        if theme == "dark":
            self.setStyleSheet(DARK_MAIN)
            self.ui.btn_them.setText("☀️")
            # Устанавливаем иконку вручную
            self.ui.btn_github.setIcon(QIcon(Github_icon_white))
        else:
            self.setStyleSheet(LIGHT_MAIN)
            self.ui.btn_them.setText("🌙")
            # Устанавливаем иконку вручную
            self.ui.btn_github.setIcon(QIcon(Github_icon_black))

    def save_change(self, *args):
        config = load_config()
        if len(args) == 1 and args[0] not in ('dark', 'light') and args[0] not in (False, True) and args[0] not in (
                'expansion', 'neiro'):
            config["printer"] = args[0]
        if args[0] in ('dark', 'light'):
            config["theme"] = args[0]
            self.apply_theme(args[0])
        save_config(config)


def run_authorization():
    app = QApplication(sys.argv)
    window = EntryWindow()
    window.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = EntryWindow()
    window.show()
    sys.exit(app.exec())
