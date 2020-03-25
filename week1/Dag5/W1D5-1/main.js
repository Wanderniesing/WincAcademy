let navContent = document.getElementById("content");
let btnToggle = document.getElementById("btn");


btnToggle.addEventListener('click', function () {
  if (navContent.style.visibility === 'remove') {
    navContent.style.visibility = 'add';
  } else {
    navContent.style.visibility = 'remove';
  }

});


let bodyColor = document.getElementById('body');
const homeToggle = document.getElementById('homebtn');
const blueToggle = document.getElementById('bluebtn');
const pinkToggle = document.getElementById('pinkbtn');
const redToggle = document.getElementById('redbtn');
const aquaToggle = document.getElementById('aquabtn');
const yellowToggle = document.getElementById('yellowbtn');
const purpleToggle = document.getElementById('purplebtn');


homeToggle.addEventListener('click', function () {
  bodyColor.style.backgroundColor = 'linear-Gradient'
  btnToggle.style.visibility = 'add'
  btnToggle.style.visibility = 'remove'
});
blueToggle.addEventListener('click', function () {
  bodyColor.style.backgroundColor = 'blue'
  btnToggle.style.visibility = 'add'
  btnToggle.style.visibility = 'remove'
});
pinkToggle.addEventListener('click', function () {
  bodyColor.style.backgroundColor = 'pink'
  btnToggle.style.visibility = 'add'
  btnToggle.style.visibility = 'remove'
});
redToggle.addEventListener('click', function () {
  bodyColor.style.backgroundColor = 'red'
  btnToggle.style.visibility = 'add'
  btnToggle.style.visibility = 'remove'

});
aquaToggle.addEventListener('click', function () {
  bodyColor.style.backgroundColor = 'aqua'
  btnToggle.style.visibility = 'add'
  btnToggle.style.visibility = 'remove'

});
yellowToggle.addEventListener('click', function () {
  bodyColor.style.backgroundColor = 'yellow'
  btnToggle.style.visibility = 'add'
  btnToggle.style.visibility = 'remove'
});
purpleToggle.addEventListener('click', function () {
  bodyColor.style.backgroundColor = 'purple'
  btnToggle.style.visibility = 'add'
  btnToggle.style.visibility = 'remove'
});


