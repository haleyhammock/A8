$(document).ready(function() {
	$(".alert").hide();
	$("#date").datepicker();
	$("#clear").click(clear);
	$("#save").click(save);
});

function clear() {
	if (confirm("Are you sure you want to clear data?")) {
		$("#title").val("");
		$("#date").val("");
		$("#input").val("");
	}
}

function save() {
	$("#title").val("");
	$("#date").val("");
	$("#input").val("");
}