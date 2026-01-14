import React from 'react';
import Header from './routes/Header';
import Hero from './routes/Hero';
import AboutMe from './routes/AboutMe';
import Projects from './routes/Projects';
import Education from './routes/Education';
import Footer from './routes/Footer';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Education />
      </main>

      <Footer />
    </div>
  );
};

export default App;
