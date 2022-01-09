<?php 

	$text = $_POST['text'];
	$tel = $_POST['tel'];



	$text = htmlspecialchars($text);
	$tel = htmlspecialchars($tel);

	$text = urldecode($text);
	$tel = urldecode($tel);

	$text = trim($text);
	$tel = trim($tel);



	if (mail("srebochka@icloud.com",
				"Новое письмо с сайта",
				"Имя: ".$text."\n".
				"телефон: ".$tel,
				"From: no-reply@mydomain.ua \r\n")
) {
	echo ('Письмо отправлено');	
	}

	else {
		echo ('Есть ошибки! Проверьте данные');
	}

?>