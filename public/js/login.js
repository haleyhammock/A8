function login() {
	var username = $("#username").val();
	var password = $("#password").val();

	if (username == '') { // No username
		alert("Please enter a username!");
	} else if (password == '') { // No password
		alert("Please enter a password!");
	} else { // Test login
		if (username == 'elias' && password == '12345abc') {
			alert("Login successful!");
			window.location.replace("home");
			
		} else {
			alert("Incorrect username or password!");
			$("#username").val('');
			$("#password").val('');
		}
	}
}
