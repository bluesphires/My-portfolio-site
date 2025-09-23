'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('Loading time...');
  const [activeSection, setActiveSection] = useState('allwork');

  useEffect(() => {
    // Get current time
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto border-l border-r border-border pt-6">
        {/* Full Width Profile Header */}
        <div className="mb-8 mx-6 rounded-lg border border-border">
          <div className="flex items-center justify-between p-6">
            {/* Left Side - Profile Info */}
            <div className="flex items-center space-x-4">
                  {/* Profile Picture with Status and Edit Icons */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent">
                      <img 
                        src="/profile.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Online Status Indicator */}
                    <div className="absolute top-1 left-1 w-4 h-4 rounded-full border-2" style={{backgroundColor: '#61d161', borderColor: '#1a1a1a'}}></div>
              </div>
              
              {/* Name and Details */}
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h1 className="text-2xl font-bold text-foreground">Hasnain B.</h1>
                  {/* Verification Badge */}
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                    {/* Location and Time */}
                    <div className="flex items-center space-x-1 mb-2">
                      <svg className="w-4 h-4 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-muted text-sm">Gilgit, Pakistan – {currentTime} local time</span>
                    </div>
                
                    {/* Full Stack Developer Badge */}
                    <div className="inline-block bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                      <div className="flex items-center">
                        <span className="text-blue-300 text-sm font-medium">Full stack developer</span>
                      </div>
                    </div>
              </div>
            </div>
            
                  {/* Right Side - Download CV Button */}
                  <div className="flex flex-col items-end space-y-3">
                    <button className="bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#177803] hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer">
                      Download CV
                    </button>
                  </div>
          </div>
        </div>
        
        {/* Border below profile header */}
        <div className="w-full h-px bg-border"></div>
        
        <div className="flex">
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          <MainContent activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
}
