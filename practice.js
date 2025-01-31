//const title = document.querySelector('#main-heading');

//title.style.color = 'lightblue';

//console.log(title);

//styling elements
//const listItems = document.querySelectorAll(".list-items");

// for (i = 0; i < listItems.length; i++) {
//listItems[i].style.fontSize = "40px";}
  

// creating elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// addding elements 

ul.append(li);

// modifying elements

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

