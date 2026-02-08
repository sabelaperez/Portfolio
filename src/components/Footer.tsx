import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation(); 
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sabela Pérez. {t('footer.rights')}</p>

      <style>{`
        .footer {
          text-align: center;
          padding: 1rem;
          position: static;
          bottom: 0;
          width: 100%;
          height: 6dvh;
        }

        .footer p {
          margin: 0;
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
