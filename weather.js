$(document).ready(function(){
	$.get('http://elyak123.github.io/Portafolio-fcc/Templates/encabezado.html', function (data){
		$('header').html(data);
	});
	debugger;
	$(".boton-movil").click(function(){
		debugger;
		if ($("li").hasClass("menu-listitem")) {
			console.log("true");
			$(".menu-listitem").slideDown("slow").addClass("menu-listMovil").removeClass("menu-listitem");	
		} else{
			console.log("false");
			$(".menu-listMovil").slideUp("slow").addClass("menu-listitem");
			//$(".menu-listitem").removeClass("menu-listMovil");
		};
		
		console.log("click");
		$(window).on("resize", function () {
			if ($(window).width() > 500) {
	    		$("li").css('display','').removeClass("menu-listMovil");
			}
		}).resize();
	});
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


	