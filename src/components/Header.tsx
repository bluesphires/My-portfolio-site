'use client';

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="text-4xl font-bold text-foreground" style={{fontFamily: 'var(--font-dancing-script)'}}>
            Hasnain Babar
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
