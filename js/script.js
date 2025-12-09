const addNumbers = (first, second) => {
  return first + second;
}

// Only run this code when the DOM is loaded and a button exists
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    if (button) {
      button.addEventListener('click', () => {
        console.log('Button clicked!');
        button.textContent = 'Clicked!';
      });
    }
  });
}

if (typeof module !== 'undefined') {
  module.exports = {
    addNumbers
  }
}