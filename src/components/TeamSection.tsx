import React, { useState } from 'react';

const TeamSection: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const teamMembers = [
    {
      id: '01',
      name: 'Rugweda Yende',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQHKO5Bln1sqmg/profile-displayphoto-scale_200_200/B4EZdYdIvAHcAY-/0/1749535726510?e=2147483647&v=beta&t=XCpLlBJ_0xhIOTF9SQ5ZtJmd26XL669YU9jGCGLG4m4',
      role: 'Web Developer'
    },
    {
      id: '02',
      name: 'Ritkriti Singh',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQF8_F5DBV4Hdg/profile-displayphoto-shrink_200_200/B4EZbut.7YGUAY-/0/1747761755802?e=1756944000&v=beta&t=sjToenTGJ727w_3sAUPeyj5utDxz5hwMB2qqyP-C2lY',
      role: 'Creative Lead'
    }
  ];

  return (
    <section className="py-20 px-6 ripple-zone">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl font-bangers text-center mb-16 text-gradient-quadrant">
          OUR TEAM
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative text-center cursor-pointer group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Member Number and Name */}
              <div className="relative z-10">
                <div className="text-8xl font-bangers text-white/20 mb-4 group-hover:text-gradient-quadrant transition-all duration-500">
                  {member.id}.
                </div>
                <div className="text-4xl font-bangers text-white group-hover:text-gradient-quadrant transition-all duration-300">
                  {member.name}
                </div>
                <div className="text-lg text-gray-400 mt-2 group-hover:text-white transition-all duration-300">
                  {member.role}
                </div>
              </div>

              {/* Circular Image Pop-up */}
              <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                hoveredMember === member.id 
                  ? 'opacity-100 scale-100 -translate-y-32' 
                  : 'opacity-0 scale-0 -translate-y-16'
              }`}>
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-500 p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/30 to-blue-500/30 blur-xl -z-10" />
                </div>
              </div>

              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-2xl transition-all duration-500 ${
                hoveredMember === member.id ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;