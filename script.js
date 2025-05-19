document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
   
    if (currentTheme === 'light' || (!currentTheme && !prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
    
    
    themeToggle.addEventListener('click', function() {
        let theme;
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            theme = 'dark';
            themeToggle.textContent = '☀️';
        } else {
            theme = 'light';
            themeToggle.textContent = '🌙';
        }
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
});