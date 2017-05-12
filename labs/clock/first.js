var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
function clockStart(){
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    
    //часы
    
    if(h > 10){
        hour.textContent = h.toString();
    }else{
        hour.textContent = '0' + h.toString();
    }
    
    //минуты
    
    if(m >= 10){
        minute.textContent = m.toString();
    }else{
        minute.textContent = '0' + m.toString();
    };
    
    //секунды
    
    if(s >= 10){
        second.textContent = s.toString();
    }else{
        second.textContent = '0' + s.toString();
    }
    if(s >= 55){
        second.classList.add('animate');
    }
    if(s == 0){
        second.classList.remove('animate');
    }
    
}
clockStart();
setInterval(clockStart, 1000);
//Добавление секундомера, отсчет 59 и меньше

// function addSeconds(str, p1, p2, offset, s){
//     if(parseInt(p2) > 0){
//         return p1+(parseInt(p2)-1)    
//     }else if (parseInt(p2)==0 && parseInt(p1) != 0){
//         return (parseInt(p1)-1)+'9'
//     }else if(parseInt(p1)==0 && parseInt(p2)==0){
//         return 59    
//     }
// }
// function addMinutes(){
    
// }
// function addHours(){
    
// }
// function showSeconds(){
//   second.textContent = second.textContent.replace(/(\d)(\d)/, addSeconds)
// }
// setInterval(showSeconds, 1000);

