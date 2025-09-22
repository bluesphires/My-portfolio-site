const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
    'HTML/CSS', 'Tailwind CSS', 'Git', 'Figma', 'UI/UX Design'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Passionate Developer & Designer
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I&apos;m a creative developer with a passion for building exceptional digital experiences. 
                With expertise in both frontend and backend development, I bring ideas to life through 
                clean, efficient code and thoughtful design.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="bg-[#177803]/10 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#177803]">3+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
