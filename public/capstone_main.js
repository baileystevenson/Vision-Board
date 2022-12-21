// document.addEventListener('DOMContentLoaded', () => {
// })
console.log('hello')
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
  console.log('addWant function') 
}

function removeItem() {
  let item = this.parentNode.parentNode
  let parent = item.parentNode
  parent.removeChild(item)
}


// document.addEventListener('DOMContentLoaded', () => {
// })


// addButton.addEventListener('click', function () {
//   let newItem = document.getElementById('item').value
//   if (newItem) {
//     addInspired(newItem)
//     document.getElementById('item').value = ''
//   }
// })

// addInput.addEventListener('keypress', function (e) {
//   if (13 === e.keyCode) {
//     let newItem = document.getElementById('item').value
//     if (newItem) {
//       addInspired(newItem)
//       document.getElementById('item').value = ''
//     }
//   }
// })
// function addInspired(text) {
//   let list = document.getElementById('inpsire')
//   let item = document.createElement('li')
//   item.innerText = text
//   let buttons = document.createElement('div')
//   buttons.classList.add('buttons')
//   let remove = document.createElement('button')
//   remove.classList.add('remove')
//   remove.addEventListener('click', removeItem)
//   buttons.appendChild(remove)
//   item.appendChild(buttons)
//   list.insertBefore(item, list.childNodes[0])
// }

// function removeItem() {
//   let item = this.parentNode.parentNode
//   let parent = item.parentNode
//   parent.removeChild(item)
// }