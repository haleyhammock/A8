
function openMenu() {
  document.getElementById("sidebar").classList.toggle("show");
}
function graph() {
  document.getElementById("options").classList.toggle("show");
}
function data(obj) {
  this.date = obj.date;
  this.title = obj.title;
  this.subject = obj.subject;
  this.input = obj.input;
}
function weewoo(){
  alert("record saved");
}



$(document).ready(function () {
  $('#subject').change(function() {
    $('#dates').val('');
    $('#titleRecord').val('');
  });
  $('.group').hide();
  $('#Sleeping').show();
  $('#subject').change(function () {
    $('.group').hide();
    $('#'+$(this).val()).show();

  });
  /*$('#Saved').click(function(e){
    e.preventDefault();
    //$(".cancel").hide();
    //$(".save").hide();
    $(".finish").show();
  });*/

  $('#delete1').click(function(e){
  if(confirm('Are you sure you want to delete?')){
  $('#postButton').remove();
  $('#delete1').remove();
}
});

  $('#logout').click(function(e){
    if(confirm('Are you sure you want to logout?')){
      location.href = '/';
      return true;
    }else{
      return false
    }
  });
});
