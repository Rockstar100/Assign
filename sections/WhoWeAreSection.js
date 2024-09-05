import React from 'react';

// Ensure that the font "Bellota Text" is loaded in your project, via Google Fonts or another method
// Example: Include this in your HTML: <link href="https://fonts.googleapis.com/css2?family=Bellota+Text:wght@400&display=swap" rel="stylesheet">

const WhoWeAreSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between min-h-screen  p-16 text-white">
      <div className="flex-1 space-y-4 lg:space-y-8">
        <p className="text-sm tracking-wider" style={{ fontFamily: 'Bellota Text, sans-serif', marginBottom: '8px' }}>
          WHO ARE WE
        </p>
        <h1
          style={{
            fontFamily: 'Bellota Text, sans-serif',
            fontSize: '72px', // Adjust for exact font size
            fontWeight: '400',
            lineHeight: '1.2',
            letterSpacing: '0.1em', // Slightly adjust letter spacing to match
            textAlign: 'left',
            maxWidth: '500px',
          }}
        >
          Everybody loves a good story and we love to build them.
        </h1>
        <hr className="border-t border-white w-12 my-4" />
        <p className="text-base max-w-md leading-relaxed" style={{ fontFamily: 'Bellota Text, sans-serif' }}>
          We're a creative studio that specializes in brand strategy and digital creation, who enjoy a close working
          relationship with each of our clients and engaging in meaningful digital experiences.
        </p>
        <p className="text-base max-w-md mt-4 leading-relaxed" style={{ fontFamily: 'Bellota Text, sans-serif' }}>
          We're marketers, copywriters, thinkers, social media enthusiasts, visual designers and most importantly,
          communicators.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-end mt-8 lg:mt-0 lg:ml-12">
        <div className="relative w-80 h-100  rounded-md overflow-hidden">
          {/* Replace the src with the actual image URL */}
          <img src="assets/ssh.jpg" alt="Creative Studio" className="object-cover w-full h-full" />
          {/* Add decorative frame element */}
          <div className="absolute top-2 right-2 border-2 border-white w-8 h-8"></div>
        </div>
        
      </div>
    </div>
  );
};

export default WhoWeAreSection;
