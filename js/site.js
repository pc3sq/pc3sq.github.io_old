// alert("Hello!");

$(document).ready(function(){

	$("#techblogs").click( function() {
	  $("#techbloglinks").slideToggle();
	});

	$("#culturalblogs").click( function() {
	  $("#culturalbloglinks").slideToggle();
	});

	$("#gps").click( function() {
	  $("#gpslinks").slideToggle();
	});

	$("#others").click( function() {
	  $("#otherlinks").slideToggle();
	});

});