// document.addEventListener('DOMContentLoaded', () => {
// })

let addButton = document.querySelector('#add')
let addInput = document.querySelector('#item')

addButton.addEventListener('click', function () {
  let newItem = document.getElementById('item').value
  if (newItem) {
    addWant(newItem)
    document.getElementById('item').value = ''
  }
})

addInput.addEventListener('keypress', function (e) {
  if (13 === e.keyCode) {
    let newItem = document.getElementById('item').value
    if (newItem) {
      addWant(newItem)
      document.getElementById('item').value = ''
    }
  }
})


function addWant(text) {
  let list = document.getElementById('wants')
  let item = document.createElement('li')
  item.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button')
  remove.classList.add('remove')
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item.appendChild(buttons)
  list.appendChild(item) 
  
}

function removeItem() {
  let item = this.parentNode.parentNode
  let parent = item.parentNode
  parent.removeChild(item)
}





let addButton1 = document.querySelector('#add1')
let addInput1 = document.querySelector('#item1')
addButton1.addEventListener('click', function () {

  let newItem1 = document.getElementById('item1').value
  if (newItem1) {
    addInspired(newItem1)
    document.getElementById('item1').value = ''
  }
})
addInput1.addEventListener('keypress', function (e) {
  if (13 === e.keyCode) {
    let newItem1 = document.getElementById('item1').value
    if (newItem1) {
      addInpired(newItem1)
      document.getElementById('item1').value = ''
    }
  }
})

function addInspired(text) {
  let list1 = document.getElementById('inspire')
  let item1 = document.createElement('li')
  item1.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button')
  remove.classList.add('remove')
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item1.appendChild(buttons)
  list1.appendChild(item1) 
}

function removeItem() {
  let item1 = this.parentNode.parentNode
  let parent1 = item1.parentNode
  parent1.removeChild(item1)
}
 