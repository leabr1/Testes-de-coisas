var slider = document.getElementById('slider')
var active = document.getElementById('active')
var line1 = document.getElementById('p1')
var line2 = document.getElementById('p2')
var line3 = document.getElementById('p3')
var line4 = document.getElementById('p4')
var line5 = document.getElementById('p5')

line1.onclick = function(){
    slider.style.transform = 'translateX(0)'
    active.style.transform = 'translateX(-190.63px)' //38.126
}
line2.onclick = function(){
    slider.style.transform = 'translateX(-20%)'
    active.style.transform = 'translateX(-131.63px)'
}
line3.onclick = function(){
    slider.style.transform = 'translateX(-40%)'
    active.style.transform = 'translateX(-72.63px)'
}
line4.onclick = function(){
    slider.style.transform = 'translateX(-60%)'
    active.style.transform = 'translateX(-14.6px)'
}
line5.onclick = function(){
    slider.style.transform = 'translateX(-80%)'
    active.style.transform = 'translateX(43.63px)'
}