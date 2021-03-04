/*var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }*/

 function openModal(){
 	document.getElementById("myModal").classList.toggle("show");
 }

 function openModalPost(){
 	document.getElementById("myModalPost").classList.toggle("show");
 }

 function closeModal(){
 	document.getElementsByClassName("model-content").classList.toggle("hide");
 }

 function commentOn(){
 	var txt = document.getElementById("topicComment2").value
 	$("#para").append("You commented: " + txt + "<br>");
 }
    

