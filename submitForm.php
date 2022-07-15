<?php 
ob_start(); 
error_log();
if(isset($_POST['name']) && isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $subject = 'New Message from Become Partner Form!';

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: admin@golddust.com' . PHP_EOL .
    'Reply-To:' . $email . PHP_EOL .
    'X-Mailer: PHP/' . phpversion();
    
    $to = 'info@golddust.com'; 
    
    $messageSent = '<div>Name : '. $name .'</div><div> Email : '. $email .' </div><div>Phone : '. $phone .'</div><div> Message : '. $message .'</div>';

    mail($to, $subject, $messageSent, $headers);
    echo 'Thank you, We will get back to you asap!';
}
?>