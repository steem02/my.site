// Слайдер и галереи Lightbox
window.addEventListener('DOMContentLoaded', init);

var blackpanel,
	images;

function closeLightbox() {
	blackpanel.innerHTML = '';
	blackpanel.style.display = 'none';
	blackpanel.removeEventListener('click', closeLightbox);
}

function init() {
	blackpanel = document.getElementById('blackpanel');
	images = document.getElementsByClassName('my-image');
	console.log(images);
	for(var i = 0; i <images.length; i++){
		images[i].addEventListener('click', function(){
			blackpanel.style.display = 'flex';
			console.log(this.src);

			var bigImage = document.createElement('img');
			bigImage.src = this.src;
			bigImage.style.width = '75vw';
			bigImage.style.margin = 'auto';
			bigImage.style.borderRadius = '4px';
			blackpanel.appendChild(bigImage);

			bigImage.addEventListener('click',function(e){
				console.log('next');
				e.stopPropagation();
			},false)
			
			blackpanel.addEventListener('click', closeLightbox, false);
		});
	}
}