document.documentElement.style.setProperty('--h', window.innerHeight + 'px');

const [width, height] = [window.innerWidth, window.innerHeight]
const spawner = {
    x: [width *  -0.05, width * 1.05],//vw
    y: height * 1.05//vh
}
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        if (!document.hasFocus()) return
        const div = document.createElement('div')

        div.style.left =    (~~(Math.random() * (spawner.x[1] - spawner.x[0] + 1)) + spawner.x[0]) + 'px';
        div.style.top = spawner.y + 'px'
        div.className = 'heart'

        div.addEventListener('animationend', () => div.remove())

        document.body.appendChild(div)
    }, 200)

    setInterval(() => {
        document.querySelector(".cFace").classList.toggle("close");
        setTimeout(() => {
            document.querySelector(".cFace").classList.toggle("close");
        }, 150)
    }, 3000)
})