const progress = document.getElementById('')
const prev = document.getElementById('')
const next = document.getElementById('')
const circles = document.querySelectorAll('')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {

    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {

    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {

    } else if(currentActive === circles.length) {

    } else {

    }
}