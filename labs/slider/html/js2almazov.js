
// СЛАЙДЕР !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


window.addEventListener('DOMContentLoaded', init);
var images,container,slide,curPos,randomColor,stop2,knope;

function init() {
	var buttonLeft = document.getElementById('buttonLeft');
	var buttonRight = document.getElementById('buttonRight');
	knope = document.getElementsByClassName('buttons');
	container = document.getElementById('container');
	imag = document.getElementsByClassName('my-image');
	slide = document.getElementById('slider');
	imageSize = parseInt(getComputedStyle(imag[0]).width);
	

	var left = function(){
		container.insertBefore(imag[(imag.length-1)],imag[0]);
	};
	var right = function(){
		container.appendChild(imag[0]);
	};
	var out = function(){
		for(var i = 0; i < knope.length; ++i){
		knope[i].style.display = 'none';
		}
		slide.blur();
	}
	var key = function(e){
		if(e.keyCode == 37){
			left();
		}else if(e.keyCode == 39){
			right();
		}
		e.stopPropagation();
	}

	slide.addEventListener('keyup', key);
	buttonLeft.addEventListener('click', left);
	buttonRight.addEventListener('click', right);
	slide.addEventListener('mouseout', out);
	container.style.left = 0;
	function step1(){
		randomColor = '#'+Math.floor(Math.random()*16000000).toString(16);
		curPos = container.style.left;
		slide.style.boxShadow = '0 0 53px 7px'+randomColor;
		container.style.left = (parseInt(curPos) - imageSize) + 'px';
		setTimeout(function (){
				slide.style.boxShadow = '0 0 0px 0px'+randomColor;
			},2500);
			
		if(curPos === -(imag.length-1)*imageSize + 'px'){
			container.style.transition = 'left 10s';
			slide.style.transition = 'box-shadow 10s';
			slide.style.boxShadow = '0 0 73px 45px'+randomColor;
			container.style.left = '0';
			setTimeout(function() {
				container.style.transition = 'left 5s ease';
				slide.style.transition = 'box-shadow 5s ease';
			},10000);
			setTimeout(step1,10100);
		}else{	
			var stop2 = setTimeout(step1,5000);
			};
		var even = function(event){
				for(var i = 0; i < knope.length; i++){
					knope[i].style.display = 'block';
					knope[i].style.opacity = '0.4';
				}
				clearTimeout(stop2);
				slide.focus();
				event.stopPropagation();
			}
		slide.addEventListener('mouseover', even);
	}
	setTimeout(step1,1500);
};













