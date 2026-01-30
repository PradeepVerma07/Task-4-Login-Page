document.addEventListener("DOMContentLoaded", () => {

  // ================= TAB SWITCH =================
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      // reset
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

      // activate
      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  // ================= PASSWORD TOGGLE =================
  document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', () => {
      const input = icon.previousElementSibling;
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      icon.classList.toggle('ri-eye-fill', isPassword);
      icon.classList.toggle('ri-eye-off-fill', !isPassword);
    });
  });

});


// ================= VALIDATION =================
function validatePhone() {
  checkField('phoneInput', 'phoneError');
  checkField('phonePassword', 'phonePassError');
}

function validateEmail() {
  checkField('emailInput', 'emailError');
  checkField('emailPassword', 'emailPassError');
}

function checkField(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  if (!input || !error) return;

  if (input.value.trim() === '') {
    input.classList.add('error-input');
    error.style.display = 'block';
  } else {
    input.classList.remove('error-input');
    error.style.display = 'none';
  }
}


// ================= EXTERNAL LINKS =================
function goGoogle() {
  window.open('https://accounts.google.com', '_blank', 'noopener');
}

function goApple() {
  window.open('https://appleid.apple.com', '_blank', 'noopener');
}


// ================= UI ONLY =================
function showUiOnly() {
  alert('This is UI only. No API is connected.');
}
