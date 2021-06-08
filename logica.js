const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Se necesita nombre')
  }

  if (password.value.length <= 6) {
    messages.push('La contraseña debe ser mas larga de 6 caracteres')
  }

  if (password.value.length >= 20) {
    messages.push('La constraseña debe ser mas carca, menos de 20 caracteres')
  }

  if (password.value === 'password') {
    messages.push('Contraseña debe ser distinta a Constraseña')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})