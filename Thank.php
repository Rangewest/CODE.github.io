<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "sasn026@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $mailheader, $formcontent) or die("Error!");
echo "

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CODE - Thank You!!!</title>
    <link rel="icon" href="icon/favicon_io/favicon-32x32.png">
    <link rel="stylesheet" href="Thank.css">
</head>
<body>
    <div class="containers">
        <div class="welcome">
            <h1>THANK YOU</h1>
            <p>Your Message has been received thanks for your patience we will be back to you soon!!!</p>
            <div class="link">
                <code><a href="index.html">Back</a></code>
            </div>
        </div>
        <!-- <video autoplay loop class="mail" >
            <source type="video/mp4" src="icon/6391-email-sent.mp4">
        </video> -->


    </div>
";
?>
