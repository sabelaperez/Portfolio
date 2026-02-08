import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import i18n from '../i18n/i18n';

import roomsy from '../assets/roomsy.png';
import greendots from '../assets/greendots.jpg';
import picture from '../assets/picture.png';
import viewMore from '../assets/github.png';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Detectar tamaño de pantalla y ajustar items por página
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1130) {
        setItemsPerPage(1);
      } else if (window.innerWidth > 1610) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(2);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      title: t('projects.items.roomsy.title'),
      description: t('projects.items.roomsy.desc'),
      backText: t('projects.items.roomsy.back'),
      technologies: ['Java', 'Spring Boot', 'Docker', 'React', 'Tailwind CSS'],
      imageSrc: roomsy,
      imageAlt: t('projects.items.roomsy.alt'),
      repoUrl: "https://github.com/sabelaperez/Roomsy",
      awards: undefined,
    },
    {
      title: t('projects.items.greendots.title'),
      awards: t('projects.items.greendots.awards', { returnObjects: true }) as string[],
      awardsUrls: ['https://eije2025.iscac.pt/', 'https://gdg.community.dev/events/details/google-gdg-santiago-de-compostela-presents-impact-thon-etse-usc/'],
      description: t('projects.items.greendots.desc'),
      backText: t('projects.items.greendots.back'),
      technologies: ['Kotlin', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      imageSrc: greendots,
      imageAlt: t('projects.items.greendots.alt'),
      repoUrl: "https://github.com/sabelaperez/greendots",
    },
    {
      title: t('projects.items.pickture.title'),
      awards: t('projects.items.pickture.awards', { returnObjects: true }) as string[],
      awardsUrls: ['https://hackudc2025.devpost.com/project-gallery'],
      description: t('projects.items.pickture.desc'),
      backText: t('projects.items.pickture.back'),
      technologies: ['JavaScript', 'HTML', 'CSS', 'IndexedDB', 'Visual Search Inditex API'],
      imageSrc: picture,
      imageAlt: t('projects.items.pickture.alt'),
      repoUrl: "https://github.com/sabelaperez/pickture",
    },
    {
      title: t('projects.items.viewMore.title'),
      description: t('projects.items.viewMore.desc'),
      backText: "",
      technologies: ['Java', 'JavaScript', 'JavaFX', 'JavaRMI', 'C', 'C++', 'OpenGL', 'TypeScript'],
      imageSrc: viewMore,
      imageAlt: t('projects.items.viewMore.alt'),
      repoUrl: "https://github.com/sabelaperez",
    },
  ];

  // Agrupar proyectos en páginas según itemsPerPage
  const pages: any[][] = [];
  for (let i = 0; i < projects.length; i += itemsPerPage) {
    pages.push(projects.slice(i, i + itemsPerPage));
  }

  const totalPages = pages.length;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };
  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };
  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="section" aria-label="Projects section">
      <h2>{t('header.projects')}</h2>
      
      <div className="gallery-container">
        <button 
          className="gallery-btn gallery-btn-prev" 
          onClick={prevProject}
          aria-label="Previous project"
        >
          ‹
        </button>

        <div className="projects-gallery">
          <div 
            className="projects-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className="project-slide">
                <div className="projects-grid" style={{ 
                  gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)` 
                }}>
                    {page.map((project, idx) => (
                      <Card
                        key={idx}
                        title={project.title}
                        description={project.description}
                        backText={project.backText}
                        technologies={project.technologies}
                        imageSrc={project.imageSrc}
                        imageAlt={project.imageAlt}
                        repoUrl={project.repoUrl}
                        awards={project.awards}
                        awardsUrls={project.awardsUrls}
                        locale={i18n.language}
                      />
                    ))}
                  </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="gallery-btn gallery-btn-next" 
          onClick={nextProject}
          aria-label="Next project"
        >
          ›
        </button>
      </div>

      <div className="gallery-indicators">
        {pages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToProject(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .gallery-container {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          margin: 0 auto;
        }
        .projects-gallery {
          flex: 1;
          overflow: hidden;
          border-radius: 12px;
        }
        .projects-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-slide {
          min-width: 100%;
          display: flex;
          justify-content: center;
        }
        .projects-grid {
          display: grid;
          gap: 1.5rem;
          width: 100%;
        }

        .gallery-btn {
          background: var(--overlay-bg);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 2rem;
          color: var(--text-primary);
          transition: all 0.2s ease;
          flex-shrink: 0;
          backdrop-filter: blur(8px);
        }
        .gallery-btn:hover {
          background: var(--overlay-hover);
          border-color: var(--border-hover);
        }
        .gallery-btn:active {
          transform: scale(0.95);
        }
        .gallery-indicators {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }
        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid var(--border-color);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .indicator:hover {
          border-color: var(--border-hover);
          transform: scale(1.2);
        }
        .indicator.active {
          background: var(--border-color);
          width: 32px;
          border-radius: 5px;
        }

        @media (max-width: 900px) {
          .projects-gallery {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }
          .indicator.active {
            width: 10px;
            border-radius: 50%;
            background: transparent;
          }
          .project-slide {
            scroll-snap-align: center;
          }
          .gallery-btn {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;