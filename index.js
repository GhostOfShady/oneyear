document.documentElement.style.setProperty('--h', window.innerHeight + 'px');

const spawner = {
    x: [-5, 105],//vw
    y: 105//vh
}
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        if (!document.hasFocus()) return
        const div = document.createElement('div')

        div.style.left =    (~~(Math.random() * (spawner.x[1] - spawner.x[0] + 1)) + spawner.x[0]) + 'vw';
        div.style.top = spawner.y + 'vh'
        div.className = 'heart'

        div.addEventListener('animationend', () => div.remove())

        document.body.appendChild(div)
    }, 250)
})