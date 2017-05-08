window.addEventListener('DOMContentLoaded', init);
function init(){
	var square = document.getElementById('square');
	var x = 2;
	var y = 300;
	square.style.transform = 'translate('+x+'px,'+y+'px)';
	window.addEventListener('keydown', function(e){
		console.log(e)
		if(e.keyCode == 37){
			x = x - 20;
		}
		else if(e.keyCode == 38){
			y = y - 20;
		}
		else if(e.keyCode == 39){
			x = x + 20;
		}
		else if(e.keyCode == 40){
			y = y + 20;
		}
		square.style.transform = 'translate('+x+'px,'+y+'px)';
	})
}

