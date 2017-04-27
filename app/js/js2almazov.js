//window.innerWidth
//window.innerHeight - размеры страницы
//window.outerWidth
//window.outerHeight - размеры окна браузера

//document.createElement('span') - создаем тег
//document.createTextNode('Hello') - создаем текстовый узел
//span.appendChild(text) - создает в элементе спан текст
//document.body.appendChild(span) - добавляет этот элемент в HTML
//
// var kesha = document.getElementById('block');
// var newTag = document.createElement('span');
// var newText = document.createTextNode('Мой текст');
// newTag.appendChild(newText);
// kesha.appendChild(newTag);

// //Можно через ПРОТОТИП забрать любую функцию Array для HTMLCollection
// var abcs = document.getElementByClassName('abc');
// HTMLCollection.prototype.map = Array.prototype.map;
// abcs.map(x => console.log(x.innerText));

//Конструктор треугольников. Вращается при клике
function Triangle(id,base,height,color) {
    this.idElement = document.getElementById(`${id}`);
    this.width = `${base}`;
    this.h = `${height}`;
    this.background = `${color}`;
    this.show = function () {
    	var blockCreate = document.createElement('div');
    	this.idElement.appendChild(blockCreate);
    	var styleCss = blockCreate.style;
    	styleCss.width = 0;
    	styleCss.margin = '200px auto';
        styleCss.border = `${this.width/2}px solid transparent`;
        styleCss.borderTop = '0 solid transparent';
        if(color != undefined){
        	styleCss.borderBottom = `${this.h}px solid ${this.background}`;
        }else{
        	styleCss.borderBottom = `${this.h}px solid ${this.background}`;
        }  
    }
    this.setDirection = function(){
    	function clic(e){
    		e.target.style.transformOrigin = '150px 150px';
	    	for(var i=0;i<=5;++i){
		    	if(e.target.style.transform == 'rotate(90deg)'){
					setTimeout(function(){e.target.style.transform = 'rotate(180deg)';console.log(e.target.style.transform)}, 1000);
				}else if(e.target.style.transform == 'rotate(180deg)'){
					setTimeout(function(){e.target.style.transform = 'rotate(270deg)';console.log(e.target.style.transform)}, 1000);
				}else if(e.target.style.transform == 'rotate(270deg)'){
					setTimeout(function(){e.target.style.transform = 'rotate(0deg)';console.log(e.target.style.transform)}, 1000);
				}else if(e.target.style.transform == 'rotate(0deg)' || e.target.style.transform == 'rotate(360deg)' || e.target.style.transform == ""){
					setTimeout(function(){e.target.style.transform = 'rotate(90deg)';console.log(e.target.style.transform)}, 1000);
				}
			}
		}
		this.idElement.children[0].addEventListener('click', clic, false);
	}
}
var mini = new Triangle('block1', 300, 300, 'blue');
var mini2 = new Triangle('block2', 300, 300, 'blue');
mini.show();mini2.show();
mini.setDirection();mini2.setDirection();


























