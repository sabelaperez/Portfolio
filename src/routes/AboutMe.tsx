import React from 'react';
import { useTranslation } from 'react-i18next';

import aboutme1 from '../assets/aboutme1.jpg';
import aboutme2 from '../assets/aboutme2.jpg';
import aboutme3 from '../assets/aboutme3.jpg';

const AboutMe: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about-me" className="section" aria-label="About me section">
      <div className="content">
        <div style={{ flex: 1 }}>
          <h2>{t('header.aboutMe')}</h2>
          <p>{t('aboutMe.description1')}</p>
          <p>{t('aboutMe.description2')}</p>
          <p>{t('aboutMe.description3')}</p>
          <p>{t('aboutMe.description4')}</p>
        </div>
        <div className="photos">
          <img src={aboutme1} alt="Picture winning HackUDC 2025" className="photo-1" loading='lazy' />
          <img src={aboutme2} alt="Picture presenting GreenDots at EIXE 2025" className="photo-2" loading='lazy' />
          <img src={aboutme3} alt="Picture at ciber.gal event 2025" className="photo-3" loading='lazy' />
        </div>
      </div>

      <style>{`
        #about-me {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        #about-me p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          max-width: 100ch;
        }
        .content {
          display: flex;
          align-items: start;
          gap: 4rem;
        }
        .photos {
          position: relative;
          flex-shrink: 0;
          width: min(20vw, 450px);
          height: min(45vh, 700px);
        }
        .photos img {
          position: absolute;
          object-fit: cover;
          box-shadow: var(--shadow-md);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 8px;
        }
        .photos img:hover {
          transform: scale(1.05) rotate(0deg) !important;
          box-shadow: var(--shadow-lg);
          z-index: 10;
        }
        
        .photo-1 {
          width: 65%;
          height: auto;
          aspect-ratio: 1;
          top: 5dvh;
          left: 0%;
          transform: rotate(8deg);
          z-index: 2;
        }
        .photo-2 {
          width: 65%;
          height: auto;
          aspect-ratio: 0.9;
          top: 20dvh;
          right: -8%;
          transform: rotate(12deg);
          z-index: 3;
        }
        .photo-3 {
          width: 70%;
          height: auto;
          aspect-ratio: 1.2;
          bottom: -10dvw;
          left: -5%;
          transform: rotate(-5deg);
          z-index: 1;
        }

        @media (max-width: 1130px) {
          .content {
            flex-direction: column;
            gap: 2rem;
            align-items: center;
          }
          #about-me p {
            max-width: 100%;
          }
          .photos {
            width: min(80vw, 350px);
            height: min(90vw, 450px);
          }
        }

        @media (max-width: 600px) {
          .photos {
            width: 70vw;
            height: 100vw;
          }
          .photo-1 {
            width: 65%;
            top: 0;
          }
          .photo-2 {
            width: 60%;
          }
          .photo-3 {
            width: 70%
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;