import React from 'react';
import { useTranslation } from 'react-i18next';

const foto = 'src/assets/foto.jpeg';

const AboutMe: React.FC = () => {
  const { t, i18n } = useTranslation();

  const lang = (i18n.language || 'en').split('-')[0]; // 'en', 'es', 'gl', etc.
  const available: Record<string,string> = {
    en: '/cv/cv_en.pdf',
    es: '/cv/cv_es.pdf',
    gl: '/cv/cv_es.pdf',
  };
  const cvPath = available[lang] ?? available.en;

  return (
    <section id="about-me" className="section">
      <div className="content">
        <div>
          <h2>{t('header.aboutMe')}</h2>
          <p>{t('aboutMe.description')}</p>

          <div className="cv">
            <a className="btn" href={cvPath} download target="_blank" rel="noopener noreferrer">{t('aboutMe.downloadCV')}</a>
          </div>
        </div>
        <img src={foto} alt="Foto de Sabela Pérez" />
      </div>

      <style>{`
        #about-me {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        #about-me h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        #about-me p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        .content {
          display: flex;
          align-items: start;
        }
        .cv {
          margin-top: auto;
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
        }
        .content img {
          width: 150px;
          height: auto;
          margin-left: 4rem;
          border-radius: 8px;
        }  

        @media (max-width: 768px) {
          .content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
