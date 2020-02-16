import React from 'react';
import Services from '../components/Services';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Intro from '../components/Intro';

export default function Landing(props) {
  return (
    <div>
      <div>Landing</div>
      <Intro />
      <Services />
      <Experience />
      <About />
      <Contact />
      <div>Landing</div>
    </div>
  );
}
