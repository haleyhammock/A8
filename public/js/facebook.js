function checkLoginState() {
  FB.getLoginStatus(function(response){
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response){
  if(response.status === 'connected'){
    console.log('Successfully logged in with Facebook');
    window.location.replace("home");
    FB.api('/me?fields=name,first_name,picture.width(480)',changeUser);
  }
}
function changeUser(response) {
$('#profpic').attr('src',response.picture.data.url);
$('#welcome').attr('name',response.name);
}
