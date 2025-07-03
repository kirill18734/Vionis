from PyQt5.QtCore import QSize, QTimer
from PyQt5.QtGui import QIcon
from PyQt5.QtWidgets import QApplication, QMainWindow
from .app import   Ui_MainWindow
from UI.app.styles.style_main import DARK_STYLE as DARK_MAIN, LIGHT_STYLE as LIGHT_MAIN
from UI.app.styles.style_commands import DARK_STYLE as DARK_COMMANDS, LIGHT_STYLE as LIGHT_COMMANDS
from UI.app.styles.style_settings import DARK_STYLE as DARK_SETTINGS, LIGHT_STYLE as LIGHT_SETTINGS
import sys
from config import load_config, save_config, Github_icon_white, Github_icon_black

from PyQt5.QtWidgets import QCheckBox
from PyQt5.QtCore import Qt, QPropertyAnimation, QEasingCurve, pyqtProperty
from PyQt5.QtGui import QPainter, QColor, QMouseEvent


class ToggleSwitch(QCheckBox):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setFixedSize(50, 25)
        self._circle_pos_internal = 3
        self.setCursor(Qt.PointingHandCursor)
        self.setFocusPolicy(Qt.NoFocus)

        self.animation = QPropertyAnimation(self, b"circle_position")
        self.animation.setDuration(200)
        self.animation.setEasingCurve(QEasingCurve.InOutQuad)

        self.stateChanged.connect(self.start_transition)

        # Проверка наличия необходимых данных в конфиге и вывод предупреждений

    def mouseReleaseEvent(self, event: QMouseEvent):
        if event.button() == Qt.LeftButton:
            self.toggle()
        super().mouseReleaseEvent(event)

    def start_transition(self, value):
        start = self._circle_pos_internal
        end = self.width() - self.height() + 3 if value else 3

        self.animation.stop()
        self.animation.setStartValue(start)
        self.animation.setEndValue(end)
        self.animation.start()

    def paintEvent(self, event):
        p = QPainter(self)
        p.setRenderHint(QPainter.Antialiasing)
        p.setPen(Qt.NoPen)

        # Фон
        p.setBrush(QColor("green") if self.isChecked() else QColor("red") if load_config().get("theme",
                                                                                               "light") == 'dark' else QColor(
            "gray"))
        p.drawRoundedRect(0, 0, self.width(), self.height(), self.height() / 2, self.height() / 2)

        # Кружок
        p.setBrush(QColor("#ffffff"))
        p.drawEllipse(int(self._circle_pos_internal), 3, self.height() - 6, self.height() - 6)

    def get_circle_position(self):
        return self._circle_pos_internal

    def set_circle_position(self, pos):
        self._circle_pos_internal = pos
        self.update()

    circle_position = pyqtProperty(float, get_circle_position, set_circle_position)


class EntryWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)
        self.is_maximized = False
        self.ui.btn_add_collection.setIcon(QIcon("icons/plus.svg"))
        self.ui.btn_add_collection.setIconSize(
            QSize(24, 24))  # подгони под нужный размер
        self.ui.btn_header_body_show_list_1.setIcon(QIcon("icons/sort_list.svg"))
        self.replace_checkboxes_with_toggles(
            [self.ui.checkBox_muffled_voice, self.ui.checkBox_notifications, self.ui.checkBox_start_windows,
             self.ui.chk_enable_communication, self.ui.chk_external_phrases, self.ui.chk_voice_commands_enabled,
             self.ui.chk_autospell, self.ui.chk_keyboard_typing_enabled, self.ui.chk_mute_on_key_hold,
             self.ui.chk_record_when_pressed, self.ui.chk_voice_typing_enabled])
        self.ui.btn_header_body_show_list_1.setIconSize(
            QSize(24, 24))  # подгони под нужный размер
        QTimer.singleShot(0,
                          self.check_config_state)  # <- отложенный вызов, ожидаем полную отрисовку, после чего применяем стили
        self.ui.btn_toggle_theme.clicked.connect(
            lambda: self.save_change('dark' if load_config().get("theme", "light") == 'light' else 'light'))

    # Применение темы (светлая или тёмная)
    def check_config_state(self):
        config = load_config()
        self.apply_theme(config.get("theme", "light"))  # Применить тему из конфига

    def replace_checkboxes_with_toggles(self, checkbox_list):
        for checkbox in checkbox_list:
            name = checkbox.objectName()
            parent = checkbox.parent()

            layout = parent.layout()  # получаем layout, в который вставлен checkbox
            if layout is None:
                continue  # если нет layout — пропускаем

            index = layout.indexOf(checkbox)  # позиция старого чекбокса
            if index == -1:
                continue

            # Удаляем старый checkbox
            item = layout.takeAt(index)
            if item:
                item.widget().deleteLater()

            # Создаём новый переключатель
            toggle = ToggleSwitch(parent)
            toggle.setObjectName(name)

            # Вставляем в ту же позицию
            layout.insertWidget(index, toggle)

    def apply_theme(self, theme):
        if theme == "dark":
            style = DARK_MAIN + DARK_COMMANDS + DARK_SETTINGS
            self.setStyleSheet(style)
            self.ui.btn_toggle_theme.setText("☀️")
            # # Устанавливаем иконку вручную
            self.ui.btn_open_github.setIcon(QIcon(Github_icon_white))

        else:
            style = LIGHT_MAIN + LIGHT_COMMANDS + LIGHT_SETTINGS
            self.setStyleSheet(style)
            self.ui.btn_toggle_theme.setText("🌙")
            # # Устанавливаем иконку вручную
            self.ui.btn_open_github.setIcon(QIcon(Github_icon_black))

    def save_change(self, *args):
        config = load_config()
        if args[0] in ('dark', 'light'):
            config["theme"] = args[0]
            self.apply_theme(args[0])
        save_config(config)


def run_app():
    app = QApplication(sys.argv)
    window = EntryWindow()
    window.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = EntryWindow()
    window.show()
    sys.exit(app.exec())
