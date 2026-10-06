// Mark the current weekday (strips run Monday to Sunday)
const days = document.querySelectorAll('.day');
const todayIndex = (new Date().getDay() + 6) % 7;
const tag = document.createElement('i');
tag.className = 'today';
tag.textContent = 'Today';
days[todayIndex].appendChild(tag);

// Sign-in form
const form = document.getElementById('form');
const msg = document.getElementById('msg');
const btn = form.querySelector('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  const password = form.password.value;

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    msg.textContent = 'Enter a valid email address, like name@example.com.';
    form.email.focus();
    return;
  }
  if (password.length < 6) {
    msg.textContent = 'Use at least 6 characters for your password.';
    form.password.focus();
    return;
  }

  msg.textContent = '';
  btn.disabled = true;
  btn.textContent = 'Signing in...';

  // Demo only: replace this timeout with a real request to your backend.
  setTimeout(() => {
    btn.textContent = 'Signed in';
    msg.textContent = 'Demo only. Connect this form to your backend.';
  }, 900);
});
