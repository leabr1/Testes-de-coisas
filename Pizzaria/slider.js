let slider = document.getElementById('slider')
let active = document.getElementById('active')
let line1 = document.getElementById('p1')
let line2 = document.getElementById('p2')
let line3 = document.getElementById('p3')
let line4 = document.getElementById('p4')
let line5 = document.getElementById('p5')

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