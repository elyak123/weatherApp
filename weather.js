$(document).ready(function(){
	encabezado();
	var rawUrl = "http://api.openweathermap.org/data/2.5/weather?";
	var key = "4d1ae4b1501eb1f48985bd4fe68b5233";
	$.getJSON('http://ipinfo.io', function(data){
		console.log(data);
		var split = data.loc.split(',');
		var lat = split[0];
		var lon = split[1];
		$.ajax({
			url: rawUrl + "lat=" + lat + "&" + "lon=" +lon + "&appid=" + key,
			method: "GET",
			dataType: "jsonp",
			success: function(x){
				$("#weather").append(x.name);
				$("#weather").append(x.weather[0].main);
				$("#weather").append(x.weather[0].description);
				console.log(x);
			}
		});

		});
});


	