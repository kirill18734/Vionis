LIGHT_STYLE = """
/* Основной фон */
QMainWindow {
    background-color: #f5f5f5;
    color: black;
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
/*Разделительная черта*/
#frame_settings_container_body_1{
border-radius:0;
border-right:1px solid #d6d7d9;    
}
/* Основные заголовки*/
#label_general,#label_Voice_recognition_Service, #label_Voice_commands,#label_Voice_recording,#label_Voice_pronunciation_Service,#label_Voice_typing{
font-size:22px;
}
"""

DARK_STYLE = """
/* Основные заголовки*/
#label_general,#label_Voice_recognition_Service, #label_Voice_commands,#label_Voice_recording,#label_Voice_pronunciation_Service,#label_Voice_typing{
font-size:22px;
}

#btn_toggle_theme {
    color: yellow;
    border-radius: 20px;
    font-size: 16px;
    padding: 4px 8px;
}
#btn_toggle_theme:hover {
    background: #494b4f;
}
/* Кнопка GitHub (иконка?) */
#btn_open_github {
    border-radius: 20px;
}
#btn_open_github:hover {
    background: #494b4f;
}
/*Стили выбора распознавания и произношения*/
#combo_voice_language,#combo_voice_engine_3,#combo_voice_pronounce_service,#combo_voice_pronounce_language,#combo_microphone_input,#combo_voice_command_engine{
background-color:white;
color:black;
}


/*Разделительная черта*/
#frame_settings_container_body_1{
border-radius:0;
border-right:1px solid #494b4f;    
}

"""
