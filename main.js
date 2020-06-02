// const userList = document.querySelector('#user-list')
// // const userElements = document.querySelectorAll('#user-list > li')
// const userElements = userListElement.querySelectorAll('li')
// console.log(userElements)

// //create a list items and add it to the ul#user-list



// userListElement.innerHTML += '<li>Jessica Ribbecke</li>'
// userListElement.innerHTML += '<li>Jessica Ribbecke</li>'
// const newUserItem = document.createElement('li')
// newUserItem.innerText = 'Chazz Horn'
// console.log(newUserItem)

// userListElement.appendChild(newUserItem) 
// //appendChild adds an element as a child to its 
// //parent at the end of the child list 



const userListElement = document.querySelector('#user-list')
const userElements = userListElement.querySelectorAll('li')

userListElement.innerHTML += '<li>Jessica Ribbecke</li>'

const newUserItem = document.createElement('li')
const newUserText = document.createTextNode('Chazz Horn')
newUserItem.appendChild(newUserText)
userListElement.appendChild(newUserItem) 

const jessicaElement = userListElement.querySelector('li:nth-child(6)')
// jessicaElement.remove()
userListElement.removeChild(jessicaElement)

userListElement.appendChild(jessicaElement)

userListElement.prepend(jessicaElement)//puts at top of list

//replace method 
//string.prototype.replace()-return new string
//no regex

//if was on console
//"eugene bridges".replace('bridge', , 'roads')

//const name = "shaun furman"
//name
//"shaun furman"

// const newName = name.replace('furman', 'taxidermyman')
//newName 
//shaun taxidermyman

//const originalString = 'the chevy nova is a classic sportscar.'
//const replacmentString = originalString.replace('ass', 'butt')
//replacementString
//"he chevy nova is a clbuttic sportscar."