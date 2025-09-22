'use client';

const Sidebar = () => {
  const skills = [
    'Front-End Development', 'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
    'Bootstrap', 'CI/CD', 'Tailwind CSS', 'Amazon EC2', 'Amazon Web Services',
    'Docker', 'DevOps', 'Azure DevOps', 'DevOps Engineering'
  ];

  return (
    <aside className="w-80 bg-background border-r border-border min-h-screen p-6">
      {/* Profile Section */}
      <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img 
                  src="/profile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Hasnain B.</h2>
            <p className="text-text-muted text-sm">Gilgit, Pakistan - 3:21 am local time</p>
            <div className="flex items-center space-x-1 mt-1">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-accent text-sm font-medium">67% Job Success</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <button className="w-full bg-accent text-white py-2 px-4 rounded text-sm font-medium hover:bg-[#177803] transition-colors">
            See public view
          </button>
          <button className="w-full border border-border text-foreground py-2 px-4 rounded text-sm font-medium hover:bg-secondary transition-colors">
            Profile settings
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="mb-8">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-accent py-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">View profile</span>
          </div>
          <div className="text-text-muted py-1 pl-6 text-sm">Front-End Development</div>
          <div className="text-text-muted py-1 pl-6 text-sm">DevOps Engineering</div>
          <button className="flex items-center space-x-2 text-text-muted py-2 hover:text-foreground transition-colors">
            <span className="text-sm">All work</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Earnings Summary */}
      <div className="mb-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">$300+</div>
            <div className="text-xs text-text-muted">Total earnings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">5</div>
            <div className="text-xs text-text-muted">Total jobs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">2</div>
            <div className="text-xs text-text-muted">Total hours</div>
          </div>
        </div>
      </div>

      {/* Promotional Section */}
      <div className="mb-8 space-y-3">
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <span className="text-blue-300 text-sm font-medium">Promote with ads</span>
            <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
        </div>
        
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-blue-300 text-sm font-medium">Availability badge</div>
              <div className="text-blue-200 text-xs">Off</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-4 bg-gray-600 rounded-full relative">
                <div className="w-3 h-3 bg-gray-400 rounded-full absolute top-0.5 left-0.5"></div>
              </div>
              <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Connects */}
      <div className="mb-8">
        <div className="text-sm text-text-muted mb-2">Connects: 2</div>
        <div className="flex space-x-2 text-sm">
          <button className="text-accent hover:underline">View details</button>
          <button className="text-accent hover:underline">Buy Connects</button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-muted">Video introduction</span>
          <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-muted">Hours per week</span>
          <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-muted">Languages</span>
          <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-muted">Verifications</span>
          <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-8">
        <h3 className="text-sm font-medium text-foreground mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 8).map((skill) => (
            <span
              key={skill}
              className="bg-secondary text-foreground px-2 py-1 rounded text-xs border border-accent/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
