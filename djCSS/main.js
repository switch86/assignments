const rick = document.querySelector('#two')
const audio = new Audio("audio.mp3")

rick.addEventListener('mouseover', () => {
    audio.play()
})
rick.addEventListener('mouseout', () => {
    audio.pause()
})