const input = document.getElementById('font-size-control')
const spam = document.getElementById('text')
input.addEventListener('input', (eve) => { 
    spam.style.fontSize = `${input.value}px`
})