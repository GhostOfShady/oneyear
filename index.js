document.documentElement.style.setProperty('--h', window.innerHeight + 'px');

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const [width, height] = [window.innerWidth, window.innerHeight]
const spawner = {
    x: [width *  -0.05, width * 1.05],//vw
    y: height * 1.05//vh
}

document.addEventListener('DOMContentLoaded', () => {
    const song = document.getElementById('song')
    song.play()
    
    setInterval(() => {
        if (!document.hasFocus()) return
        const div = document.createElement('div')

        div.style.left = random(...spawner.x) + 'px';
        div.style.top = spawner.y + 'px'
        div.className = 'heart'

        div.addEventListener('animationend', () => div.remove())

        document.body.appendChild(div)
    }, 200)

    const eyes = ['.eye', '.caEye', '.reye']
    const times = {
        open: [2500, 3000],
        close: [100, 200]
    }

    function toggleClose(id) {
        document.querySelectorAll(id).forEach(e => e.classList.toggle('close'))
    }

    for (let eye of eyes) {
        const openTime = random(...times.open)
        const closeTime = random(...times.close)
        setInterval(() => {
            toggleClose(eye)
            setTimeout(() => toggleClose(eye), closeTime)
        }, openTime)
    }
})
