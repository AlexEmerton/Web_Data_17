(function updateWeather() {
  setTimeout(function() {
  $.ajax( {
	url:'weather.json',
	type: 'GET',
	dataType: 'json',
	success: function(response){
		var txt = '';
		$('#weather').html('');
		$.each(response.weather, function(index) {        
		/* console.log(getWeatherIco(response.weather[index].current_cond)); */
			txt += '<tr><td>' + 
			response.weather[index].city_name + '</td><td>' +
			response.weather[index].current_cond +  
			' <img id="theImg" src="'+getWeatherIco(response.weather[index].current_cond) +'" height="17" width="23"></img>' + 
			'</td><td>' +
			response.weather[index].temperature +  '</td><td>' +
			response.weather[index].wind_speed +  '</td><td>' +
			response.weather[index].wind_dir +  '</td><td>' +
			response.weather[index].wind_chill +  '</td></tr>';
		});
		$('#weather').append("<tr><th>City</th><th>Current conditions</th>" + 
		"<th>Current temperature</th><th>Wind speed</th><th>Wind direction</th>" +
		"<th>Feels like</th></tr>", txt);
		updateWeather(); 
		},	
	error: function() {
	$('#info').html('<p>An error has occurred</p>');  
	}
});
}, 0);	
})();

function getWeatherIco(weather){
	var icon;
	if (weather === "Cloudy") {
		icon = 'http://titan.dcs.bbk.ac.uk/~adjuma01/wd/fma/task1/weather_icons/cloud.png';
	}
	else if (weather === "Sunny") {
		icon = 'http://titan.dcs.bbk.ac.uk/~adjuma01/wd/fma/task1/weather_icons/sun.png';
	}
	else if (weather === "Hail") {
		icon = 'http://titan.dcs.bbk.ac.uk/~adjuma01/wd/fma/task1/weather_icons/hail.png';
	}
	else if (weather === "Heavy clouds") {
		icon = 'http://titan.dcs.bbk.ac.uk/~adjuma01/wd/fma/task1/weather_icons/heavy cloud.png';
	}
	else if (weather === "Heavy rain") {
		icon = 'http://titan.dcs.bbk.ac.uk/~adjuma01/wd/fma/task1/weather_icons/heavy rain.png';
	}
	else if (weather === "Rain") {
		icon = 'http://titan.dcs.bbk.ac.uk/~adjuma01/wd/fma/task1/weather_icons/rain.png';
	}
	else if (weather === "Sleet") {
		icon = 'http://titan.dcs.bbk.ac.uk/~adjuma01/wd/fma/task1/weather_icons/sleet.png';
	}
	else if (weather === "Snow") {
		icon = 'http://titan.dcs.bbk.ac.uk/~adjuma01/wd/fma/task1/weather_icons/snow.png';
	}
	else if (weather === "Partly cloudy") {
		icon = 'http://titan.dcs.bbk.ac.uk/~adjuma01/wd/fma/task1/weather_icons/sun and cloud.png';
	}
	else if (weather === "Thunderstorms") {
		icon = 'http://titan.dcs.bbk.ac.uk/~adjuma01/wd/fma/task1/weather_icons/thunderstorm.png';
	}
	return icon;
}


