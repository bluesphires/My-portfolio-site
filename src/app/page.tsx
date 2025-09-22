'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('Loading time...');

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
        <div className="bg-secondary mb-8 mx-6 rounded-lg">
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
                    <div className="absolute top-1 left-1 w-4 h-4 bg-accent rounded-full border-2 border-background"></div>
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
                
                    {/* Job Success */}
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 bg-transparent border-2 border-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="#3b82f6" viewBox="0 0 24 24">
                          <path d="M5 16L3 8l5.5 5L12 4l3.5 9L21 8l-2 8H5z"/>
                        </svg>
                      </div>
                      <span className="text-foreground text-sm font-medium">100% Job Success</span>
                      
                      {/* Top Rated Badge */}
                      <div className="flex items-center space-x-2 px-2 py-1 rounded">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{backgroundColor: '#3b82f6', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </div>
                        <span className="text-foreground text-sm font-medium">Top Rated</span>
                      </div>
                    </div>
              </div>
            </div>
            
            {/* Right Side - Book Consultation Button */}
            <div className="flex flex-col items-end space-y-3">
              <button className="bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#177803] transition-colors cursor-pointer">
                Book a consultation
              </button>
            </div>
          </div>
        </div>
        
        {/* Border below profile header */}
        <div className="w-full h-px bg-border"></div>
        
        <div className="flex">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}
