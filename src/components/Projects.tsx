import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="section">
      <h2>{t('header.projects')}</h2>
      <ul className="projects-list">
        <li>Proyecto 1 — descripción breve</li>
        <li>Proyecto 2 — descripción breve</li>
        {/* más proyectos */}
      </ul>
    </section>
  );
};

export default Projects;
