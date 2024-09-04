import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-8 text-white">
      <div className="w-full max-w-xl">
        <h1 
          style={{
            fontFamily: 'Bellota Text, sans-serif',
            fontSize: '50px',
       
            letterSpacing: '0.14em',
            textAlign: 'left',
            marginBottom: '20px'
          }}
        >
          Tell us about your project
          <br />
          and find out how we can help your business grow
        </h1>
        <p className="text-xs mb-6" style={{ fontFamily: 'Bellota Text, sans-serif' }}>Fill out the form below</p>
        <form className="space-y-4">
          <label className="block">
            <span className="text-xs mb-1" style={{ fontFamily: 'Bellota Text, sans-serif' }}>EMAIL ID:</span>
            <input 
              type="email" 
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" 
              placeholder="Your email" 
              style={{ fontFamily: 'Bellota Text, sans-serif' }}
            />
          </label>
          <label className="block">
            <span className="text-xs mb-1" style={{ fontFamily: 'Bellota Text, sans-serif' }}>NAME:</span>
            <input 
              type="text" 
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" 
              placeholder="Your name" 
              style={{ fontFamily: 'Bellota Text, sans-serif',
                color: 'white'

               }}
            />
          </label>
          <label className="block">
            <span className="text-xs mb-1" style={{ fontFamily: 'Bellota Text, sans-serif' }}>COMPANY NAME:</span>
            <input 
              type="text" 
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" 
              placeholder="Your company name" 
              style={{ fontFamily: 'Bellota Text, sans-serif' }}
            />
          </label>
          <label className="block">
            <span className="text-xs mb-1" style={{ fontFamily: 'Bellota Text, sans-serif' }}>CONTACT NUMBER:</span>
            <input 
              type="text" 
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" 
              placeholder="Your contact number" 
              style={{ fontFamily: 'Bellota Text, sans-serif' }}
            />
          </label>
          <label className="block">
            <span className="text-xs mb-1" style={{ fontFamily: 'Bellota Text, sans-serif' }}>PROFESSIONAL DESIGNATION:</span>
            <input 
              type="text" 
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" 
              placeholder="Your designation" 
              style={{ fontFamily: 'Bellota Text, sans-serif' }}
            />
          </label>
          <label className="block">
            <span className="text-xs mb-1" style={{ fontFamily: 'Bellota Text, sans-serif' }}>BUDGET YOU INTEND TO COMMIT TO THE PROJECT*:</span>
            <input 
              type="text" 
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" 
              placeholder="Your budget" 
              style={{ fontFamily: 'Bellota Text, sans-serif' }}
            />
          </label>
          <label className="block">
            <span className="text-xs mb-1" style={{ fontFamily: 'Bellota Text, sans-serif' }}>DESCRIBE YOUR PROJECT:</span>
            <input 
              type="text" 
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" 
              placeholder="Project description" 
              style={{ fontFamily: 'Bellota Text, sans-serif' }}
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
