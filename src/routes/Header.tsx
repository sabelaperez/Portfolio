import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Load theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);

    // Load language from localStorage or browser preference
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const cambiarIdioma = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <header className="header">
      <nav className="nav" aria-label="main navigation">
        <div className="nav-left">
          <a href="#hero">Sabela Pérez</a>
        </div>
        <div className="nav-center" role="navigation">
          <a href="#about-me">{t('header.aboutMe')}</a>
          <a href="#projects">{t('header.projects')}</a>
          <a href="#education">{t('header.education')}</a>
        </div>
        <div className="nav-right">
          <button type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <select 
            value={i18n.language} 
            onChange={cambiarIdioma}
            aria-label="Select language"
            className="language-select"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="gl">GL</option>
          </select>
        </div>
      </nav>

      <style>{`
        .header {
          background: var(--header-bg);
          color: var(--text-primary);
          backdrop-filter: blur(8px) saturate(120%);
          -webkit-backdrop-filter: blur(8px) saturate(120%);
          border-bottom: 1px solid var(--header-border);
          box-shadow: var(--shadow-md);
          min-height: 4rem;
          min-width: 100%;
          padding: 0 1rem;
          padding-top: env(safe-area-inset-top);
          position: fixed;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .nav {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .nav-left {
          width: auto;
          flex: 0 0 auto;
          color: white;
          text-decoration: none;
        }

        .nav-left a {
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.5rem;
          transition: color 0.2s ease;
        }

        .nav-left a:hover {
          color: var(--text-primary);
        }

        .nav-center {
          display: flex;
          gap: 1rem;
          margin: 0 auto;
          align-items: center;
        }

        .nav-center a {
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.5rem;
          transition: color 0.2s ease;
        }

        .nav-center a:hover {
          color: var(--text-primary);
        }

        .nav-right {
          display: flex;
          gap: 0.5rem;
          flex: 0 0 auto;
        }

        .nav-right button {
          background: transparent;
          color: var(--text-secondary);
          border: 0px;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-family: serif;
          transition: color 0.2s ease, background-color 0.2s ease;
        }

        .nav-right button:hover {
          color: var(--text-primary);
          background: var(--overlay-hover);
        }

        .language-select {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-family: serif;
          font-size: 0.9rem;
          transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
          outline: none;
        }

        .language-select:hover {
          color: var(--text-primary);
          background: var(--overlay-hover);
          border-color: var(--border-hover);
        }

        .language-select:focus {
          border-color: var(--accent-primary);
        }

        .language-select option {
          background: var(--bg-primary);
          color: var(--text-primary);
        }

        @media (max-width: 600px) {
          .nav-center { gap: 0.5rem; }
          .nav-center a { display: none; }
          .header { height: 56px; }
        }
      `}</style>
    </header>
  );
};

export default Header;