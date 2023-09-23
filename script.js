const trailer = document.querySelector('.trailer')
const play = document.querySelector('.play')
const cross = document.querySelector('.close')
const video = document.querySelector('video')

play.addEventListener('click', () => {
    trailer.classList.toggle('active')

})

cross.addEventListener('click', () => {

    trailer.classList.toggle('active')
    video.currentTime = 0
    video.pause()

})