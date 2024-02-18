<?php
session_start();
include '../config/database.php';
include '../config/config.php';
$msg = ''; 

  
$user_id = $_SESSION['uid'];
$acctno = $_SESSION['acctno'];

$balance_sql = "SELECT *   FROM tbl_users WHERE id = $user_id AND acctno = $acctno";
$result = mysqli_query($link,$balance_sql);
$row = mysqli_fetch_assoc($result);


if(isset($row['status']) && $row['status']== 0){

header('location:../admin/pages/error.php');
}else{
}


include "hh.php";









if (isset($_POST['apply'])){

  
    $date= $_POST['date'];
       $name= $_POST['name'];
       $amount = $_POST['amount'];
       $duration= $_POST['duration'];
       $reason= $_POST['reason'];
       $account= $_POST['account'];
    
       $loanid ='cabcdg19etsfjhdshdsh35678gwyjerehuhb/>()[]{}|\dTSGSAWQUJHDCSMNBVCBNRTPZXMCBVN1234567890';
        $loanid = str_shuffle($loanid);
         $loanid= substr($loanid,0, 10);
        
    
         $sql = "INSERT INTO loan (account, date, name, amount, duration,reason,loanid) VALUES ('$account','$date','$name','$amount','$duration','$reason','$loanid')";
    
          if(mysqli_query($link, $sql)){
    
       
            $msg= "Your loan application was successfully sent, wait for response!";
        } else {
            $msg= "Cannot apply!";
        }
    }
    
    
  


 


?>






   <div class="main-content">
        <section class="section">
          <div class="section-header">
          
          
          <div class="col-md-12 col-lg-12 col-sm-12 col-sx-12">
          <div class="box box-default">
          


    <div class="row">
                <div class="col-lg-12">
                    <div class="sparkline12-list shadow-reset mg-t-30">
                        <div class="sparkline12-hd">
                            <div class="main-sparkline12-hd">
                            <button class="btn btn-primary">FAQ</button>
                                <div class="sparkline12-outline-icon">
                                    <span class="sparkline12-collapse-link"><i class="fa fa-chevron-up"></i></span>
                                    <span><i class="fa fa-wrench"></i></span>
                                    <span class="sparkline12-collapse-close"><i class="fa fa-times"></i></span>
                                </div>
                            </div>
                        </div>
                        
                        <br>
                        

                        <h6>1. Must I Visit My Branch To Request Any Product Or Service?</h6>
  <p>No. requests can be made from any of the bank”s branches or through our Contact Centre (CTFMB Direct).</p>

  <h6>2. How Long Does It Take To Open An Account With The Bank?</h6>
  <p>Accounts are opened within 24 hours upon submission of complete documentation.</p>

  <h6>3. Which transactions need SMS confirmation?</h6>
  <p>All transactions are confirmed with SMS, except payments between your own accounts and currency exchange. Adding funds to existing deposits are also considered as transaction between own accounts and do not need SMS confirmation.</p>

  <h6>4. What Is The Minimum Account Opening Amount?</h6>
  <p>Accounts can be opened with any amount or with Zero balance as there is no minimum account opening amount requirement for all CTFMB Bank Account classes with the exception of our CTFMB Gold and Platinum Accounts that have a $1 million and $3 million requirement respectively.</p>

  <h6>5. What are reserved amounts?</h6>
  <p><b>Reserved</b> amounts perform card(s) transactions that haven’t been yet reflected on your bank account(s). Thereby, you can see this funds in Internet bank, but cannot use.</p>

  <h6>6. Can A Savings Account Become Dormant? </h6>
  <p>No. savings accounts do not go dormant.</p>

  <h6>7. What is security code?</h6>
  <p>For your convenience, instead of all requisites of a transaction you will get a short code of three (3) letters in confirming SMS. Identical code you will see on the screen in your Internet bank while confirming a transaction.</p>

  <h6>8. Will My Account Number Change If I Transfer My Account To Another Branch?</h6>
  <p>No, The NUBAN account series is unique and same. The only change is the address of the new branch that will appear on your next cheque book.</p>

  <h6>9. How Long Does It Take Before My Account Becomes Inactive?</h6>
  <p>Current accounts become dormant after 6 months of inactivity.</p>

  <h6>10. Is It Possible To Open An Account In The Country And Operate The Account While Out Of The Country?</h6>
  <p>Yes. The account can be operated through any of our card products or internet banking solution.</p>

  <h6>11. Can I Open An Account While Outside The Country?</h6>
  <p>You can open an account online here while out of the country if you already have a Social Security Number (SSN). If you do not have a SSN, you will still receive an account number, but the account will remain restricted until you complete the required documentation.</p>
</div>
                                                

                                                


                                       






                                               



                                               

                                                    </div>
                                                </div>
                                            </form>
                           

</br></br>
    <!-- login End-->
    <!-- Footer Start-->
    <div class="footer-copyright-area">
      
                    <div class="footer-copy-right">
                        <p>Copyright 2022 <?php echo $name;?>. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>