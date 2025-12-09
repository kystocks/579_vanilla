const addNumbers = (first, second) => {
  return first + second;
}

// Add this interactive functionality for the button
document.querySelector('button').addEventListener('click', () => {
  console.log('Button clicked!');
  // Change the button text to show it worked
  document.querySelector('button').textContent = 'Clicked!';
});

if (typeof module !== 'undefined') {
  module.exports = {
    addNumbers
  }
}