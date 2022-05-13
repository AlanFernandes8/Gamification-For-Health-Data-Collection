<?php include('server.php') ?>
<!DOCTYPE html
<html>
  <link rel="stylesheet" type="text/css" href="style1.css">
<div class="container" id="container">
	<div class="form-container sign-up-container">
		
  <form method="post" action="login.php">
  	<?php include('errors.php'); ?>

			<h1>Create Account</h1>
			
			<input type="text" name="username" placeholder="Username" />
			<input type="email" name="email"  placeholder="Email" />
			<input type="password" name="password_1" placeholder="Password" />
			<input type="password" name="password_2" placeholder="Confirm Password" />
			<button type="submit" class="btn" name="reg_user">Sign Up</button>
		
	</div>
	</form>
	<div class="form-container sign-in-container">
		<form method="post" action="login.php">
  	<?php include('errors.php'); ?>

			<h1>Log in</h1>
			<input type="text" name="username" placeholder="Username" />
			<input type="password" name="password" placeholder="Password" />
			<button type="submit" class="btn" name="login_user">Log In</button>
		
	</div>
	</form>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your info</p>
				<button class="ghost" id="signIn">Log In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello!</h1>
				<p>Enter your details and find out your health score</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
</html>
<script src="style.js"></script>
