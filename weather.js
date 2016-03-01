$(document).ready(function(){
	var rawUrl = "http://api.openweathermap.org/data/2.5/weather?";
	var key = "4d1ae4b1501eb1f48985bd4fe68b5233";
	navigator.geolocation.getCurrentPosition(function(pos){
		var lat = pos.coords.latitude;
		var lon = pos.coords.longitude;
		$.ajax({
			url: rawUrl + "lat=" + lat + "&" + "lon=" +lon + "&appid=" + key,
			method: "GET",
			dataType: "jsonp",
			success: function(x){
				$("#weather").append(x);
				console.log(x);
			}
		});		
	});



	navigator.geolocation.getCurrentPosition(function(pos){
		
	})
});