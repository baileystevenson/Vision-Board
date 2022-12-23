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
      addInspired(newItem1)
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
  let remove = document.createElement('button' value="Remove") 
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
      addGoal(newItem2)
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

////////drop down function///////////
function myFunction1() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}