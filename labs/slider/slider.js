// СЛАЙДЕР !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

window.addEventListener('DOMContentLoaded', init);

var images,
	container;

function init() {

	container = document.getElementById('container');
	container.style.left = '0';
	images = document.getElementsByClassName('my-image');
	setTimeout(function next(){
		var curPos = container.style.left;
		var imageSize = images[0].clientWidth;
			container.style.left = (parseInt(curPos) - imageSize) + 'px';
			if(curPos === -(3/*images.length-1*/)*imageSize + 'px'){
				container.style.transition = 'left 5s ease';
				container.style.left = '0';
				setTimeout(function() {
					container.style.transition = 'left 3s ease-out';
				},5000);
				setTimeout(next,5100);
			}else{		
				setTimeout(next, 4000);
			}
	},4000)

}