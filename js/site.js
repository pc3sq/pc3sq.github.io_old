// alert("Hello!");

$(document).ready(function(){

	$( "header" ).load( "../header.html" ); //includes header

	$("footer").load("../footer.html"); //includes footer

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


