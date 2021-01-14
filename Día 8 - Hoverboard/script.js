const container = document.getElementById('')
const colors = ['', '', '', '', '']
const SQUARES = 500

for(let i = 0; i < SQUARES; ) {
    const square = document.createElement('')
    square.classList.add('')

    square.addEventListener('', () => setColor(square))

    square.addEventListener('', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = 
   element.style.boxShadow = ``
}

function removeColor(element) {
   element.style.background = '#'
   element.style.boxShadow = ''
}

function getRandomColor() {
    return colors[Math.floor()]
}