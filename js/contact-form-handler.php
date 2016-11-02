<?php 
$errors = '';
$myemail = 'alex@elwebman.nl';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
	empty($_POST['email']) || 
	empty($_POST['message']))
{
	$errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$email_address = $_POST['email']; 
$message = $_POST['message']; 

if (!preg_match(
	"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
	$email_address))
{
	$errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $email_address;
	$email_subject = "Positive Words for : $name";
	$email_body = "Your positive words have arrived!. ".	// this is the content of the email
	" 
	<html>
	<head>
	<title>Positive Word generator</title>
	<style>
	p{
		font-size=20px;
		font-weight: 700;
	}

	h6
	{
		font-size=26px;
		font-weight: 900;

	}
	</style>
	</head>
	<body>
	<br>
	<br>
	<p>Hello \n $name ,Thank you for contacting us. </p>
	<br>
	<br>
	<p>Your Positive Words Have Arrived!</p>
	<p>We hope that they will help you and motivate you!</p>
	<br>
	<br>
	<p>Your Positive Words for this time are...</p>
	<br>
	<h1>\n $message</h1>
	<br>
	<br>
	<br>
	<p> The <a href=\"http://www.elwebman.nl/pwg/\">Positive Word Generator </a> is available 24 hours a day</p>
	<p>If your email address is not \n $email_address, then please delete this email</p>
	<p>Thank you for contacting The Positive Word Generator</p>
	<p>Check us on <a href=\"https://github.com/alexolivet/\">Github</a>.</p>   
	</body>
	</html>
	"; 
	// To send HTML mail, the Content-type header must be set
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// reply address
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: http://elwebman.nl/pwg/contact-form-thank-you.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
	<!-- This page is displayed only if there is some error -->
	<?php
	echo nl2br($errors);
	?>


</body>
</html>