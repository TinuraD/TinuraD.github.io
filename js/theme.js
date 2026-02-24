// Theme handling logic
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        html.classList.add('dark');
        updateIcon(true);
    } else {
        html.classList.remove('dark');
        updateIcon(false);
    }

    themeToggle.addEventListener('click', () => {
        const isDark = html.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateIcon(isDark);
    });

    function updateIcon(isDark) {
        const darkIcon = themeToggle.querySelector('.dark-icon');
        const lightIcon = themeToggle.querySelector('.light-icon');
        if (isDark) {
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        } else {
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
        }
    }
});
