const input = document.getElementById('name-input')
const output = document.getElementById('name-output')

input.addEventListener('input', (eve) => { 
  if (input.value == ' ') { 
    output.innerHTML = Anonymous
  }
  output.innerHTML = input.value
  
})
