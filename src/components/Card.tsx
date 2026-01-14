import React, {useState} from 'react';

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
  // try exact, then language-only (e.g. "es-ES" -> "es"), then fallback to 'en'
  const map =
    LOCALE_STRINGS.get(lang) ||
    LOCALE_STRINGS.get(lang.split('-')[0]) ||
    LOCALE_STRINGS.get('en');

  return map?.get(key) ?? fallback ?? key;
}

export interface ProjectCardProps {
  title: string;
  awards?: string[];
  description: string;
  backText?: string;
  technologies?: string[]; // lista corta de tecnologías
  imageSrc?: string;       // ruta o import del asset
  imageAlt?: string;
  repoUrl?: string;
  demoUrl?: string;
  locale?: string;
}

const Card: React.FC<ProjectCardProps> = ({
  title,
  awards = [],
  description,
  backText,
  technologies = [],
  imageSrc,
  imageAlt = '',
  repoUrl,
  demoUrl,
  locale,
}) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    if(!backText) return;
    setFlipped((s) => !s);
  };

  return (
    <article className="card" onClick={toggleFlip} tabIndex={0} aria-pressed={flipped}>
      {awards.length > 0 ? (
        <div className="card-awards" aria-hidden={false}>
          {awards.map((a, i) => (
            <span key={i} className="card-award">{a}</span>
          ))}
        </div>
      ) : (
        <div className="tech-placeholder" aria-hidden="true" style={{ height: '1.6rem' }} />
      )}

      <div className="card-front" style={{ display: flipped ? 'none' : 'block' }}>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-desc">{description}</p>

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
      </div>

      <div className="card-back" style={{ display: flipped ? 'block' : 'none' }}>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-desc">{description}</p>
          {backText && <p className="card-back-extra">{backText}</p>}
        </div>
      </div>

      <style>{`
        .card {
          flex-direction: column;
          display: flex;
          gap: 0.5rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1rem;
          height: 100%;
          transition: transform 150ms ease, box-shadow 150ms ease, background-color 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
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
          font-size: 0.75rem;
          font-weight: 400;
          border: 1px solid var(--award-border);
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .card-image {
          flex: 0 0;
          max-height: 220px;
          overflow: hidden;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--card-gradient-start), var(--card-gradient-end));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-image img {
          width: 100%;
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
          height: 4rem;
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
          color: var(--tech-badge-text);
          padding: 0.25rem 0.5rem;
          border-radius: 999px;
          font-size: 0.8rem;
          transition: background-color 0.3s ease;
        }
        .card-actions {
          margin-top: auto;
          display: flex;
          gap: 0.5rem;
          align-self: flex-end;
        }
        .card-back-extra {
          margin-top: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          white-space: pre-line;
        }
        @media (max-width: 720px) {
          .card { 
            width: 100%; 
          }
          .card-front, .card-back { 
            flex-direction: column; 
          }
          .card-image { 
            width: 100%; 
            flex: none; 
          }
          .card-actions { 
            flex-direction: row; 
            justify-content: flex-start; 
            align-items: center; 
            margin-top: 0.5rem; 
          }
        }
      `}</style>
    </article>
  );
};

export default Card;