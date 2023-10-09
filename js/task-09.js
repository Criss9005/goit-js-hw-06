function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spam = document.querySelector('.color')
const btn = document.querySelector('.change-color')
const body = document.body
btn.addEventListener('click', (e) => { 
  const color = getRandomHexColor()
  spam.innerHTML = `${color}`
  body.style.backgroundColor = `${color}`
})
