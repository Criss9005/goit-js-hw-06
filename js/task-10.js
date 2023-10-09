function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let initValue = 30

function createBoxes(amount) {  
   
    for (let i = 0; i < amount ; i++) {
      const div = document.createElement("div");
      boxes.append(div);
      div.style.width = `${initValue}px`
      div.style.height = `${initValue}px`
      div.style.backgroundColor = `${getRandomHexColor()}`
      initValue += 10
    }
  
}

function destroyBoxes() { 
  const limit = boxes.children.length

  for (let i = 0; i < limit; i++) {
    boxes.removeChild(boxes.lastElementChild)
       
  }
  initValue = 30
}

const input = document.querySelector('input[type="number"]')
const btnCreate = document.querySelector("[data-create]")
const btnDestroy = document.querySelector("[data-destroy]")
const boxes = document.getElementById('boxes')

btnCreate.addEventListener('click', (e) => { 
  createBoxes(input.value)
})

btnDestroy.addEventListener('click', (e) => { 
  destroyBoxes()
})




