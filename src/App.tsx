import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
