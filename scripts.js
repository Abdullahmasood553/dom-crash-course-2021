// const heading = document.querySelector('h1');
// console.log(heading);

// const heading = document.getElementById('title');
// heading.style.color = '#fff';
// heading.style.backgroundColor = 'grey';
// heading.style.padding = '10px';
// heading.textContent = 'abnation';
// heading.innerText = 'abnation2';
// heading.innerHTML = '<span style="color:red">abnation3</span>';
// heading.classList.add('heading');
// heading.classList.remove('heading');




// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'red';
// document.querySelector('li:last-child').style.color = 'blue';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';

// Multiple Elements
// const names = document.getElementsByClassName('name-list');
// console.log(names);
// console.log(names[0]);



// Traversing
//  const names = document.querySelector('ul.name-list');
// console.log(names.children);
// console.log(names.children[0]);
// console.log(names.children[0].textContent = 'New');


// Event Listeners & the event objects

// let val;
// document.querySelector('.addBtn').addEventListener('click', function(e) {
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.type;
//     // console.log('Hello');
//     console.log(val);
// });


// Mouse Events
// let val;
// const btn = document.querySelector('.addBtn');
// btn.addEventListener('click', testEvent);
// btn.addEventListener('dblclick', testEvent);
// btn.addEventListener('mousedown', testEvent);
// btn.addEventListener('mouseup', testEvent);

// function testEvent(e) {
//     console.log(`Event Type: ${e.type}`);
// }

// let val;
// const heading = document.querySelector('h1');

// const form = document.querySelector('form');
// const listInput = document.querySelector('.list-input');
// listInput.value = '';
// form.addEventListener('submit', testEvent);

// listInput.addEventListener('keydown', testEvent);
// listInput.addEventListener('keyup', testEvent);


// function testEvent(e) {
//     // e.preventDefault();
//     // console.log(listInput.value);
//     // console.log(e.target.value);
//     heading.innerText = e.target.value;
//     console.log(`Event Type: ${e.type}`);
// }




// Mini Project


// const userList = document.querySelector('.name-list');
// const listInput = document.querySelector('.list-input');
// const addListBtn = document.querySelector(".addBtn");



// addListBtn.addEventListener('click', function() {
//     const li = document.createElement('li');
//     const text = document.createTextNode(listInput.value);
//     li.appendChild(text);
//     userList.appendChild(li);

// });