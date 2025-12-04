import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} [Tu Nombre]. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
