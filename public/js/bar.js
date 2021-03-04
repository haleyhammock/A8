
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
  $('#intervals').change(function(){
    if($( "#intervals option:selected" ).text() == 'Last Week')
    {
      $('.progress-bar').css('width', '40'+'%').attr('aria-valuenow', 40);
      $('#msg').text('Needs Improvement');
      $("#prog").addClass("bg-danger");
      $("#prog").removeClass("bg-success");
      $("#prog").removeClass("bg-warning");
    }else if($( "#intervals option:selected" ).text() == 'Recent'){
      $('.progress-bar').css('width', '70'+'%').attr('aria-valuenow', 70);
      $('#msg').text('Needs Improvement');
      $("#prog").addClass("bg-warning");
      $("#prog").removeClass("bg-success");
      $("#prog").removeClass("bg-danger");
    }else if($( "#intervals option:selected" ).text() == 'All Time'){
      $('.progress-bar').css('width', '80'+'%').attr('aria-valuenow', 80);
       $("#prog").addClass("bg-success");
       $("#prog").removeClass("bg-warning");
       $("#prog").removeClass("bg-danger");
      $('#msg').text('optimal');
    }
  })
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
  */
});
