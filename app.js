//make BMI Calculator

$(document).ready(function(){


	// Temperature by current location



	// Temperature by current location


	// window.setTimeout(function, milliseconds);
// var days;

	$("#btn").click(function(){
		var city_name = $("#cityname").val();
		// var days = $("#days").val();
		getValue(city_name);
		$("#label-1,#label-2,#city,#country,#region,#temp,#unit,#update,#current,#icon").css("visibility", "visible");
		// $("#label-2").css("visibility", "visible");

	});

	function getValue(city){
		// alert(days);
		$.ajax({
			url: 'https://api.apixu.com/v1/forecast.json?key=7b195b0bdd35453ba6b54648171302&q='+city+'&days='+1,
			dataType: 'json',
			success: function(value){
				// console.log(data);

				$.post("Temperature.php", value);

				$("#city").text(value.location.name);
				$("#country").text(value.location.country);
				$("#region").text(value.location.tz_id);

				$("#update").text(value.current.last_updated);

				// var temp=value.forecast.forecastday[0].day.maxtemp_c;
				var temp=value.current.temp_c;


				// var date=value.forecast.forecastday[0].date;
				$("#current").html(temp+"&#8451<br>");

				for (var i = 0; i <24; i++) {



					var str = value.forecast.forecastday[0].hour[i].condition.icon;
					var text = value.forecast.forecastday[0].hour[i].condition.text;
					
					str = str.replace("//", "https://");
					// $("#icon").attr("src", str);	

					if (i==0)
					$("#icon1").html("<img src="+str+" alt='icon'>"+text);


					if (i==1)
					$("#icon2").html("<img src="+str+" alt='icon'>"+text);


					if (i==2)
					$("#icon3").html("<img src="+str+" alt='icon'>"+text);


					if (i==3)
					$("#icon4").html("<img src="+str+" alt='icon'>"+text);



					if (i==4)
					$("#icon5").html("<img src="+str+" alt='icon'>"+text);


					if (i==5)
					$("#icon6").html("<img src="+str+" alt='icon'>"+text);

					if (i==6)
					$("#icon7").html("<img src="+str+" alt='icon'>"+text);

					if (i==7)
					$("#icon8").html("<img src="+str+" alt='icon'>"+text);

					if (i==8)
					$("#icon9").html("<img src="+str+" alt='icon'>"+text);

					if (i==9)
					$("#icon10").html("<img src="+str+" alt='icon'>"+text);

					if (i==10)
					$("#icon11").html("<img src="+str+" alt='icon'>"+text);

					if (i==11)
					$("#icon12").html("<img src="+str+" alt='icon'>"+text);

					if (i==12)
					$("#icon13").html("<img src="+str+" alt='icon'>"+text);

					if (i==13)
					$("#icon14").html("<img src="+str+" alt='icon'>"+text);

					if (i==14)
					$("#icon15").html("<img src="+str+" alt='icon'>"+text);

					if (i==15)
					$("#icon16").html("<img src="+str+" alt='icon'>"+text);

					if (i==16)
					$("#icon17").html("<img src="+str+" alt='icon'>"+text);


					if (i==17)
					$("#icon18").html("<img src="+str+" alt='icon'>"+text);

					if (i==18)
					$("#icon19").html("<img src="+str+" alt='icon'>"+text);

					if (i==19)
					$("#icon20").html("<img src="+str+" alt='icon'>"+text);

					if (i==20)
					$("#icon21").html("<img src="+str+" alt='icon'>"+text);

					if (i==21)
					$("#icon22").html("<img src="+str+" alt='icon'>"+text);

					if (i==22)
					$("#icon23").html("<img src="+str+" alt='icon'>"+text);

					if (i==23)
					$("#icon24").html("<img src="+str+" alt='icon'>"+text);

					// "<img src=""+str+"" alt='icon'>"
				}
				
				
			}
		});
	}
	


});
