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

	$( "header" ).load( "../header.html" ); //includes header

	$("footer").load("../footer.html"); //includes footer

});


