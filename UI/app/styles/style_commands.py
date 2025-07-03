LIGHT_STYLE = """
/*Разделительная черта*/
#frame_container_body_collection{
border-radius:0;
border-left:1px solid #d6d7d9;    
}
#frame_body_collection{
border-radius:0;
border-top:1px solid #d6d7d9;    
}
/*Кнопка поиска*/
#line_search_commands{
padding-left: 30px; /* отступ под иконку */
background-image: url(icons/search_black.svg);
background-repeat: no-repeat;
background-position: left center;
border-radius:0;
border-bottom:1px solid white;
}
#line_search_commands:focus{
border-bottom:1px solid red;
}

"""


DARK_STYLE = """
/*Контейнер для кнопки Добавить коллекцию*/
#btn_add_collection {
border: 2px solid white;
border-radius: 20px;
text-align: center;

}
#btn_add_collection:hover{
border: 2px solid red;
}
#btn_add_collection:pressed{
border: 2px solid white;
}
/*Кнопка поиска*/
#line_search_commands{
padding-left: 30px; /* отступ под иконку */
background-image: url(icons/search_white.svg);
background-repeat: no-repeat;
background-position: left center;
border-radius:0;
border-bottom:1px solid white;
}
#line_search_commands:focus{
border-bottom:1px solid red;
}
/*Разделительная черта*/
#frame_container_body_collection{
border-radius:0;
border-left:1px solid #494b4f;    
}
#frame_body_collection{
border-radius:0;
border-top:1px solid #494b4f;    
}
/*Чекбоксы*/
QCheckBox *{
padding:10px;

}
/*Сменя языка в разделе "Команды"*/
#btn_select_lang_en, #btn_select_lang_ru{
border-radius:0;
border-bottom:1px solid white;
}
#btn_select_lang_en:focus, #btn_select_lang_ru:focus{
border-bottom:1px solid red;
}"""

