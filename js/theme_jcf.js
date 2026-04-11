// Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeBtn.innerHTML = '<span>☀️ Light Mode</span>';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeBtn.innerHTML = '<span>☀️ Light Mode</span>';
    } else {
        localStorage.setItem('theme', 'light');
        themeBtn.innerHTML = '<span>🌙 Dark Mode</span>';
    }
});