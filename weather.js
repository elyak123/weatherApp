$(document).ready(function(){
	encabezado();
	var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?";
	var currentUrl = "http://api.openweathermap.org/data/2.5/weather?";
	var key = "4d1ae4b1501eb1f48985bd4fe68b5233";
	$.getJSON('http://ipinfo.io', function(data){
		console.log(data);
		var split = data.loc.split(',');
		var lat = split[0];
		var lon = split[1];
		$.ajax({
			url: currentUrl + "lat=" + lat + "&lon=" +lon + "&lang=es&units=metric&appid=" + key,
			method: "GET",
			dataType: "jsonp",
			success: function(x){
				var icon = x.weather[0].icon
				$('#currentImage').attr('src','weathericons/' + icon + '.png').attr('alt', x.weather[0].description);
				$('#currentDescription').html(x.weather[0].description);
				$('#currentTemp span').html(x.main.temp);
				$('#city').html(x.name);
				console.log(x);
				//debugger;
			}
		});
		// $.ajax({
		// 	url: forecastUrl + "lat=" + lat + "&lon=" +lon + "&lang=es&units=metric&appid=" + key,
		// 	method: "GET",
		// 	dataType: "jsonp",
		// 	success: function(y){
		// 		var icon 		= y.list[0].weather[0].icon;
		// 		var description = y.list[0].weather[0].description;
		// // 		$('#currentImage').attr('src','weathericons/' + icon + '.png').attr('alt', description);
		// // 		$('#currentTemp').html(y.list.temp);
		// // 		$('#city').html(y.name);				
		// 		console.log(y);
		// 	}
		// });
	});
	$('#gpsTrigger').on('click', function(){
		navigator.geolocation.getCurrentPosition(function(pos){
			var lat = pos.coords.latitude;
			var lon = pos.coords.longitude;
			debugger;
			$.ajax({
				url: currentUrl + "lat=" + lat + "&lon=" +lon + "&lang=es&units=metric&appid=" + key,
				method: "GET",
				dataType: "jsonp",
				success: function(x){
					var icon = x.weather[0].icon
					$('#currentImage').attr('src','weathericons/' + icon + '.png').attr('alt', x.weather[0].description);
					$('#currentDescription').html(x.weather[0].description);
					$('#currentTemp span').html(x.main.temp);
					$('#city').html(x.name);
					console.log(x);
					//debugger;
				}
			});
		});
	});
	footer();
});


	