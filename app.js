const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const moveList = ['videos/hero-1.mp4','videos/hero-1.mp4','videos/hero-1.mp4','videos/hero-1.mp4',];

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1;
    video.src = moveList[index];

    if (index === 3){
        index = -1;
    }
})