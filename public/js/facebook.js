
function checkLoginState() {
  FB.getLoginStatus(function(response){
    statusChangeCallback(response);
  });
}
function checklogout(){
  FB.getLoginStatus(function(response){
    FB.logout(response.authResponse);
    window.location.replace("/");
  });
}
function statusChangeCallback(response){
  if(response.status === 'connected'){
    console.log('Successfully logged in with Facebook');
    FB.api('/me?fields=name,first_name,picture.width(480)',changeUser);
    window.location.replace("home");
  }
}
function changeUser(response) {

}
