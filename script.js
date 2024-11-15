let first = document.getElementById('first');

first.addEventListener('click', function() {
  alert("Kliknul si na tlačítko!");
});

const second_button = document.getElementById('second');

second_button.addEventListener('click', function() {
  second_button.textContent = "Text se změnil";
});

const third_button = document.getElementById('third');

third_button.addEventListener('click', function() {
  const third = document.querySelector('#change-text');
  third.textContent = "Text se změnil";
});

const fourth_button = document.getElementById('fourth');
const output = document.getElementById('output');

fourth_button.addEventListener('click', function() {
  output.textContent = "Novej text";
});

const hello_button = document.getElementById('hello');
hello_button.addEventListener('click', function() {
  const name = document.getElementById('name').value;
  alert(`Ahoj, ${name}!`);
});

const hover_text = document.getElementById('hover-text');
hover_text.addEventListener('mouseover', function() {
  hover_text.textContent = "Text se změnil při přejetí myší!";
});

const show_time_button = document.getElementById('show-time');
const time_output = document.getElementById('time-output');

show_time_button.addEventListener('click', function() {
  const currentTime = new Date().toLocaleTimeString();
  time_output.textContent = `Aktuální čas: ${currentTime}`;
});

const show_date_button = document.getElementById('show-date');
const date_output = document.getElementById('date-output');

show_date_button.addEventListener('click', function() {
  const currentDate = new Date().toLocaleDateString();
  date_output.textContent = `Aktuální datum: ${currentDate}`;
});

const add_three_button = document.getElementById('add-three');
const number_result = document.getElementById('number-result');

add_three_button.addEventListener('click', function() {
  const inputValue = document.getElementById('number-input').value;
  const number = Number(inputValue);
  const result = number + 3;
  number_result.textContent = 'Výsledek: ' + result;
});

const add_numbers_button = document.getElementById('add-numbers');
const secist_result = document.getElementById('secist-result');

add_numbers_button.addEventListener('click', function() {
  const number1 = Number(document.getElementById('number1-input').value);
  const number2 = Number(document.getElementById('number2-input').value);
  const sum = number1 + number2;
  secist_result.textContent = 'Výsledek: ' + sum;
});

const pankapcala_image = document.getElementById('pankapcala');

pankapcala_image.addEventListener('mouseover', function() {
  pankapcala_image.style.width = '400px';
});

pankapcala_image.addEventListener('mouseout', function() {
  pankapcala_image.style.width = '200px';
});

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.addEventListener('dblclick', function() {
            const newTask = prompt('Edit task:', li.textContent);
            if (newTask !== null && newTask.trim() !== '') {
                li.textContent = newTask;
                li.classList.remove('completed');
            }
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }
});
