import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import i18n from '../i18n/i18n';

import foto from '../assets/foto.jpeg';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const lang = (i18n.language || 'en').split('-')[0]; 
  const available: Record<string,string> = {
    en: '/cv/cv_en.pdf',
    es: '/cv/cv_es.pdf',
    gl: '/cv/cv_es.pdf',
  };
  const cvPath = available[lang] ?? available.en;

  useEffect(() => {
    // Trigger animations after mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);
  
  return (
    <section id="hero" className="section" aria-label="Hero section">
      <div className="hero-container" aria-label="Hero section">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1>{t('hero.hello')}</h1>
          <p>{t('hero.description')}</p>
          <div className="hero-accent-line"></div>
          <div className="socials">
            <a
              href="https://github.com/sabelaperez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
              style={{ marginTop: '-10px' }}
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/sabelaperez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" />
              </svg>
            </a>

            <a
              href="mailto:sabelapereez@gmail.com"
              aria-label="Email"
              className="social-link"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3.29289 5.29289C3.47386 5.11193 3.72386 5 4 5H20C20.2761 5 20.5261 5.11193 20.7071 5.29289M3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.72386 20.8881 5.47386 20.7071 5.29289M3.29289 5.29289L10.5858 12.5857C11.3668 13.3668 12.6332 13.3668 13.4142 12.5857L20.7071 5.29289"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <div className="spacer"></div>

            <a className="btn" href={cvPath} download target="_blank" rel="noopener noreferrer">{t('hero.downloadCV')}</a>
          </div>
        </div>

        <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
          <div className="image-wrapper">
            <img src={foto} alt="Sabela Pérez" />
            <div className="blob"></div>
          </div>
        </div>
      </div>

      <style>{`
        #hero {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh; 
        }
        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem; 
          max-width: 1200px;
          width: 100%;
        }

        /* Animaciones de entrada */
        .hero-content {
          flex: 1;
          text-align: left;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-accent-line {
          width: 600px;
          height: 4px;
          background: linear-gradient(90deg, var(--tech-badge-bg), transparent);
          margin-bottom: 1.5rem;
          border-radius: 2px;
          animation: expandLine 1s ease 0.3s both;
        }
        @keyframes expandLine {
          from { width: 0; opacity: 0; }
          to { width: 600px; opacity: 1; }
        }

        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .socials {
          display: flex;
          justify-content: begin;
          gap: 1rem;
        }
        .social-link {
          color: inherit;
          transition: transform 0.3s ease, color 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .social-link:hover {
          transform: translateY(-4px);
          color: var(--primary);
        }
        .spacer {
          flex: 0.5;
        }

        /* Imagen con animación */
        .hero-image {
          flex: 0 0 300px;
          padding: 1rem;
          position: relative;
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
        }
        .hero-image.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 300px;
        }
        .image-wrapper img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          box-shadow: var(--shadow-lg);
          animation: morph 20s ease-in-out infinite;
        }
        .blob {
          position: absolute;
          top: -20px;
          left: -20px;
          width: calc(100% + 40px);
          height: calc(100% + 40px);
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          opacity: 0.3;
          z-index: 1;
          animation: morph 20s ease-in-out infinite;
          animation-delay: -4s;
        }
        @keyframes morph {
          0%, 100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
          }
          50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
          }
          75% {
            border-radius: 43% 57% 48% 42% / 63% 68% 32% 37%;
          }
        }

        @media (max-width: 1130px) {
          #hero {
            padding: 0rem 3rem;
          }
          .hero-container {
            flex-direction: column-reverse;
            gap: 3rem;
            max-width: 100%;
          }
          .hero-content {
            text-align: center;
            max-width: 100%;
          }
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .hero-content p {
            font-size: 1.1rem;
          }
          .hero-accent-line {
            margin: 0 auto 1.5rem auto;
            max-width: 80%;
          }
          .socials {
            justify-content: center;
          }
          .hero-image {
            flex: 0 0 250px;
          }
          .image-wrapper {
            height: 250px;
          }
          .spacer {
            flex: 0.2;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;