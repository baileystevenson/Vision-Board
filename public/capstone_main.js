//////////Motto Box/////////

function myFunction() {
  document.getElementById('placeholder').value

}







/////////////add items to lists////////////

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
  remove.classList.add('X')
  remove.textContent = "X"
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
let addInput1 = document.querySelector('#item11')
addButton1.addEventListener('click', function () {

  let newItem11 = document.getElementById('item11').value
  if (newItem11) {
    addInspired(newItem11)
    document.getElementById('item11').value = ''
  }
})
addInput1.addEventListener('keypress', function (e) {
  if (13 === e.keyCode) {
    let newItem1 = document.getElementById('item11').value
    if (newItem1) {
      addInspired(newItem1)
      document.getElementById('item11').value = ''
    }
  }
})

function addInspired(text) {
  let list11 = document.getElementById('inspire')
  let item11 = document.createElement('li')
  item11.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button') 
  remove.classList.add('X')
  remove.textContent = "X"
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item11.appendChild(buttons)
  list11.appendChild(item11) 
}

function removeItem() {
  let item11 = this.parentNode.parentNode
  let parent11 = item11.parentNode
  parent11.removeChild(item11)
}
 


let addButton2 = document.querySelector('#add2')
let addInput2 = document.querySelector('#item12')
addButton2.addEventListener('click', function () {

  let newItem12 = document.getElementById('item12').value
  if (newItem12) {
    addGoal(newItem12)
    document.getElementById('item12').value = ''
  }
})
addInput2.addEventListener('keypress', function (e) {
  if (13 === e.keyCode) {
    let newItem12 = document.getElementById('item12').value
    if (newItem12) {
      addGoal(newItem12)
      document.getElementById('item12').value = ''
    }
  }
})

function addGoal(text) {
  let list12 = document.getElementById('goal')
  let item12 = document.createElement('li')
  item12.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button')
  remove.classList.add('X')
  remove.textContent = "X"
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item12.appendChild(buttons)
  list12.appendChild(item12) 
}

function removeItem() {
  let item12 = this.parentNode.parentNode
  let parent12 = item2.parentNode
  parent12.removeChild(item12)
}



let addButton3 = document.querySelector('#add3')
let addInput3 = document.querySelector('#item3')
addButton3.addEventListener('click', function () {

  let newItem3 = document.getElementById('item3').value
  if (newItem3) {
    addDream(newItem3)
    document.getElementById('item3').value = ''
  }
})
addInput3.addEventListener('keypress', function (e) {
  if (13 === e.keyCode) {
    let newItem3 = document.getElementById('item3').value
    if (newItem3) {
      addDream(newItem3)
      document.getElementById('item3').value = ''
    }
  }
})

function addDream(text) {
  let list3 = document.getElementById('dream')
  let item3 = document.createElement('li')
  item3.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button')
  remove.classList.add('X')
  remove.textContent = "X"
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item3.appendChild(buttons)
  list3.appendChild(item3) 
}

function removeItem() {
  let item3 = this.parentNode.parentNode
  let parent3 = item3.parentNode
  parent3.removeChild(item3)
}


