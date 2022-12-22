
// let addButton5 = document.querySelector('#add5')
// let addInput5 = document.querySelector('#item5')
// addButton5.addEventListener('click', function () {

//   let newItem5 = document.getElementById('item5').value
//   if (newItem5) {
//     addDream(newItem5)
//     document.getElementById('item5').value = ''
//   }
// })
// addInput5.addEventListener('keypress', function (e) {
//   if (13 === e.keyCode) {
//     let newItem5 = document.getElementById('item5').value
//     if (newItem5) {
//       addDream(newItem5)
//       document.getElementById('item5').value = ''
//     }
//   }
// })

function addMotto(text) {
  let list5 = document.getElementById('Motto')
  let item5 = document.createElement('li')
  item5.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button')
  remove.classList.add('remove')
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item5.appendChild(buttons)
  list5.appendChild(item5) 
}

function removeItem() {
  let item5 = this.parentNode.parentNode
  let parent5 = item5.parentNode
  parent5.removeChild(item5)
}







let addButton4 = document.querySelector('#add4')
let addInput4 = document.querySelector('#item4')
addButton4.addEventListener('click', function () {

  let newItem4 = document.getElementById('item4').value
  if (newItem4) {
    addWant(newItem4)
    document.getElementById('item4').value = ''
  }
})
addInput4.addEventListener('keypress', function (e) {
  if (13 === e.keyCode) {
    let newItem4 = document.getElementById('item4').value
    if (newItem4) {
      addWant(newItem4)
      document.getElementById('item4').value = ''
    }
  }
})

function addWant(text) {
  let list4 = document.getElementById('want')
  let item4 = document.createElement('li')
  item4.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button')
  remove.classList.add('remove')
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item4.appendChild(buttons)
  list4.appendChild(item4) 
}

function removeItem() {
  let item4 = this.parentNode.parentNode
  let parent4 = item4.parentNode
  parent4.removeChild(item4)
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
 


let addButton2 = document.querySelector('#add2')
let addInput2 = document.querySelector('#item2')
addButton2.addEventListener('click', function () {

  let newItem2 = document.getElementById('item2').value
  if (newItem2) {
    addGoal(newItem2)
    document.getElementById('item2').value = ''
  }
})
addInput2.addEventListener('keypress', function (e) {
  if (13 === e.keyCode) {
    let newItem2 = document.getElementById('item2').value
    if (newItem2) {
      addInpired(newItem2)
      document.getElementById('item2').value = ''
    }
  }
})

function addGoal(text) {
  let list2 = document.getElementById('goal')
  let item2 = document.createElement('li')
  item2.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button')
  remove.classList.add('remove')
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item2.appendChild(buttons)
  list2.appendChild(item2) 
}

function removeItem() {
  let item2 = this.parentNode.parentNode
  let parent2 = item2.parentNode
  parent2.removeChild(item2)
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
  remove.classList.add('remove')
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