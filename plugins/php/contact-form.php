<?php
$emailTo       = '<fede@pixor.it>';
$sender_email = 'no-replay@framework-y.com';
$subjectPrefix = 'Website Email - New message';


$errors = array(); // array to hold validation errors
$data   = array(); // array to pass back data
$body    = '';
$email = 'no-replay@pixor.it';
$name = '--';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $arr = $_POST['values']; //[email:[value,error],name:[value,error]]
    $sender_email = 'no-replay@' . $_POST['domain'];
    if (strlen($_POST['email']) > 0)  $emailTo = $_POST['email'];

    foreach ($arr as $key => $value ) {
        $val =  stripslashes(trim($value[0]));
        if (!empty($val)) {
            $body .= '<strong>' . ucfirst($key) . ': </strong>' . $val .'<br /><br />';
            if ($key == "email"||$key == "Email"||$key == "E-mail"||$key == "e-mail") $email = $val;
            if ($key == "name"||$key == "nome"||$key == "Nome") $name = $val;
        }
    }

    // if there are any errors in our errors array, return a success boolean or false
    if (!empty($errors)) {
        $data['success'] = false;
        $data['errors']  = $errors;
    } else {
        $subject = "$subjectPrefix $subject";

        $headers  = "MIME-Version: 1.1" . PHP_EOL;
        $headers .= "Content-type: text/html; charset=utf-8" . PHP_EOL;
        $headers .= "Content-Transfer-Encoding: 8bit" . PHP_EOL;
        $headers .= "Date: " . date('r', $_SERVER['REQUEST_TIME']) . PHP_EOL;
        $headers .= "Message-ID: <" . $_SERVER['REQUEST_TIME'] . md5($_SERVER['REQUEST_TIME']) . '@' . $_SERVER['SERVER_NAME'] . '>' . PHP_EOL;
        $headers .= "From: " . "=?UTF-8?B?".base64_encode($name)."?=" . "<$sender_email>" . PHP_EOL;
        $headers .= "Return-Path: $emailTo" . PHP_EOL;
        $headers .= "Reply-To: $email" . PHP_EOL;
        $headers .= "X-Mailer: PHP/". phpversion() . PHP_EOL;
        $headers .= "X-Originating-IP: " . $_SERVER['SERVER_ADDR'] . PHP_EOL;

        mail($emailTo, "=?utf-8?B?" . base64_encode($subject) . "?=", $body, $headers);

        $data['success'] = true;
        $data['message'] = 'Congratulations. Your message has been sent successfully';
    }

    // return all our data to an AJAX call
    echo json_encode($data);
}