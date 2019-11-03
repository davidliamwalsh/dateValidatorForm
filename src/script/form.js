const alertMessage = document.querySelector("div[data-behavior='alertMessage']")
const form = document.querySelector("form[data-behavior='form']")
const dateInput = document.querySelector("input[data-behavior='dateInput']")
const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

function dateCheck(e) {
  let message = []

  if (dateInput.value.match(regex)) {
    message.push('Valid date')
    alertMessage.style.display = 'block';
  } else {
    message.push('Valid date is required')
    alertMessage.style.display = 'block';
  }

  if (message.length > 0) { 
    alertMessage.innerText = message.join(', ')
  }
  e.preventDefault()
}

form.addEventListener('submit', dateCheck)

module.exports = dateCheck