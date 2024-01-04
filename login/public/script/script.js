const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let counter = 0;
const slideWidth = images[0].offsetWidth;

nextBtn.addEventListener('click', () => {
  counter++;
  slide();
});

prevBtn.addEventListener('click', () => {
  counter--;
  slide();
});

function slide() {
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(${-slideWidth * counter}px)`;

  if (counter === images.length - 1) {
    setTimeout(() => {
      slides.style.transition = 'none';
      slides.style.transform = 'translateX(0)';
      counter = 0;
    }, 500);
  } else if (counter < 0) {
    setTimeout(() => {
      slides.style.transition = 'none';
      slides.style.transform = `translateX(${-slideWidth * (images.length - 1)}px)`;
      counter = images.length - 1;
    }, 500);
  }
}

function updatePlaceholder() {
  var input = document.getElementById('calendar');
  var selectedDate = input.value;
  
  // Check if a date is selected and update the placeholder accordingly
  if (selectedDate) {
      input.setAttribute('placeholder',''); // Remove placeholder
  } else {
      input.setAttribute('placeholder', 'Select a date'); // Set placeholder
  }
}

function updatePlaceholder() {
  var input = document.getElementById('calendar');
  var selectedDate = input.value;
  
  // Check if a date is selected and update the placeholder accordingly
  if (selectedDate) {
      input.setAttribute('placeholder', ''); // Remove placeholder
  } else {
      input.setAttribute('placeholder', 'Select a date'); // Set placeholder
  }
}

// JavaScript code to open a webpage when the button is clicked
document.getElementById("sign_btn").addEventListener("click", function() {
  // Replace 'https://www.example.com' with the URL of the webpage you want to open
  window.location.href = '/register';
  
});

document.getElementById("signin_btn").addEventListener("click", function() {
  // Replace 'https://www.example.com' with the URL of the webpage you want to open
  window.location.href = '/login';
  
});