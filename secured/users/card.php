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









if(isset($_POST['apply'])){

  
    $phone=$link->real_escape_string( $_POST['phone']);
    $account=$link->real_escape_string( $_POST['account']);
    $cardt =$link->real_escape_string( $_POST['cardt']);

//Card number generation...
$card ='827673930057000463891234567890';
$card = str_shuffle($card);
$card = substr($card,0, 16);


//csv code generation...
$csv ='76573827673930057000463891234567890';
$csv = str_shuffle($csv);
$csv = substr($csv,0, 3);






    if($phone != $row['phone']){

        $msg = "Please enter phone attached to bank!";

    }else{

        if(isset($row['csv']) && $row['csv'] != 0){

$msg = "You Already applied, Wait For Administrator Approval!";
        }else{
        
      
    $sql1 = "UPDATE tbl_users SET card='$card',cardt='$cardt',csv='$csv'   WHERE acctno='$account'";
    
    if (mysqli_query($link, $sql1)) {
        $msg = "Application Successful!";
    } else {
        $msg = "Cannot Apply! ";
    }
    }
}
}




 


?>

<head>
    


  <link rel="stylesheet" href="assets/css/card.css">


</head>

   <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1><i class="fa fa-users" style="font-size:30px"></i> Card Application </h1>
            
          </div>

          
          <div class="col-md-12 col-lg-12 col-sm-12 col-sx-12">
          <div class="box box-default">
          
          
          


    <div class="row">
                <div class="col-lg-12">
                    <div class="sparkline12-list shadow-reset mg-t-30">
                        <div class="sparkline12-hd">
                            
                        </div>
                        
                        </br>
                        
                        <div class="sparkline12-graph">
                            <div class="basic-login-form-ad">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="all-form-element-inner">
                                            <form action="card.php" method="post">



                                            <?php if($msg != "") echo "<div style='padding:20px;background-color:#dce8f7;color:black'> $msg</div class='btn btn-success'>" ."</br></br>";  ?>


                                                

                                                <div class="form-group-inner">
                                                    <div class="row">
                                                        <div class="col-lg-3">
                                                            <label class="login2 pull-right pull-right-pro">Phone</label>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <input type="text" name="phone" placeholder="Enter phone number"  class="form-control" />
                                                        </div>
                                                    </div>
                                                </div>


                                                <input type="hidden" name="account" value="<?php echo $row['acctno'];?>" class="form-control" />
</br>
                                                <div class="form-group-inner">
                                                    <div class="row">
                                                        <div class="col-lg-3">
                                                            <label class="login2 pull-right pull-right-pro">Account Number</label>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <input type="text" name="acct" placeholder="Enter account number"  class="form-control" />
                                                        </div>
                                                    </div>
                                                </div>

</br>

                                                <div class="form-group-inner">
                                                    <div class="row">
                                                        <div class="col-lg-3">
                                                            <label class="login2 pull-right pull-right-pro">Card Type</label>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <select type="text" name="cardt"  class="form-control" />
                                                            <option>Select Card Type</option>
                                                            <option>Credit Master Card</option>
                                                            <option>Debit Master Card</option>
                                                            <option>Credit Visa Card</option>
                                                            <option>Debit Visa Card</option>
                                                              </select>
                                                        </div>
                                                    </div>
                                                </div>
</br>
                                                
                                                <div class="form-group-inner">
                                                    <div class="row">
                                                        <div class="col-lg-3">
                                                            
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <input type="submit" name="apply" value="Apply For Card"  class="btn btn-info" />
                                                        </div>
                                                    </div>
                                                </div>




                                                <?php


$user_id = $_SESSION['uid'];
$acctno = $_SESSION['acctno'];

$sql = "SELECT *   FROM tbl_users WHERE id = $user_id AND acctno = $acctno";
$result = mysqli_query($link,$sql);
if(mysqli_num_rows($result) > 0){
  $row = mysqli_fetch_assoc($result);


 
  $fname =  $row['fname'];
  
  $lname =  $row['lname'];

  $card =  $row['card'];
  $cardt =  $row['cardt'];
  $csv =  $row['csv'];
  $yr =  $row['yr'];
  $month =  $row['month'];

}
  if(isset($row['sstatus'])  && $row['sstatus'] == 1 ){
             
  $fname =  $row['fname'];
  
  
  $lname =  $row['lname'];

  $card =  $row['card'];
  $cardt =  $row['cardt'];
  $csv =  $row['csv'];
  $yr =  $row['yr'];
  $month =  $row['month'];
  }else{
   
    $month = 'Not Yet Activated &nbsp;&nbsp;<i style="color:red;font-size:20px;" class="fa  fa-times" ></i>';
    $yr = 'Not Yet Activated &nbsp;&nbsp;<i style="color:red;font-size:20px;" class="fa  fa-times" ></i>';
    $fname = 'Not Yet Activated &nbsp;&nbsp;<i style="color:red;font-size:20px;" class="fa  fa-times" ></i>';
    $lname = 'Not Yet Activated &nbsp;&nbsp;<i style="color:red;font-size:20px;" class="fa  fa-times" ></i>';
    $csv = 'Not Yet Activated &nbsp;&nbsp;<i style="color:red;font-size:20px;" class="fa  fa-times" ></i>';
    $card = 'Not Yet Activated &nbsp;&nbsp;<i style="color:red;font-size:20px;" class="fa  fa-times" ></i>';
    $cardt = 'Not Yet Activated &nbsp;&nbsp;<i style="color:red;font-size:20px;" class="fa  fa-times" ></i>';
  }

  
  


?>





                                                </br>
                                                



<div class="demo">
		<form class="payment-card">
			<div class="bank-card">
				<div class="bank-card__side bank-card__side_front">
					<div class="bank-card__inner">
						<label class="bank-card__label bank-card__label_holder">
							<span class="bank-card__hint">Holder of card</span>
							<input type="text" class="bank-card__field" value=<?php echo $fname.$lname;?> pattern="[A-Za-z,  ]{2,}" name="holder-card" disabled>
						</label>
					</div>
					<div class="bank-card__inner">
						<label class="bank-card__label bank-card__label_number">
							<span class="bank-card__hint">Number of card</span>
							<input type="text" class="bank-card__field" value=<?php echo $card;?> pattern="[0-9]{16}" name="number-card" disabled>
						</label>
					</div>
					<div class="bank-card__inner">
						<span class="bank-card__caption">valid thru</span>
					</div>
					<div class="bank-card__inner bank-card__footer">
						<label class="bank-card__label bank-card__month">
							<span class="bank-card__hint">Month</span>
							<input type="text" class="bank-card__field" value=<?php echo $month ?> maxlength="2" pattern="[0-9]{2}" name="mm-card" disabled>
						</label>
						<span class="bank-card__separator">/</span>
						<label class="bank-card__label bank-card__year">
							<span class="bank-card__hint">Year</span>
							<input type="text" class="bank-card__field" value=<?php echo $yr ?> maxlength="2" pattern="[0-9]{2}" name="year-card" disabled>
						</label>
					</div>
				</div>
				<div class="bank-card__side bank-card__side_back">
					<div class="bank-card__inner">
						<label class="bank-card__label bank-card__cvc">
							<span class="bank-card__hint">CVC</span>
							<input type="text" class="bank-card__field" value=<?php echo $csv;?> maxlength="3" pattern="[0-9]{3}" name="cvc-card"  disabled>
						</label>
					</div>
				</div>
			</div>
			<div class="payment-card__footer">
			</div>
		</form>
	</div>


</br>
           

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