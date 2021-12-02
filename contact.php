<?php 
 $name = $_POST["name"];
  $visitor_email = $_POST["email"];
  $message = $_POST["message"];

  $email_form = "abhishekmohalkar923@gmail.com";

  $email_subject = "New form submission";

  $email_body = "User name: $name.\n " .
                  "User Email: $visitor_email.\n " .
                    "User Message: $message.\n"

   $to = "abhishekmohalkar007@gmail.com";

   $headers = "From : $email_form \r\n";
   $headers = "Reply-To : $visitor_email \r\n";

   mail($to, $email_subject, $email_body, $headers);

   header("Location: demo.html");

?>