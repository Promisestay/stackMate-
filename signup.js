const form = document.getElementById('signupForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirm = document.getElementById('confirm').value.trim();

  if (password !== confirm) {
    message.textContent = "Passwords do not match!";
    message.className = "message error";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.className = "message error";
    return;
  }

  // Simulate success
  message.textContent = "Sign up successful!";
  message.className = "message success";
  form.reset();
});