'use client';

import { useState } from 'react';

interface MainContentProps {
  activeSection: string;
}

const MainContent = ({ activeSection }: MainContentProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const renderContent = () => {
    switch (activeSection) {
      case 'frontend':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Front-End Development</h2>
            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">React & Next.js Projects</h3>
                <p className="text-text-muted mb-4">
                  Modern web applications built with React and Next.js, featuring responsive design and optimal performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">UI/UX Design</h3>
                <p className="text-text-muted mb-4">
                  Creating intuitive and beautiful user interfaces with modern design principles and accessibility in mind.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Figma</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">CSS3</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">HTML5</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'devops':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">DevOps Engineering</h2>
            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Cloud Infrastructure</h3>
                <p className="text-text-muted mb-4">
                  Setting up and managing cloud infrastructure on AWS and Azure with automated deployment pipelines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">AWS</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Azure</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Kubernetes</span>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">CI/CD Pipelines</h3>
                <p className="text-text-muted mb-4">
                  Implementing continuous integration and deployment workflows for efficient software delivery.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">GitHub Actions</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Jenkins</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Azure DevOps</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">GitLab CI</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'allwork':
      default:
        return (
          <div>
            {/* Profile Header */}
            <div className="pt-8 px-8 pb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-foreground">Full Stack Engineer | DevOps Engineer | Next.js | MERN Stack</h1>
                <span className="text-2xl font-bold text-foreground">$15.00/hr</span>
              </div>
              
              <div className="mb-6">
                <div className="text-foreground text-base">Experienced Fullstack and DevOps Engineer Ready to Build and Deploy</div>
                <div className="text-foreground text-base">🕒 Available 40+ Hrs./Week</div>
                <div className="text-foreground text-base">⏱️ Committed to Deadlines & Milestones</div>
              </div>
              
              <div>
                {!showFullDescription ? (
                  <>
                    <p className="text-foreground text-base leading-relaxed">
                      Hello! I'm Hasnain, a Full Stack Developer & DevOps Engineer with 6+ years of experience building modern web applications and managing cloud infrastructure. I specialize in delivering complete solutions from clean...
                    </p>
                    <button 
                      className="text-accent underline cursor-pointer"
                      onClick={() => setShowFullDescription(true)}
                    >
                      more
                    </button>
                  </>
                ) : (
                  <div className="text-foreground text-base leading-relaxed space-y-4">
                    <p>
                      Hello! I'm Hasnain, a Full Stack Developer & DevOps Engineer with 6+ years of experience building modern web applications and managing cloud infrastructure. I specialize in delivering complete solutions from clean and responsive front-ends to powerful back-ends and automated deployments.
                    </p>
                    
                    <div>
                      <p className="font-semibold mb-2">What I Do:</p>
                      <div className="space-y-1">
                        <div>✅ Build web apps with React.js, Next.js, and TypeScript</div>
                        <div>✅ Create backends & APIs with Node.js, Express, MongoDB</div>
                        <div>✅ Design responsive UI with TailwindCSS & modern frameworks</div>
                        <div>✅ Deploy and scale apps using AWS, Google Cloud, Vercel</div>
                        <div>✅ Set up CI/CD pipelines, Docker, GitHub Actions for smooth workflows</div>
                        <div>✅ Work with databases: MongoDB, PostgreSQL, MySQL, Firebase, Supabase</div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2">Why Clients Hire Me:</p>
                      <div className="space-y-1">
                        <div>✅ End-to-end development (frontend + backend + deployment)</div>
                        <div>✅ Reliable, deadline-focused, and detail-oriented</div>
                        <div>✅ Strong communication—clear and simple updates</div>
                        <div>✅ Scalable and secure solutions for businesses</div>
                      </div>
                    </div>
                    
                    <p>
                      Whether you need a landing page, a full SaaS app, or DevOps automation for cloud hosting, I can help bring your ideas to life.
                    </p>
                    
                    <p>
                      Let's build something amazing!
                    </p>
                    
                    <p>
                      Best,<br />
                      Hasnain
                    </p>
                    
                    <button 
                      className="text-accent underline cursor-pointer"
                      onClick={() => setShowFullDescription(false)}
                    >
                      less
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Border after profile section */}
            <div className="w-full h-px bg-border"></div>
            
            <div className="p-8 space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Portfolio Overview</h3>
                <p className="text-text-muted mb-4">
                  A comprehensive collection of projects spanning front-end development, DevOps engineering, and full-stack solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Front-End Projects</h4>
                    <p className="text-sm text-text-muted">React, Next.js, and modern web applications</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">DevOps Solutions</h4>
                    <p className="text-sm text-text-muted">Cloud infrastructure and CI/CD pipelines</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Recent Projects</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">E-commerce Platform</h4>
                      <p className="text-sm text-text-muted">Full-stack React application with payment integration</p>
                    </div>
                    <span className="text-accent text-sm">2024</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">Cloud Migration</h4>
                      <p className="text-sm text-text-muted">AWS infrastructure setup and deployment automation</p>
                    </div>
                    <span className="text-accent text-sm">2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="flex-1 bg-background">
      {renderContent()}
    </main>
  );
};

export default MainContent;