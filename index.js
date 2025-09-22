// File Upload Demo
const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');

fileInput.addEventListener('change', () => {
  fileName.textContent = "Selected: " + fileInput.files[0].name;
});

// Modal Logic
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});
closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
