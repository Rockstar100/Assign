import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

function About() {
    return (
        <div className="flex flex-col items-center justify-center text-white">
          <Header />
          <MainContent />
        </div>
      );
    
}

export default About;
