let result = document.getElementById('result');

function insertValue(value) {
  result.value += value;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  result.value = '';
}

function deleteResult() {
  result.value = result.value.slice(0, -1);
}

function changeColor() {
  let container = document.querySelector('.container');
  container.classList.toggle('dark');
}
