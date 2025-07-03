LIGHT_STYLE = """
/* Основной фон */
QMainWindow {
    background-color: #f5f5f5;
    color: black;
}

/* Вкладки */
QTabBar::tab {
    background: transparent;
    color: black;
    padding: 8px 20px;
    margin-left: 25px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: 15px;
    min-width: 110px;
}
QTabBar::tab:selected {
    background: #e6e6e6;
    font-weight: bold;
    color: #d32f2f; /* акцент — красный */
}
QTabBar::tab:hover {
    background: #dddddd;
}
QTabWidget::pane {
    border: none;
}

"""

DARK_STYLE = """
/* Основной фон */
QMainWindow *  {
    background-color: #2b2d30;
    border-radius: 5px;
    color:white;
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
