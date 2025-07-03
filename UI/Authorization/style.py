LIGHT_STYLE = """
/* Основной фон */
QMainWindow {
    background-color: #f5f5f5;
    color: black;
}

/* Общие кнопки */
QPushButton {
    background-color: transparent;
    color: black;
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    font-weight: bold;
    opacity: 0.7;
    transition: all 0.3s ease;
}
QPushButton:hover {
    background-color: #d5d5d5;
    opacity: 1;
}

/* Кнопка Войти */
#btn_entry , #btn_create_account{
    background-color: #238636;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    padding: 6px 12px;
    opacity: 1;
}
#btn_entry:hover,#btn_create_account:hover {
    background-color: #3cba66;
}
#btn_entry:focus {
    border: 2px solid #4493f8;
    background-color: #57c97b;
}

/* Кнопка смены темы */
#btn_them {
    background-color: transparent;
    border-radius: 20px;
    padding: 4px 8px;
    font-size: 16px;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}
#btn_them:hover {
    opacity: 1;
    background-color: #494b4f;
}

/* Кнопка GitHub */
#btn_github {
    border: none;
    border-radius: 20px;
    background-color: transparent;
    padding: 4px 8px;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}
#btn_github:hover {
    opacity: 1;
    background-color: #e0e0e0;
    border: 1px solid black;
}

/* Кнопка Google */
#btn_google {
    background-color: #e0e0e0;
    color: black;
    border-radius: 5px;
}
#btn_google:hover {
    background-color: #4493f8;
    color: white;
}

/* Поля ввода */
QLineEdit {
    background-color: white;
    border: 2px solid #2b2d30;
    border-radius: 5px;
    color: black;
    padding: 6px;
    font-size: 14px;
}
QLineEdit:focus {
    border: 2px solid #4493f8;
    background-color: #f0f8ff;
}

/* Ссылки */
#label_forgot_pass, #label_not_entry {
    background-color: transparent;
    color: #0066cc;
}
#label_forgot_pass:hover, #label_not_entry:hover {
    color: #003366;
    text-decoration: underline;
}

/* Вкладки */
QTabBar::tab {
    background: #e0e0e0;
    color: black;
    padding: 8px 20px;
    margin-left: 25px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: 15px;
    min-width: 110px;
}
QTabBar::tab:selected {
    background: #c0c0c0;
    font-weight: bold;
    color: black;
}
QTabBar::tab:hover {
    background: #d0d0d0;
}

QTabWidget::pane {
    border: none;
}
"""


DARK_STYLE = """
/* Основной фон */
QMainWindow  {
    background-color: #2b2d30;
    border-radius: 5px;
}

/* Ссылки */
#label_forgot_pass, #label_not_entry {
    background-color: transparent;
    color: #4493f8;
}
#label_forgot_pass:hover, #label_not_entry:hover {
    color: white;
    text-decoration: underline;
}
/*Текст (создание аккаунта)*/
#label_creat_name, #label_creat_repeat_pass, #label_create_email,#label_create_pass{
color:white;
}
/* Поля ввода */
QLineEdit {
    background-color: #2b2d30;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    padding: 6px;
    font-size: 14px;
}
/* Подсветка при фокусе */
QLineEdit:focus {
    border: 2px solid #4493f8;
    background-color: #f5f5f5;
    color:black;
}

/* Кнопка Войти */
#btn_entry ,#btn_create_account{
    background-color: #238636;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    padding: 6px 12px;
}
#btn_entry:hover,#btn_create_account:hover {
    background-color: #3cba66;
}

/* Переключатель темы */
#btn_them {
    color: yellow;
    border-radius: 20px;
    font-size: 16px;
    padding: 4px 8px;
}
#btn_them:hover {
    background: #494b4f;
}

/* Кнопка Google */
#btn_google {
    background: #494b4f;
    color: white;
    border-radius: 5px;
    font-weight: bold;
}
#btn_google:hover {
    background: #4493f8;
    color: white;
    border: none;
}

/* Кнопка GitHub (иконка?) */
#btn_github {
    border-radius: 20px;
}
#btn_github:hover {
    background: #494b4f;
}

/* Вкладки */
QTabBar::tab {
    background: #2b2d30;
    color: white;
    padding: 8px 20px;
    margin-left:25px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: 15px;
    min-width: 110px;
}
QTabBar::tab:selected {
    background: #494b4f;
    font-weight: bold;
    color: #ffffff;
}
QTabBar::tab:hover {
    background: #3a3c40;
}

QTabWidget::pane {
    border: none;
}
"""
