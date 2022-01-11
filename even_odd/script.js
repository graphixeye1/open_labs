const int = document.querySelector('#int');
const result = document.querySelector('.output');

const isEven = () => {
  let number = int.value;
  if (number) {
    if (number % 2 == 0) {
      result.innerHTML = `✅ ${number} is an Even number`;
    } else {
      result.innerHTML = `❌ ${number} is an odd number`;
    }
  } else {
    alert('enter a valid number');
  }
};
