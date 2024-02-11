const circle = document.querySelector('.circle');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const main = document.querySelector('main');
let szerokosc = 1000;
let wysokosc = 1000;
let siema = 2.3;
let dodatniePX = 200;

const line = document.querySelector('.line');
const circle_mini = document.querySelectorAll('.circle_mini');
window.addEventListener('scroll', circleScroll);

if (window.matchMedia("(min-width: 2301px").matches) {
    // szerokosc = 700;
    // wysokosc = 700;
    siema = 2.3;
}

if (window.matchMedia("(min-width: 2001px) and (max-width: 2300px)").matches) {
    szerokosc = 700;
    wysokosc = 700;
}
if (window.matchMedia("(min-width: 1801px) and (max-width: 2000px)").matches) {
    szerokosc = 600;
    wysokosc = 600;
}
if (window.matchMedia("(min-width: 1601px) and (max-width: 1800px)").matches) {
    szerokosc = 550;
    wysokosc = 550;
    siema = 2;
}

if (window.matchMedia("(min-width: 1401px) and (max-width: 1600px)").matches) {
    szerokosc = 550;
    wysokosc = 550;
        siema = 1.8;
}
if (window.matchMedia("(min-width: 1201px) and (max-width: 1400px)").matches) {
    szerokosc = 450;
    wysokosc = 450;
    dodatniePX = 350;
    siema = 1.9;
}



if (window.matchMedia("(min-width: 1024px) and (max-width: 1200px)").matches) {
    szerokosc = 400;
    wysokosc = 400;
    dodatniePX = 500;
    siema = 1.8;
}
if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
    szerokosc = 400;
    wysokosc = 400;
    dodatniePX = 200;
    siema = 1.6;
}
if (window.matchMedia("(min-width: 655px) and (max-width: 767px)").matches) {
    szerokosc = 400;
    wysokosc = 400;
    dodatniePX = 200;
    siema = 1.6;
}
if (window.matchMedia("(min-width: 480px) and (max-width: 654px)").matches) {
    szerokosc = 400;
    wysokosc = 400;
    dodatniePX = 200;
    siema = 1.9;
}
if (window.matchMedia("(min-width: 400px) and (max-width: 479px)").matches) {
    szerokosc = 400;
    wysokosc = 400;
    dodatniePX = 150;
    siema = 1.9;
}
if (window.matchMedia("(min-width: 320px) and (max-width: 399px)").matches) {
    szerokosc = 300;
    wysokosc = 300;
    dodatniePX = 100;
    siema = 1.9;
}

if (window.matchMedia("(max-width: 1023px)").matches) {
    szerokosc = 300;
    wysokosc = 300;
    dodatniePX = 100;
    siema = 1.9;
    document.querySelector('.make').innerHTML = ` <p class="mark">Stwórz swoją markę</p><p class="kaypee">Kaypee.</p>`
}











//w srodku circle daj napis kaypee a stworz swoja marke zrob tak ze nie ma br

function circleScroll() {
    circle.style.height = wysokosc;
    circle.style.width = szerokosc;
    let circleScrolly = scrollY * siema + szerokosc + 'px';
    circle.style.height = circleScrolly ;
    circle.style.width = circleScrolly ;

    if (parseInt(circle.style.height) >= screenHeight + dodatniePX && parseInt(circle.style.width) >= screenWidth + dodatniePX) {
        document.querySelector('.sztrzaleczka').style.display = 'none';
        document.querySelector('.con2').style.opacity = '1';
        // document.querySelector('.con4').style.opacity = '1';
        circle.style.display = 'none';
        main.style.background = 'black';
        line.classList.add('line_animation');
        // line.style.opacity = '1';
        setTimeout(function(){

        document.querySelector('.miniline1').style.opacity = '1';
        document.querySelector('.miniline1').classList.add('miniline_width');

        }, 500)
        setTimeout(function(){
        document.querySelector('.line_con41').classList.add('line_cont_width');
        document.querySelector('.line_con41').style.opacity = '1';
        document.querySelector('.lang1').style.opacity = '1';
        }, 1300)
        setTimeout(function(){
        document.querySelector('.circle_mini1').style.opacity = '1';
        },2100)
            


        setTimeout(function(){

        document.querySelector('.miniline2').style.opacity = '1';
        document.querySelector('.miniline2').classList.add('miniline_width');
        // document.querySelector('.circle_mini2').style.opacity = '1';
        }, 1000)
        setTimeout(function(){
        document.querySelector('.line_con42').style.opacity = '1';
        document.querySelector('.line_con42').classList.add('line_cont_width');
        document.querySelector('.lang2').style.opacity = '1';
        },1800)
        setTimeout(function(){
            document.querySelector('.circle_mini2').style.opacity = '1';
        },2600)





        setTimeout(function(){

        document.querySelector('.miniline3').style.opacity = '1';
        document.querySelector('.miniline3').classList.add('miniline_width');
        // document.querySelector('.line_con43').style.opacity = '1';
        // document.querySelector('.circle_mini3').style.opacity = '1';
        }, 1500)
        setTimeout(function(){
            document.querySelector('.line_con43').style.opacity = '1';
            document.querySelector('.line_con43').classList.add('line_cont_width');
            document.querySelector('.lang3').style.opacity = '1';
        },2300)
        setTimeout(function(){
            document.querySelector('.circle_mini3').style.opacity = '1';
        },3100)



        setTimeout(function(){

        document.querySelector('.miniline4').style.opacity = '1';
        document.querySelector('.miniline4').classList.add('miniline_width');
        // document.querySelector('.line_con44').style.opacity = '1';
        // document.querySelector('.circle_mini4').style.opacity = '1';
        }, 2000)
        setTimeout(function(){
            document.querySelector('.line_con44').style.opacity = '1';
            document.querySelector('.line_con44').classList.add('line_cont_width');
            document.querySelector('.lang4').style.opacity = '1';
        },2800)
        setTimeout(function(){
            document.querySelector('.circle_mini4').style.opacity = '1';
        },3500)



    } else {
        document.querySelector('.sztrzaleczka').style.display = 'block';
        document.querySelector('.con2').style.opacity = '0';
        // document.querySelector('.con4').style.opacity = '0';
        circle.style.display = 'block';
        main.style.background = 'white';
        // line.classList.remove('line_animation');



    }
}
let elomelo = 1.8;
document.querySelector('.sztrzaleczka').addEventListener('click', function() {
    if (window.matchMedia("(min-width: 480px) and (max-width: 654px)").matches){
        elomelo = 2;
    }
    if (window.matchMedia("(min-width: 400px) and (max-width: 479px)").matches){
        elomelo = 2.1;
    }
    if (window.matchMedia("(min-width: 320px) and (max-width: 399px)").matches){
        elomelo = 2.1;
    }
    scrollBy({
        
        top:screenHeight /elomelo,
        behavior: 'smooth'
    });
});
//napraw te divy tylko