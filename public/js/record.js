
var date = new Date();
var currentMonth = date.getMonth();
var currentDate = date.getDate();
var currentYear = date.getFullYear();

$(document).ready(function() {
	$(".alert").hide();
	$("#date").datepicker({
		
		maxDate: new Date(currentYear, currentMonth, currentDate)
});
	
	$("#clear").click(clear);
});

function clear() {
	if (confirm("Are you sure you want to clear data?")) {
		$("#title").val("");
		$("#date").val("");
		$("#input").val("");
	}
}