var intervalo = 2000;

function slide1(){
    document.getElementById('foto').src = './img/Lol.jpg'
    setTimeout("slide2()", intervalo)
}

function slide2(){
    document.getElementById('foto').src = './img/unnamed.jpg'
    setTimeout("slide3()", intervalo)
}

function slide3(){
    document.getElementById('foto').src = './img/camp.jpg'
    setTimeout("slide1()", intervalo)
}