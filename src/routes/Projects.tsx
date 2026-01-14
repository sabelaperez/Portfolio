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
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
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
      repoUrl: "https://github.com/sabelaperez",
      imageSrc: viewMore,
      imageAlt: t('projects.items.viewMore.alt'),
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
    <section id="projects" className="section">
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
                <div className="projects-grid">
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
          max-width: 1200px;
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
          padding: 0 1rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 1200px;
        }

        .more-projects-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          background: var(--bg-tertiary);
          border: 2px dashed var(--border-color);
          border-radius: 12px;
          padding: 4rem 2rem;
          min-height: 300px;
          width: 100%;
          max-width: 600px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .more-projects-card:hover {
          border-color: var(--accent-primary);
          background: var(--overlay-hover);
        }

        .more-projects-card h3 {
          font-size: 1.5rem;
          margin: 0;
          color: var(--text-primary);
        }

        .more-projects-card p {
          font-size: 1.1rem;
          margin: 0;
          color: var(--text-secondary);
        }

        .more-projects-card .btn {
          margin-top: 1rem;
        }

        .btn-primary {
          background: var(--accent-primary);
          color: var(--accent-primary-text);
          border: none;
        }

        .btn-primary:hover {
          opacity: 0.9;
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
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          width: 32px;
          border-radius: 5px;
        }

        .more {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .projects-gallery {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }

          .gallery-indicators {
            display: none;
          }

          .projects-track {
            display: flex;
            gap: 0;
          }
          .project-slide {
            min-width: 100%;
            scroll-snap-align: center;
            padding: 0 0.5rem;
            box-sizing: border-box;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .gallery-btn {
            display: none;
          }

          .gallery-container {
            gap: 0.5rem;
          }

          .project-slide {
            padding: 0 0.5rem;
          }

          .more-projects-card {
            padding: 3rem 1.5rem;
            min-height: 250px;
          }

          .more-projects-card h3 {
            font-size: 1.25rem;
          }

          .more-projects-card p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
