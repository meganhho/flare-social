import React, { useState } from 'react';
import Image from 'next/image';

// Mock data for Twitter personas
const mockPersonas = [
  {
    id: 1,
    handle: '@elonmusk',
    name: 'Elon Musk',
    avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
    bio: 'Technoking of Tesla, CEO and product architect of Tesla, Inc; CEO of Space Exploration Technologies Corp.',
  },
  {
    id: 2,
    handle: '@BillGates',
    name: 'Bill Gates',
    avatar: 'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg',
    bio: 'Co-chair, Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft.',
  },
  {
    id: 3,
    handle: '@AOC',
    name: 'Alexandria Ocasio-Cortez',
    avatar: 'https://pbs.twimg.com/profile_images/1696214098092457984/cMVGeXzA_400x400.jpg',
    bio: 'US Representative,NY-14 (BX & Queens). In a modern, moral, & wealthy society, no American should be too poor to live.',
  },
  {
    id: 4,
    handle: '@ShapiroSoper',
    name: 'Ben Shapiro',
    avatar: 'https://pbs.twimg.com/profile_images/1736723393573687296/5jQwvuc4_400x400.jpg',
    bio: 'Host of "The Ben Shapiro Show" and Editor Emeritus of @realDailyWire.',
  },
];

interface PersonaSelectorProps {
  onSelectPersona: (persona: any) => void;
  selectedPersona: any | null;
}

const PersonaSelector: React.FC<PersonaSelectorProps> = ({ onSelectPersona, selectedPersona }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredPersonas = mockPersonas.filter(
    persona => 
      persona.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      persona.handle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full mb-8">
      <h2 className="text-lg font-semibold mb-3 text-[#1E2A3B]">Select Twitter Persona</h2>
      
      <div className="relative">
        <div 
          className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedPersona ? (
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image 
                  src={selectedPersona.avatar} 
                  alt={selectedPersona.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{selectedPersona.name}</p>
                <p className="text-[#71767B] text-sm">{selectedPersona.handle}</p>
              </div>
            </div>
          ) : (
            <span className="text-[#71767B]">Select a Twitter handle to imitate</span>
          )}
          
          <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {isOpen && (
          <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <div className="p-3 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search Twitter handles..."
                className="input-field"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="max-h-80 overflow-y-auto">
              {filteredPersonas.map(persona => (
                <div
                  key={persona.id}
                  className="flex items-center space-x-3 p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => {
                    onSelectPersona(persona);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                >
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image 
                      src={persona.avatar} 
                      alt={persona.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{persona.name}</p>
                    <p className="text-[#71767B] text-sm">{persona.handle}</p>
                    <p className="text-[#71767B] text-xs line-clamp-1">{persona.bio}</p>
                  </div>
                </div>
              ))}
              
              {filteredPersonas.length === 0 && (
                <div className="p-4 text-center text-[#71767B]">
                  No personas found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonaSelector; 