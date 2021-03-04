function openMenu() {
  document.getElementById("sidebar").classList.toggle("show");
}
function graph() {
  document.getElementById("options").classList.toggle("show");
}
function initializePage() {
    $.get('/profile', onServerResponse);
}
function onServerResponse(data){
  var inputs = String(data.records[data.records.length-1].input);
  var per = inputs + '0%';
  document.getElementById("prog").style.width=per;
  var level = 'Rating: ' + inputs + '/10'
  $('#msg').text(level)
    $('#intervals').change(function(){

      var prog =  document.getElementById('prog');
      if($( "#intervals option:selected" ).text() == 'Last Week')
      {
        var lastsev = parseInt(lastseven(data));
        if(lastsev == 0){
          alert('Not enough data!')
        }else{
          var per = lastsev + '0%';
          document.getElementById("prog").style.width=per;
          var level = 'Rating: ' + lastsev+ '/10'
          $('#msg').text(level)
        }
      }else if($( "#intervals option:selected" ).text() == 'Recent'){
        var inputs = String(data.records[data.records.length-1].input);
        var per = inputs + '0%';
        document.getElementById("prog").style.width=per;
        var level = 'Rating: ' + inputs + '/10'
        $('#msg').text(level)
      }else if($( "#intervals option:selected" ).text() == 'All Time'){
        var dataall = alltime(data);
        var per = dataall + '0%';
        document.getElementById("prog").style.width=per;
        var level = 'Rating: ' + dataall+ '/10'
        $('#msg').text(level)
      }
    })


}
function alltime(data){
  var add = 0;
  for(var i = 0; i < data.records.length;i++){
    var inputs = parseInt(data.records[i].input);
    add = add += inputs;
  }
  add = add/data.records.length;
  return Math.round(add);
}
function lastseven(data){
  var add = 0;
  if(data.records.length < 7){

    return 0;
  }
  for(var i = data.records.length-1;i >= 7;i--){
    var inputs = parseInt(data.records[i].input);
    add = add += inputs;
  }
  add = add/data.records.length;
  return Math.round(add);
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
  initializePage();
  $('#subject').change(function() {
    $('#dates').val('');
    $('#title').val('');
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
