$(document).ready(function() {
	$(".alert").hide();
	$("#date").datepicker();
	$("#clear").click(clear);
});

function clear() {
	if (confirm("Are you sure you want to clear data?")) {
		$("#title").val("");
		$("#date").val("");
		$("#input").val("");
	}
}