'use client';

import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import DashboardHeader from '../../components/DashboardHeader';
import Image from 'next/image';

interface Persona {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  posts: number;
  debates: number;
  followers: string;
  joined: string;
}

const mockPersonas: Persona[] = [
  {
    id: 1,
    name: 'Elon Musk',
    handle: '@elonmusk',
    avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
    bio: 'Technoking of Tesla, CEO and product architect of Tesla, Inc; CEO of Space Exploration Technologies Corp.',
    posts: 52,
    debates: 18,
    followers: '180.5M',
    joined: 'June 2009',
  },
  {
    id: 2,
    name: 'Bill Gates',
    handle: '@BillGates',
    avatar: 'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg',
    bio: 'Co-chair, Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft.',
    posts: 27,
    debates: 14,
    followers: '62.8M',
    joined: 'June 2009',
  },
  {
    id: 3,
    name: 'Alexandria Ocasio-Cortez',
    handle: '@AOC',
    avatar: 'https://pbs.twimg.com/profile_images/1696214098092457984/cMVGeXzA_400x400.jpg',
    bio: 'US Representative,NY-14 (BX & Queens). In a modern, moral, & wealthy society, no American should be too poor to live.',
    posts: 38,
    debates: 23,
    followers: '13.5M',
    joined: 'June 2010',
  },
  {
    id: 4,
    name: 'Ben Shapiro',
    handle: '@BenShapiro',
    avatar: 'https://pbs.twimg.com/profile_images/1736723393573687296/5jQwvuc4_400x400.jpg',
    bio: 'Host of "The Ben Shapiro Show" and Editor Emeritus of @realDailyWire.',
    posts: 41,
    debates: 19,
    followers: '5.7M',
    joined: 'October 2009',
  },
  {
    id: 5,
    name: 'Barack Obama',
    handle: '@BarackObama',
    avatar: 'https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg',
    bio: 'Dad, husband, President, citizen.',
    posts: 31,
    debates: 12,
    followers: '133.3M',
    joined: 'March 2007',
  },
  {
    id: 6,
    name: 'Bernie Sanders',
    handle: '@SenSanders',
    avatar: 'https://pbs.twimg.com/profile_images/1489761807032541186/3Hv3xRZ1_400x400.jpg',
    bio: 'U.S. Senator from Vermont.',
    posts: 45,
    debates: 21,
    followers: '8.6M',
    joined: 'April 2010',
  },
];

export default function PersonasPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPersonas = mockPersonas.filter(
    (persona) =>
      persona.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      persona.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      persona.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout activePage="personas">
      <DashboardHeader
        title="Twitter Personas"
        subtitle="Manage the Twitter personalities available for AI debates"
      />

      <div className="bg-white shadow-sm rounded-xl overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium text-[#1E2A3B]">All Personas</h2>
            <p className="text-sm text-[#71767B]">Create and manage AI personas based on Twitter profiles</p>
          </div>
          <button className="bg-[#E1407A] text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New Persona
          </button>
        </div>

        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1407A]"
              placeholder="Search personas by name, handle or bio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredPersonas.map((persona) => (
            <div key={persona.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={persona.avatar}
                      alt={persona.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1E2A3B]">{persona.name}</h3>
                    <p className="text-sm text-[#71767B]">{persona.handle}</p>
                  </div>
                </div>

                <p className="text-sm text-[#1E2A3B] mb-4 line-clamp-2">{persona.bio}</p>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-[#71767B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="text-[#71767B]">Followers:</span>
                    <span className="ml-1 font-medium text-[#1E2A3B]">{persona.followers}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-[#71767B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[#71767B]">Joined:</span>
                    <span className="ml-1 font-medium text-[#1E2A3B]">{persona.joined}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-[#71767B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <span className="text-[#71767B]">Posts:</span>
                    <span className="ml-1 font-medium text-[#1E2A3B]">{persona.posts}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-[#71767B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-[#71767B]">Debates:</span>
                    <span className="ml-1 font-medium text-[#1E2A3B]">{persona.debates}</span>
                  </div>
                </div>
              </div>

              <div className="flex border-t border-gray-200">
                <button className="flex-1 py-3 text-sm font-medium text-[#E1407A] hover:bg-[#E1407A10] transition-colors">
                  Edit Persona
                </button>
                <div className="border-l border-gray-200"></div>
                <button className="flex-1 py-3 text-sm font-medium text-[#1E2A3B] hover:bg-gray-50 transition-colors">
                  Create Debate
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPersonas.length === 0 && (
          <div className="p-8 text-center">
            <svg
              className="w-12 h-12 text-gray-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <p className="text-lg font-medium text-[#1E2A3B]">No personas found</p>
            <p className="text-[#71767B]">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 