const button = document.getElementById('themeButton');
button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  button.textContent = document.documentElement.classList.contains('dark')
    ? 'Switch to light'
    : 'Toggle theme';
});
