let result = document.getElementById('result');

function insertNumber(num) {
  if (result.value == 0) {
    result.value = num;
  } else {
    result.value += num;
  }
}

function insertOperator(op) {
  result.value += op;
}

function insertFunction(func) {
  result.value = func + result.value + ')';
}

function clearResult() {
  result.value = '0';
}

function deleteNumber() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  result.value = eval(result.value);
}
