$(document).ready(function(){
	encabezado();
	var currentUrl = "http://api.openweathermap.org/data/2.5/weather?";
	var key = "4d1ae4b1501eb1f48985bd4fe68b5233";
	function calling(lat, lon, key, cUrl){
		$.ajax({
			url: cUrl + "lat=" + lat + "&lon=" +lon + "&lang=es&units=metric&appid=" + key,
			method: "GET",
			dataType: "jsonp",
			success: function(x){
				var icon = x.weather[0].icon;
				var daylight = icon[2];
				var back = icon.slice(0, 2);
				if (daylight === "d") {
					$('#animation').addClass('day');
				} else{
					$('#animation').addClass('night');
					$('#current').addClass('currentNight');
				}
				$('#currentImage').attr('src','weathericons/' + icon + '.png').attr('alt', x.weather[0].description);
				$('#currentDescription').html(x.weather[0].description);
				$('#currentTemp span').html(Math.round(x.main.temp));
				$('#city').html(x.name);
				//hacer un get para describir las distintas animaciones.
				$.get(back + ".html", function(data){
					$("#animation").html(data);
				});
				console.log(x);
			}
		});
	}
	$.getJSON('http://ip-api.com/json', function(data){
		var lat = data.lat;
		var lon = data.lon;
		calling(lat, lon, key, currentUrl)
	});

	footer();
});