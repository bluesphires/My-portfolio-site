'use client';

const Sidebar = () => {
  const skills = [
    'Front-End Development', 'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
    'Bootstrap', 'CI/CD', 'Tailwind CSS', 'Amazon EC2', 'Amazon Web Services',
    'Docker', 'DevOps', 'Azure DevOps', 'DevOps Engineering'
  ];

  return (
    <aside className="w-80 bg-background border-r border-border min-h-screen">
      {/* Navigation */}
      <div className="p-6">
        <div className="space-y-1">
          <div className="text-foreground py-2">
            <span className="text-base font-medium">View profile</span>
          </div>
          <div className="text-text-muted py-2 pl-6 text-base cursor-pointer hover:bg-secondary rounded transition-colors">Front-End Development</div>
          <div className="text-text-muted py-2 pl-6 text-base cursor-pointer hover:bg-secondary rounded transition-colors">DevOps Engineering</div>
          <div className="flex items-center justify-between w-full bg-secondary text-foreground py-2 rounded hover:bg-secondary/80 transition-colors cursor-pointer">
            <span className="text-base pl-6">All work</span>
            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Border after navigation */}
      <div className="w-full h-px bg-border"></div>

      {/* Jobs and Hours Summary */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">11</div>
            <div className="text-xs text-text-muted">Total jobs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">455</div>
            <div className="text-xs text-text-muted">Total hours</div>
          </div>
        </div>
      </div>

      {/* Border after jobs and hours summary */}
      <div className="w-full h-px bg-border"></div>

      {/* Promotional Section */}
      <div className="space-y-3 p-6">
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <span className="text-blue-300 text-sm font-medium">Available now</span>
            <div className="w-3 h-3 bg-accent rounded-full"></div>
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
      <div className="p-6">
        <div className="text-sm text-text-muted mb-2">Connects: 2</div>
        <div className="flex space-x-2 text-sm">
          <button className="text-accent hover:underline">View details</button>
          <button className="text-accent hover:underline">Buy Connects</button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="space-y-2 px-6 pt-6 pb-2">
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
      <div className="p-6">
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
