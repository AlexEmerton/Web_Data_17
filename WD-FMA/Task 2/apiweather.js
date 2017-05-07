 $(document).ready(function() {
	$("#region").change(function() {
    var opt = $(this) ;
    
    if(opt.val() === "england" ) {
		$("#cities").load('england-cities.html');
    }
     else if(opt.val() === "scotland" ) {
        $("#cities").load('scotland-cities.html'); 
	}
	 else if(opt.val() === "wales" ) {
        $("#cities").load('wales-cities.html'); 
	}
	 else if(opt.val() === "nireland" ) {
        $("#cities").load('nireland-cities.html'); 
	}
  });
  
	function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var year = a.getFullYear();
  var month = a.getMonth();
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var time =  hour + ':' + min + ' / ' + date + '-' + month + '-' + year;
  return time;
}
	
	function getDirection(angle) {
        
        var degrees = 45;	
		// 360 divided by 8 cardinal directions
        angle = angle + degrees/2;
        
        if (angle >= 0 && angle < 1 * degrees)
            return "Northerly";
        if (angle >= 1 * degrees && angle < 2 * degrees)
            return "North Easterly";
        if (angle >= 2 * degrees && angle < 3 * degrees)
            return "Easterly";
        if (angle >= 3 * degrees && angle < 4 * degrees)
            return "South Easterly";
        if (angle >= 4 * degrees && angle < 5 * degrees)
            return "Southerly";
        if (angle >= 5 * degrees && angle < 6 * degrees)
            return "South Westerly";
        if (angle >= 6 * degrees && angle < 7 * degrees)
            return "Westerly";
        if (angle >= 7 * degrees && angle < 8 * degrees)
            return "North Westerly";
        return "Northerly";
    }
	
	function toMPH(speed){
		speed = speed * 2.23694;
		return speed;
	}
  
  $('#cities').change(function() {
		var cityID = $("#cities option:selected").val();
		var apiKey = '35e267c8c4ce3f6450981a023a428bb2';
		var apiURL =  'http://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&units=metric&appid=' + apiKey;

		$.ajax( {
			url: apiURL,
			type: 'GET',
			dataType: 'json',
			success: function(json){
				var imgURL = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
				var txt  = '';
				$('#city').html('');
				console.log(JSON.stringify(json));
				
				txt += '<div id = "main"><div id = "title"><span>' + json.name + ', ' + json.sys.country + '</span></div>' + 
				'<span>Observed at: ' + timeConverter(json.dt) + '</span>' + 
				'<span id = "cond">Current conditions: ' + json.weather[0].main + 
				'<img id="theImg" src="'+imgURL+'" style="vertical-align:middle" title = "' + json.weather[0].description + '"></span>' +
				'<span>Current temperature:<div id = "temp"> ' + Math.round(json.main.temp) + '&deg;C' +  '</div></span> '+ 
				'<span>Wind speed: '  + toMPH(json.wind.speed).toFixed(1) + ' mph</span>' +
				'<span>Wind direction: ' + getDirection(json.wind.deg) + '</span></div>';

				if($('#city').attr("hidden")) {
					$('#city').show();
					$('#city').append(txt);
				}
			},
			error: function(xhr, error) {
				$(' #info').append(error.toUpperCase() + '. HTTP status: ' + xhr.status);
			}
		}); 
	});
  
 });