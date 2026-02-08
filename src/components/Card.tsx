import React from 'react';

type LocaleMap = Map<string, Map<string, string>>;

const LOCALE_STRINGS: LocaleMap = new Map([
  ['en', new Map([
    ['demo', 'Demo'],
    ['code', 'Code'],
  ])],
  ['es', new Map([
    ['demo', 'Demo'],
    ['code', 'Código'],
  ])],
  ['gl', new Map([
    ['demo', 'Demo'],
    ['code', 'Código'],
  ])],
]);

export function t(locale: string | undefined, key: string, fallback?: string): string {
  const lang = (locale || 'en').toLowerCase();
  const map =
    LOCALE_STRINGS.get(lang) ||
    LOCALE_STRINGS.get(lang.split('-')[0]) ||
    LOCALE_STRINGS.get('en');

  return map?.get(key) ?? fallback ?? key;
}

export interface ProjectCardProps {
  title: string;
  awards?: string[];
  awardsUrls?: string[];
  description: string;
  backText?: string;
  technologies?: string[];
  imageSrc?: string;
  imageAlt?: string;
  repoUrl?: string;
  demoUrl?: string;
  locale?: string;
}

const Card: React.FC<ProjectCardProps> = ({
  title,
  awards = [],
  awardsUrls = [],
  description,
  backText,
  technologies = [],
  imageSrc,
  imageAlt = '',
  repoUrl,
  demoUrl,
  locale,
}) => {
  return (
    <article className="card">
      {awards.length > 0 ? (
        <div className="card-awards" aria-hidden={false} aria-label="Awards received for this project">
          {awards.map((a, i) => {
            const url = awardsUrls[i];
            if (url) {
              return (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to award details: ${a}`}
                  className="card-award"
                >
                  {a}
                </a>
              );
            }
            return (
              <span key={i} className="card-award">{a}</span>
            );
          })}
        </div>
      ) : (
        <div className="tech-placeholder" aria-hidden="true" style={{ height: '1.6rem' }} />
      )}

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        
        {backText && <p className="card-extra">{backText}</p>}

        {technologies.length > 0 ? (
          <ul className="tech-list" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li key={tech} className="tech-item">{tech}</li>
            ))}
          </ul>
        ) : (
          <div className="tech-placeholder" aria-hidden="true" style={{ height: '1.8rem' }} />
        )}

        {imageSrc && (
          <div className="card-image" aria-hidden={imageAlt ? 'false' : 'true'}>
            <img src={imageSrc} alt={imageAlt} />
          </div>
        )}

        <div className="card-actions">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">{t(locale, 'demo')}</a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noreferrer" className="btn">{t(locale, 'code')}</a>
          )}
        </div>
      </div>

      <style>{`
        .card {
          flex-direction: column;
          display: flex;
          gap: 0.4rem;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1rem;
          margin: 0.01rem;
          height: 100%;
          transition: transform 150ms ease, box-shadow 150ms ease, background-color 0.3s ease, border-color 0.3s ease;
        }
        .card-awards {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          width: 100%;
        }
        .card-award {
          background: var(--award-bg);
          color: var(--award-text);
          padding: 0.2rem 0.5rem;
          border-radius: 999px;
          font-size: 0.7rem;
          border: 1px solid var(--award-border);
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .card-award:hover {
          background: var(--award-hover-bg);
          border-color: var(--award-hover-border);
          transform: translateY(-2px);
        }
        .card-image {
          flex: 0 0 auto;
          max-height: 180px;
          overflow: hidden;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: auto;
          margin-bottom: auto;
        }
        .card-image img {
          max-height: 180px;
          object-fit: cover;
          display: block;
        }
        .card-content {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .card-title {
          font-size: 1.125rem;
          margin: 0;
          color: var(--text-primary);
        }
        .card-desc {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .tech-list {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          list-style: none;
          padding: 0;
          margin: 0.25rem 0 0 0;
        }
        .tech-item {
          background: var(--tech-badge-bg);
          padding: 0.25rem 0.5rem;
          border-radius: 999px;
          font-size: 0.7rem;
          transition: background-color 0.3s ease;
        }
        .card-actions {
          display: flex;
          gap: 0.5rem;
          align-self: flex-end;
        }
        .card-extra {
          color: var(--text-tertiary);
          font-size: 0.8rem;
          white-space: pre-line;
        }
        @media (max-width: 720px) {
          .card { 
            width: 95%; 
            height: auto;
          }
          .card-front, .card-back { 
            flex-direction: column; 
          }
          .card-image { 
            width: 100%; 
            height: 150px;
            flex: none; 
          }
          .card-image img {
            height: 150px;
          }
        }
      `}</style>
    </article>
  );
};

export default Card;