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
  remove.textContent = "Remove"
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
  let remove = document.createElement('button') 
  remove.classList.add('remove')
  remove.textContent = "Remove"
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
  remove.textContent = "Remove"
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
  remove.textContent = "Remove"
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
let puppyImg= document.getElementById('puppy')
let picSelect = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

puppyImg.addEventListener("click",picSelect)

let beachImg= document.getElementById('beach')
let picSelect1 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

beachImg.addEventListener("click",picSelect)



let careerImg= document.getElementById('career')
let picSelect2 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

careerImg.addEventListener("click",picSelect)


let travelImg= document.getElementById('travel')
let picSelect3 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

travelImg.addEventListener("click",picSelect)


let houseImg= document.getElementById('house')
let picSelect4 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

houseImg.addEventListener("click",picSelect)



let familyImg= document.getElementById('family')
let picSelect5 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

familyImg.addEventListener("click",picSelect)


let relaxImg= document.getElementById('relax')
let picSelect6 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

relaxImg.addEventListener("click",picSelect)

let carImg= document.getElementById('car')
let picSelect7 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

carImg.addEventListener("click",picSelect)


///Drop Down 2///

function myFunction2() {
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

let puppyImg1= document.getElementById('puppy1')
let picSelect8 = (evt) => {
    let item2 =document.getElementById('item2')
    item2.style.backgroundImage = `url(${evt.target.src})`
}

puppyImg1.addEventListener("click",picSelect)

let beachImg1= document.getElementById('beach')
let picSelect9 = (evt) => {
    let item2 =document.getElementById('item2')
    item2.style.backgroundImage = `url(${evt.target.src})`
}

beachImg.addEventListener("click",picSelect)



let careerImg1= document.getElementById('career')
let picSelect10 = (evt) => {
    let item2 =document.getElementById('item2')
    item2.style.backgroundImage = `url(${evt.target.src})`
}

careerImg.addEventListener("click",picSelect)


let travelImg1= document.getElementById('travel')
let picSelect11 = (evt) => {
    let item2 =document.getElementById('item2')
    item2.style.backgroundImage = `url(${evt.target.src})`
}

travelImg.addEventListener("click",picSelect)


let houseImg1= document.getElementById('house')
let picSelect12 = (evt) => {
    let item2 =document.getElementById('item2')
    item2.style.backgroundImage = `url(${evt.target.src})`
}

houseImg.addEventListener("click",picSelect)



let familyImg1= document.getElementById('family')
let picSelect13 = (evt) => {
    let item2 =document.getElementById('item2')
    item2.style.backgroundImage = `url(${evt.target.src})`
}

familyImg.addEventListener("click",picSelect)


let relaxImg1= document.getElementById('relax')
let picSelect14 = (evt) => {
    let item2 =document.getElementById('item2')
    item2.style.backgroundImage = `url(${evt.target.src})`
}

relaxImg.addEventListener("click",picSelect)

let carImg1= document.getElementById('car')
let picSelect15 = (evt) => {
    let item2 =document.getElementById('item2')
    item2.style.backgroundImage = `url(${evt.target.src})`
}

carImg.addEventListener("click",picSelect)