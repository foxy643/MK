const botaoMusica=document.getElementById('play_btn');
const musica=new Audio('som/song.mp3');

let nextDom=document.getElementById('next');
let prevDom=document.getElementById('prev');

let carouselDom=document.querySelector('.carousel');
let SliderDom=carouselDom.querySelector('.carousel .list');

// slide que podem ser passado sozinhos ou com o click
let thumbnailBorderDom=document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom=thumbnailBorderDom.querySelectorAll('.item');
let timeDom=document.querySelector('.carousel .time');

// modo para passar sozinho o slide 
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning=3000;
let timeAutonext=9000;

botaoMusica.addEventListener("click",()=>{
    if (musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})

nextDom.onclick=function(){
    showSlider('next');
}
prevDom.onclick=function(){
    showSlider('prev');
}

let runTimeOut;
let runNextAuto=setTimeout(() => {
    nextDom.click();
}, timeAutonext);

function showSlider(type){
    let SliderItemsDom=SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom=document.querySelectorAll('.carousel .thumbnail .item');

    if (type==='next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length-1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length-1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut=setTimeout(()=>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    },timeRunning);
    clearTimeout(runNextAuto);
    runNextAuto=setTimeout(()=>{
    nextDom.click();
    }, timeAutonext)
}


