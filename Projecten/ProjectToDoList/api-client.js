const getData = async function() {
  const apiUrl = `https://wincacademydatabase.firebaseio.com/wander/tasks.json`;

  try {
    const result = await fetch(apiUrl, {method: 'GET'});
    const data = await result.json();
    // deze regels hierboven pas je dus nog aan naar jouw situatie.
    // Maak je de API call naar het juiste endpoint? /tasks.json?
    console.log('Before (the raw result):', result);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }

  let tasks = Object.keys(result).map(key => ({
    id: key,
    description: result[key].description,
    done: result[key].done,
  }));
  console.log('After the tasks array', wander / tasks);
};

getData();

const wissen = document.querySelector('.wissen');

const dateElement = document.getElementById('data');

const clear = document.querySelector('clear');

const list = document.getElementById('list');
// const input = document.getElementById('input');
const check = 'far fa-check-square';
const uncheck = 'far fa-square';

function addTask(task) {
  const item = `
                    <li class="item">
                    <i class="far fa-square" job="complete"></i>
                    <p id="text">Eten</p>
                    <i class="fa fa-trash de" job="clear"></i>
                    </li>

              `;
  const position = 'beforeend';
  list.insertAdjacentHTML(position, item);
}

addTask('Eten');

document.getElementById('input').addEventListener('click', input);

function input() {
  // fatch(`https://wincacademydatabase.firebaseio.com/wander/tasks.json`)
  //   .then(function(res) {
  //     return res.json;
  //   })
  //   .then(function(data) {
  //     console.log(data);
  //   });
  fetch(`https://wincacademydatabase.firebaseio.com/wander/tasks.json`)
    .then(res => res.json())
    .then(data => console.log(data));
}

// fetch('input').then(response => {
//   console.log(response);
//   return response.description();
//   });
//   .then(description =>{
//     console.log(description);
//     document.getElementById("input")
//   });
// function addToDo() {
//   const textAdd = document.getElementById('text');

//   set setInterval(function(){

//     fetch('text'). then(function (response) {
//       return response.json();
//     }).then(function(data){

//       textAdd.textContent =  data.text;
//     }).catch(function(error){
//       console.log(error);

//     });

//     });
