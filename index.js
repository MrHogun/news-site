//зміна теми та іконок
function setTheme(theme) {
  const root = document.querySelector(':root');
  const themeToggle = document.querySelector('#themeToggle');
  const loginIcon = document.querySelector('.header-menu a img');
  const githubIcon = document.querySelector('.social a:nth-child(1) img');
  const telegramIcon = document.querySelector('.social a:nth-child(2) img');
  const webNewsLogo = document.querySelectorAll('.header-logo, .footer-logo');
  const loginButton = document.querySelector('.login-container a img');

  //встановлення теми
  root.classList.toggle('light', theme === 'light');

  //заміна іконок
  const iconColor = root.classList.contains('light') ? 'black' : 'white';

  themeToggle.querySelector(
    'button img'
  ).src = `/img's/${theme}-theme/theme-icon(${iconColor}).png`;
  loginIcon.src = `/img's/${theme}-theme/login-icon(${iconColor}).png`;
  githubIcon.src = `/img's/${theme}-theme/github-icon(${iconColor}).png`;
  telegramIcon.src = `/img's/${theme}-theme/telegram-icon(${iconColor}).png`;

  //заміна лого
  webNewsLogo.forEach((logo) => {
    logo.src = `/img's/${theme}-theme/web-news-logo(${iconColor}).png`;
  });

  const loginIconColor = root.classList.contains('light') ? 'black' : 'white';
  loginButton.src = `/img's/${theme}-theme/login-icon(${loginIconColor}).png`;

  //збереження теми на всіх сторінках
  localStorage.setItem('currentTheme', theme);
}

document.querySelector('#themeToggle').addEventListener('click', (event) => {
  event.preventDefault();
  const currentTheme = localStorage.getItem('currentTheme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

//застосування теми на сторінці
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = localStorage.getItem('currentTheme') || 'dark';
  setTheme(currentTheme);
});
