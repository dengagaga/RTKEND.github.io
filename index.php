<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "6891867918:AAHZTeJd21YEEaLD9_9UlEh1zwr_y1mCQhU";

//Сюда вставляем chat_id
$chat_id = "-1002322594909";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $fam = ($_POST['fam']);
    $phone = ($_POST['phone']);
    $gmail = ($_POST['gmail']);
    $massage = ($_POST['massage']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Фамилия:' => $fam,
        'Телефон:' => $phone,
        'Почта:' => $gmail,
        'Сообщение:' => $massage,
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }

//А здесь сообщение об ошибке при отправке
    else {
        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}

?>