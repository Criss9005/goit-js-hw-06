const form = document.querySelector('.login-form')
const inputName = document.querySelector('input[name="email"]')
const inputPassword = document.querySelector('input[name="password"]')
const btn = document.querySelector('button')


form.addEventListener('submit', (eve)=> { 
    eve.preventDefault()
    if ((inputName.value == '') ||  (inputPassword.value == '') ){ 
        alert('Todos los espacios deben ser rellenados')
    }
    let ingresos = {
        email: inputName.value,
        password : inputPassword.value
    }

    console.log(ingresos)
    form.reset() 

})

