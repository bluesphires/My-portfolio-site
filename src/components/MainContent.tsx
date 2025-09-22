'use client';

import { useState } from 'react';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('published');

  const projects = [
    {
      id: 1,
      title: 'Freelancing Marketplace',
      image: '/api/placeholder/300/200',
      description: 'A comprehensive platform for freelancers and clients to connect and collaborate.'
    },
    {
      id: 2,
      title: 'Wedding Web App',
      image: '/api/placeholder/300/200',
      description: 'Beautiful wedding planning application with RSVP and guest management features.'
    },
    {
      id: 3,
      title: 'Hasnain.Dev Portfolio',
      image: '/api/placeholder/300/200',
      description: 'Personal portfolio website showcasing projects and professional experience.'
    }
  ];

  const workHistory = [
    {
      id: 1,
      title: 'NextJS Developer Needed',
      rating: 5.0,
      client: 'Client Name',
      period: 'Jul 4, 2025 - Aug 18, 2025',
      price: '$95.00 Fixed price',
      feedback: 'I found him to be highly efficient, courteous, and above all, extremely awesome, talented, and experienced frontend developer. He delivered work...',
      skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Front-end Developer Needed',
      rating: 5.0,
      client: 'Client Name',
      period: 'Apr 9, 2025 - May 22, 2025',
      price: '$15.00 Fixed price',
      feedback: 'Great work on the frontend development project!',
      skills: ['React', 'JavaScript', 'CSS']
    }
  ];

  return (
    <main className="flex-1 bg-background">
      {/* Portfolio Section */}
      <div className="mb-8 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Portfolio</h2>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('published')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'published'
                ? 'border-accent text-accent'
                : 'border-transparent text-text-muted hover:text-foreground'
            }`}
          >
            Published
          </button>
          <button
            onClick={() => setActiveTab('drafts')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'drafts'
                ? 'border-accent text-accent'
                : 'border-transparent text-text-muted hover:text-foreground'
            }`}
          >
            Drafts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-secondary rounded-lg overflow-hidden hover:bg-border/50 transition-colors">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <span className="text-text-muted">Project Image</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-text-muted text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work History */}
      <div className="mb-8 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Work history on Upwork</h2>
        
        <div className="bg-secondary rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Show on profile</span>
            <div className="w-8 h-4 bg-accent rounded-full relative">
              <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5"></div>
            </div>
          </div>
          <p className="text-text-muted text-sm mb-2">
            I have extensive experience in web development and DevOps, with expertise in modern technologies like Next.js, Tailwind CSS, and UI/UX design. I&apos;m passionate about creating efficient, scalable solutions that meet client needs.
          </p>
          <button className="text-accent hover:underline text-sm">Show more</button>
        </div>

        <div className="space-y-4">
          {workHistory.map((job) => (
            <div key={job.id} className="bg-secondary rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-text-muted">({job.rating})</span>
                </div>
              </div>
              <p className="text-text-muted text-sm mb-2">{job.period}</p>
              <p className="text-text-muted text-sm mb-3">{job.feedback}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {job.skills.map((skill) => (
                  <span key={skill} className="bg-background text-foreground px-2 py-1 rounded text-xs border border-border">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-sm font-medium text-foreground">{job.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Front-End Development', 'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
            'Bootstrap', 'CI/CD', 'Tailwind CSS', 'Amazon EC2', 'Amazon Web Services',
            'Docker', 'DevOps', 'Azure DevOps', 'DevOps Engineering'
          ].map((skill) => (
            <span
              key={skill}
              className="bg-secondary text-foreground px-3 py-1 rounded text-sm border border-accent/30 hover:border-accent/50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-8 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">Testimonials</h2>
        <p className="text-text-muted text-sm mb-4">Endorsements from past clients</p>
        <div className="bg-secondary rounded-lg p-6 text-center">
          <svg className="w-12 h-12 text-text-muted mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-text-muted text-sm mb-4">Showcase your skills with non-Upwork client testimonials</p>
          <button className="bg-accent text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#177803] transition-colors">
            Request a testimonial
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
