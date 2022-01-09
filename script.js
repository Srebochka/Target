$(document).ready(function(){
	$(window).scroll(function(event){
		var s=$(this).scrollTop();
		var w=$(this).outerWidth();
		var h=$('.content'). outerHeight();
		var h_b=$('.parallax').outerHeight();
		var p = s/h*100;
		var p_b = s/h_b*100;
		var p_d = s/h_b*0.0000001;
		var o = 1-1/100*p_b;

		var hr_3=w/150000000000000*p_d;
		var z_1=1+(w/200000*p_b);
		$('.parallax_fog').css('transform','translate3d('+hr_3+'px,0,0) scale('+z_1+')');
		$('.parallax_fog').css('opacity', o);

		var z_2=1+(w/500000*p);
		$('.parallax_montain_1').css('transform','scale('+z_2+')');

		var hr=w/2000*p_b;
		var z_3=1+(w*0.00002*p_b);
		$('.parallax_montain_2').css('transform','translate3d('+hr+'px,0,0) scale('+z_3+')');

		var hr_2=w/15000*p_d;
		var z_4=1+(w*0.00001*p_b);
		$('.parallax_montain_3').css('transform','translate3d('+hr_2+'px,0,0) scale('+z_4+')');
		$('.parallax_montain_3').css('opacity', o);
	});
});