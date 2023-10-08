const input = document.getElementById('validation-input')

input.addEventListener('blur', (eve) => { 
    if (input.value.length == input.getAttribute('data-length')) {
        input.classList.add('valid')
        input.classList.remove('invalid')
        
    } else { 
        input.classList.remove('valid')  
        input.classList.add('invalid') 

    }        
    
})
