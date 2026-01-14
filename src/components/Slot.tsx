import React from 'react';

export interface SlotProps {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
  logoSrc?: string;
  logoAlt?: string;
}

const Slot: React.FC<SlotProps> = ({
  institution,
  degree,
  duration,
  description,
  logoSrc,
  logoAlt = '',
}) => {
  return (
    <article className="slot">
      {logoSrc && (
        <div className="slot-logo" aria-hidden={logoAlt ? 'false' : 'true'}>
          <img src={logoSrc} alt={logoAlt} />
        </div>
      )}

      <div className="slot-content">
        <div className="slot-header">
          <h3 className="slot-degree">{degree}</h3>
          <span className="slot-duration">{duration}</span>
        </div>
        <h4 className="slot-institution">{institution}</h4>
        {description && <p className="slot-desc">{description}</p>}
      </div>

      <style>{`
        .slot {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
          width: 100%;
          transition: transform 150ms ease, box-shadow 150ms ease, background-color 0.3s ease, border-color 0.3s ease;
        }
        .slot:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .slot-logo {
          flex: 0 0 80px;
          width: 80px;
          height: 80px;
          overflow: hidden;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--card-gradient-start), var(--card-gradient-end));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .slot-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          padding: 0.5rem;
        }
        .slot-content {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .slot-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .slot-degree {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }
        .slot-duration {
          font-size: 0.9rem;
          color: var(--text-tertiary);
          white-space: nowrap;
        }
        .slot-institution {
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
          color: var(--text-secondary);
        }
        .slot-desc {
          margin: 0.5rem 0 0 0;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
          white-space: pre-line;
        }
        @media (max-width: 720px) {
          .slot {
            flex-direction: column;
            gap: 1rem;
          }
          .slot-logo {
            width: 64px;
            height: 64px;
            flex: 0 0 64px;
          }
          .slot-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
        }
      `}</style>
    </article>
  );
};

export default Slot;