import React from 'react';
import { useTranslation } from 'react-i18next';
import Slot from '../components/Slot';

const Education: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="education" className="section">
      <h2>{t('header.education')}</h2>
      <div className="education-list">
        <Slot
          institution={t('education.items.university.institution')}
          degree={t('education.items.university.degree')}
          duration={t('education.items.university.period')}
          description={t('education.items.university.description')}
        />
        <Slot
          institution={t('education.items.highschool.institution')}
          degree={t('education.items.highschool.degree')}
          duration={t('education.items.highschool.period')}
          description={t('education.items.highschool.description')}
        />
      </div>

      <style>{`
        .education-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
      `}</style>  
    </section>
  );
};

export default Education;
