<?php

include '../config/config.php';
include '../config/database.php';

if ($_POST['otp']) {

    
    if (empty($_POST['otp'])) {
        echo "Please enter OTP";
    } else {
        $input_otp = preg_replace('/[^0-9]/', '', $_POST['otp']);
        $user_id = preg_replace('/[^0-9]/', '', $_POST['user_id']);

        $sql1 = "SELECT * FROM tbl_users WHERE id = '$user_id'";

        $result1 = mysqli_query($link, $sql1);
        if(mysqli_num_rows($result1) > 0){
            while ($row = mysqli_fetch_assoc($result1)){

            $pass_hash_fromdb = $row['mobile_hash'];
            $email = $row['email'];
            $mobile_no = $row['phone'];
            $user_os =  getOS();
            $ip = $_SERVER['REMOTE_ADDR'];

            echo $pass_hash_fromdb;

            if (password_verify($input_otp, $pass_hash_fromdb)) {
                $link->query("UPDATE `tbl_users` SET `mobile_hash`= ' ',`is_mobile`= '1' WHERE id = '$user_id'");


                //after verify otp notify user to your account loggedin
                //twillio
                $sid = $sms_private_key; // Your Account SID from www.twilio.com/console
                $token = $sms_public_key; // Your Auth Token from www.twilio.com/console

                $client = new Twilio\Rest\Client($sid, $token);

                $smsbody = 'Dear ' . $row['fname'] . ' your account was logged in from ' . $user_os . '(IP: '.$ip.') on '.date("F j, Y, g:i a").', if you did not 
				login from this device, contact your account manager to secure your account.';




                $message = $client->messages->create(
                        '+' . $mobile_no, array(
                    'from' => '+12018842686', // From a valid Twilio number
                    'body' => $smsbody
                        )
                );


                //send email


              
                
                
                $msg_body = '
                
                '

<div style="background: #fff; width: 100%; height: 100%; font-family: sans-serif; font-weight: 100;" class="be_container"> 
     <div style="background:#fff; max-width: 600px; margin: 0px auto; padding: 30px;" class="be_inner_container"> <div class="be_header">

        <img src="https://'.$bankurl.'/secured/admin/pages/logo/logo.png">

        <p>Dear '.$fname.', </p> 

        <div class="be_body" style="padding: 20px;"> '.$smsbody.'  
        
        <p style="line-height: 25px;"> 
            Thank you for choosing '.$name.'. Your account '.$account.' is ready.  
        </p> 
        
        
        <div class="be_footer">
        <div style="border-bottom: 1px solid #1976d2;"></div>
        
        <p>Please do not reply to this email. Emails sent to this address will not be answered.</p>
        
        <p style="font-size: 8px;">
        <strong>Confidentiality</strong>: This e-mail and any files transmitted with it are confidential and intended solely for the use of the recipient(s) only. Any review, retransmission, dissemination or other use of, or taking any action in reliance upon this information by persons or entities other than the intended recipient(s) is prohibited. If you have received this e-mail in error please notify the sender immediately and destroy the material whether stored on a computer or otherwise. '.$name.' accepts no liability for the content of this email, or for the consequences of any actions taken on the basis of the information provided.
            </p>
            
            <p style="font-size: 8px;">
            <strong>Disclaimer</strong>: Any views or opinions presented within this e-mail are solely those of the author and do not necessarily represent those of '.$name.', unless otherwise specifically stated. The content of this message does not contain or constitute financial recommendation or advice.
            </p>
        </div>
    </div>
</div>';

                
                $mail_data = array('to' => $email, 'sub' => 'Account Notification', 'msg' => 'login_notify', 'body' => $msg_body);
                send_email($mail_data);

                echo "verified";
            }
        }
    }
    }
}



?>