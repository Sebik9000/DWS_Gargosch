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
