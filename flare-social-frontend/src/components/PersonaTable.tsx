import React from 'react';
import Image from 'next/image';

interface Persona {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  posts: number;
  debates: number;
}

const mockPersonas: Persona[] = [
  {
    id: 1,
    name: 'Elon Musk',
    handle: '@elonmusk',
    avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
    posts: 52,
    debates: 18,
  },
  {
    id: 2,
    name: 'Bill Gates',
    handle: '@BillGates',
    avatar: 'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg',
    posts: 27,
    debates: 14,
  },
  {
    id: 3,
    name: 'Alexandria Ocasio-Cortez',
    handle: '@AOC',
    avatar: 'https://pbs.twimg.com/profile_images/1696214098092457984/cMVGeXzA_400x400.jpg',
    posts: 38,
    debates: 23,
  },
  {
    id: 4,
    name: 'Ben Shapiro',
    handle: '@BenShapiro',
    avatar: 'https://pbs.twimg.com/profile_images/1736723393573687296/5jQwvuc4_400x400.jpg',
    posts: 41,
    debates: 19,
  },
  {
    id: 5,
    name: 'Barack Obama',
    handle: '@BarackObama',
    avatar: 'https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg',
    posts: 31,
    debates: 12,
  },
];

const PersonaTable: React.FC = () => {
  return (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-[#1E2A3B]">Active Personas</h2>
        <p className="text-sm text-[#71767B]">List of Twitter personas available for AI debates</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-[#71767B] uppercase tracking-wider"
              >
                Persona
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-[#71767B] uppercase tracking-wider"
              >
                Posts
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-[#71767B] uppercase tracking-wider"
              >
                Debates
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-right text-xs font-medium text-[#71767B] uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockPersonas.map((persona) => (
              <tr key={persona.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 relative">
                      <Image
                        className="rounded-full"
                        src={persona.avatar}
                        alt={persona.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-[#1E2A3B]">{persona.name}</div>
                      <div className="text-sm text-[#71767B]">{persona.handle}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-[#1E2A3B]">{persona.posts}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-[#1E2A3B]">{persona.debates}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-[#E1407A] hover:text-[#E1407A] hover:underline mr-4">
                    Edit
                  </button>
                  <button className="text-[#71767B] hover:text-[#1E2A3B]">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonaTable; 