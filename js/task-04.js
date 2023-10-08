const btn1 = document.querySelector("button[data-action='decrement']")
const btn2 = document.querySelector("button[data-action='increment']")
let spamValue = document.getElementById('value')
let counterValue = 0
btn1.addEventListener('click', (eve) => { 
  counterValue--
  spamValue.innerHTML = counterValue
  
})

btn2.addEventListener('click', (eve) => { 
  counterValue++
  spamValue.innerHTML = counterValue
})

