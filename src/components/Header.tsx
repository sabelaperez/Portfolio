import React from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <nav className="nav" aria-label="main navigation">
        <div className="nav-left">
          <p> Sabela Pérez </p>
        </div>
        <div className="nav-center" role="navigation">
          <a href="#hero">{t('header.home')}</a>
          <a href="#projects">{t('header.projects')}</a>
          <a href="#education">{t('header.education')}</a>
          <a href="#contact">{t('header.contact')}</a>
        </div>
        <div className="nav-right">
          <button type="button" onClick={() => cambiarIdioma('en')}>EN</button>
          <button type="button" onClick={() => cambiarIdioma('es')}>ES</button>
          <button type="button" onClick={() => cambiarIdioma('gl')}>GL</button>
        </div>
      </nav>

      <style>{`
        .header {
          background: #222;
          color: #f5f5f5;
          min-height: 4rem;
          min-width: 100%;
          padding: 0 1rem;
          padding-top: env(safe-area-inset-top); /* soporte notch en iOS */
          position: fixed;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          border-radius: 0 0 10px 10px; 
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
        }

        .nav-center {
          display: flex;
          gap: 1rem;
          margin: 0 auto;
          align-items: center;
        }

        .nav-center a {
          color: #ddd;
          text-decoration: none;
          padding: 0.5rem;
        }

        .nav-center a:hover {
          color: white;
        }

        .nav-right {
          display: flex;
          gap: 0.5rem;
          flex: 0 0 auto;
        }

        .nav-right button {
          background: transparent;
          color: #ddd;
          border: 0px;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .nav-right button:hover {
          color: white;
        }

        @media (max-width: 600px) {
          .nav-center { gap: 0.5rem; }
          .nav-center a { padding: 0.5rem; font-size: 1rem; }
          .header { height: 56px; }
        }
      `}</style>
    </header>
  );
};

export default Header;