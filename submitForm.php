<?php 
ob_start(); 
error_log();
if(isset($_POST['name']) && isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $business = $_POST['business'];
    $subject = 'New Message from Become Partner Form!';

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: admin@tipsu.eu' . PHP_EOL .
    'Reply-To:' . $email . PHP_EOL .
    'X-Mailer: PHP/' . phpversion();
    
    $to = 'info@tipsu.eu'; 
    
    $messageSent = '<div>Name : '. $name .'</div><div> Email : '. $email .' </div><div>Phone : '. $phone .'</div><div> Business : '. $business .'</div>';

    mail($to, $subject, $messageSent, $headers);
    echo 'Thank you, We will get back to you asap!';
}
?>