import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js" 

let formIMC = document.querySelector('.form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

formIMC.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber){
    AlertError.open()
    clearInput()
    return
  }

  AlertError.close()

  const ResultIMC = calculateIMC(weight, height)
  displayResultMessage(ResultIMC)
}

inputWeight.oninput = AlertError.close()
inputHeight.oninput = AlertError.close()

function displayResultMessage(ResultIMC){
  const message = `Seu IMC é de: ${ResultIMC}`

  Modal.message.innerText = message
  clearInput()
  Modal.open()
}

function clearInput(){
  inputWeight.value = ""
  inputHeight.value = ""
}