document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // تحويل الثيم
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.hasAttribute('data-theme');
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // تحميل الثيم المحفوظ
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    // السنة الحالية
    document.getElementById('year').textContent = new Date().getFullYear();
});

// وظائف الاستوري
function openStory(imgSrc) {
    const overlay = document.getElementById('story-overlay');
    const img = document.getElementById('story-img');
    img.src = imgSrc;
    overlay.style.display = 'flex';
}

function closeStory() {
    document.getElementById('story-overlay').style.display = 'none';
}