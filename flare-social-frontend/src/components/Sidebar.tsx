import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
  activePage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage }) => {
  return (
    <div className="h-screen w-80 bg-[#1E2A3B] text-white fixed left-0 top-0 overflow-y-auto">
      <div className="p-8">
        <div className="flex items-center mb-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#E1407A] to-white bg-clip-text text-transparent">
            Twitter Analyzer
          </div>
        </div>

        <div className="mb-8">
          <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            ACTIVE PROFILE
          </div>
          <div className="p-6 rounded-lg bg-[#2A3547] border border-[#3A4557]">
            <div className="flex items-center mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-[#E1407A]">
                <Image 
                  src="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg" 
                  alt="Elon Musk" 
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-xl font-semibold">Elon Musk</div>
                <div className="text-md text-gray-400">@elonmusk</div>
              </div>
            </div>
            <div className="text-md text-gray-300 mb-6">
              Technoking of Tesla, CEO of SpaceX, Chief of X/Twitter
            </div>
            
            {/* Stats section with fixed layout to prevent overlaps */}
            <div className="flex flex-col space-y-2">
              <div className="bg-[#1E2A3B] rounded-lg p-4 flex justify-between items-center">
                <div className="text-sm text-gray-400">Followers</div>
                <div className="text-xl font-semibold whitespace-nowrap">180.5M</div>
              </div>
              <div className="bg-[#1E2A3B] rounded-lg p-4 flex justify-between items-center">
                <div className="text-sm text-gray-400">Following</div>
                <div className="text-xl font-semibold whitespace-nowrap">259</div>
              </div>
              <div className="bg-[#1E2A3B] rounded-lg p-4 flex justify-between items-center">
                <div className="text-sm text-gray-400">Tweets</div>
                <div className="text-xl font-semibold whitespace-nowrap">32.6K</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <button className="flex items-center justify-center w-full px-6 py-4 rounded-lg text-white hover:bg-[#2A3547] transition-colors border border-[#3A4557] bg-[#2A3547]">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh Profile Data
            </button>
            <button className="flex items-center justify-center w-full px-6 py-4 rounded-lg text-white hover:bg-[#2A3547] transition-colors">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Change Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 