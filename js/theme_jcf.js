// Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

const mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
const savedTheme = localStorage.getItem('theme');

// 1. Initial Load Check
if (savedTheme === 'dark' || (!savedTheme && mediaQuery && mediaQuery.matches)) {
    body.classList.add('dark-theme');
    themeBtn.innerHTML = '<span>☀️ Light Mode</span>';
}

// 2. Dynamic OS Theme Change Listener
if (mediaQuery) {
    mediaQuery.addEventListener('change', (e) => {
        // Only sync with OS if the user hasn't explicitly saved a preference
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                body.classList.add('dark-theme');
                themeBtn.innerHTML = '<span>☀️ Light Mode</span>';
            } else {
                body.classList.remove('dark-theme');
                themeBtn.innerHTML = '<span>🌙 Dark Mode</span>';
            }
        }
    });
}

// 3. Manual Toggle Button
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