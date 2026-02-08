import React from 'react';
import Header from './components/Header';
import Hero from './routes/Hero';
import AboutMe from './routes/AboutMe';
import Projects from './routes/Projects';
import Education from './routes/Education';
import Footer from './components/Footer';
import './styles/styles.css';

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
