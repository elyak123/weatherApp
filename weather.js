$(document).ready(function(){
	var rawUrl = "api.openweathermap.org/data/2.5/weather?";
	var key = "4d1ae4b1501eb1f48985bd4fe68b5233";
	navigator.geolocation.getCurrentPosition(function(pos){
		console.log(pos);
		$("#weather").append(pos);
	});



	// navigator.geolocation.getCurrentPosition(function(pos){
	// 	$.ajax({
	// 		url: rawUrl + "lat=" + pos.latitude + "&" + pos.longitude + "&appid=" + key,
	// 		method: "GET",
	// 		dataType: "jsonp",
	// 		success: function(x){
	// 			$("#weather").append(x);
	// 			console.log(x);
	// 		}
	// 	});		
	// })
});