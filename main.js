
const keys = Array.from(document.querySelectorAll('.key'));

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }

    if (key) {
        key.classList.add('playing');
    }
}
this.addEventListener("transitionend", (event) => {
    event.target.classList.remove("playing");
});
function removePlayingClass(event) {
    if (event.propertyName === 'transform') {
        event.target.classList.remove('playing');
    }
}
keys.forEach(key => {
    key.addEventListener('transitioned', removePlayingClass);
});
document.addEventListener('keydown', playSound);
