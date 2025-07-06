import { useState } from 'react';

const ThemeMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  function handleClick() {
    const attr = document.documentElement.getAttribute('data-bs-theme');

    if (attr === 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }

  return (
    <button className="btn btn-primary w-100 mt-2 p-2" onClick={handleClick}>
      {theme === 'light' ? 'الوضع الداكن [لوليد]' : 'الوضع العادي [ليس لوليد]'}
    </button>
  );
};

export default ThemeMode;
