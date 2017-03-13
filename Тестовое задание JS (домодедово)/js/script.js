
	function calculation() {

		var a = parseInt(document.getElementById('a').value);
		var b = parseInt(document.getElementById('b').value);

		if (isNaN(a)==true) a=0;

		if (isNaN(b)==true) b=0;

		var ua = navigator.userAgent;  

		if (ua.search(/Chrome/) > 0) {
			var c = Math.hypot(a, b);
			return document.getElementById('result').innerHTML = "Корень из суммы квадратов двух чисел = " + c; 
		} 
		else if (ua.search('Trident/7.0') > 0)  {
			var c = a * b;
			return document.getElementById('result').innerHTML = "Произведение двух чисел = " + c; 
		}
	    else if (ua.search(/Firefox/) > 0) {
	    	var c = a + b;
	    	return document.getElementById('result').innerHTML = "Сумма двух чисел = " + c; 
	    } 
	    else {
	    	return 'Не определен';
	    }

	}


