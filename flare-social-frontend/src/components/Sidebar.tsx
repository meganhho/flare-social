import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
  activePage: string;
  onRefresh?: () => void;
  isLoading?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onRefresh, isLoading = false }) => {
  return (
    <div className="fixed top-0 left-0 w-80 h-full bg-white border-r border-gray-100 shadow-sm overflow-y-auto animate-slide-in">
      <div className="p-6">
        <div className="flex items-center mb-8">
          <div className="mr-3 text-[#E1407A] animate-pulse-flare glow-effect">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="font-semibold text-lg text-[#1E2A3B]">
            Twitter Analyzer
          </div>
        </div>

        <div className="mb-8 animate-slide-in card-3d-wrapper" style={{animationDelay: '0.1s'}}>
          <div className="px-4 py-2 text-xs font-semibold text-[#E1407A] uppercase tracking-wider mb-4">
            ACTIVE PROFILE
          </div>
          <div className="card-3d-inner">
            <div className="p-6 rounded-lg bg-[#F5F5F7] border border-gray-100 card-hover-effect relative">
              {/* Floating particles for visual interest */}
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
            
              <div className="flex items-center mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-[#E1407A] animate-pulse-flare">
                  <Image 
                    src="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg" 
                    alt="Flare Test Bot" 
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xl font-semibold text-[#1E2A3B]">Flare Test Bot</div>
                  <div className="text-md text-[#E1407A]">@flaretestbot</div>
                </div>
              </div>
              <div className="text-md text-[#1E2A3B] mb-6">
                A test bot for Flare Social
              </div>
              
              {/* Stats section with fixed layout to prevent overlaps */}
              <div className="flex flex-col space-y-2">
                <div className="bg-white rounded-lg p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-all animate-slide-in" style={{animationDelay: '0.2s'}}>
                  <div className="text-sm text-[#71767B]">Followers</div>
                  <div className="text-xl font-semibold whitespace-nowrap text-[#1E2A3B]">0</div>
                </div>
                <div className="bg-white rounded-lg p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-all animate-slide-in" style={{animationDelay: '0.3s'}}>
                  <div className="text-sm text-[#71767B]">Following</div>
                  <div className="text-xl font-semibold whitespace-nowrap text-[#1E2A3B]">0</div>
                </div>
                <div className="bg-white rounded-lg p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-all animate-slide-in" style={{animationDelay: '0.4s'}}>
                  <div className="text-sm text-[#71767B]">Tweets</div>
                  <div className="text-xl font-semibold whitespace-nowrap text-[#1E2A3B]">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 animate-slide-in" style={{animationDelay: '0.2s'}}>
          <div className="px-4 py-2 text-xs font-semibold text-[#E1407A] uppercase tracking-wider mb-4">
            MAIN MENU
          </div>
          <nav>
            <Link href="/" className={`flex items-center px-4 py-3 rounded-md transition-all mb-1 ${activePage === 'dashboard' ? 'bg-[#F5F5F7] text-[#E1407A]' : 'text-[#71767B] hover:bg-gray-50'} card-hover-effect magnetic-effect`}>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link href="/analytics" className={`flex items-center px-4 py-3 rounded-md transition-all mb-1 ${activePage === 'analytics' ? 'bg-[#F5F5F7] text-[#E1407A]' : 'text-[#71767B] hover:bg-gray-50'} card-hover-effect magnetic-effect`}>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-medium">Analytics</span>
            </Link>
            <Link href="/engagement" className={`flex items-center px-4 py-3 rounded-md transition-all mb-1 ${activePage === 'engagement' ? 'bg-[#F5F5F7] text-[#E1407A]' : 'text-[#71767B] hover:bg-gray-50'} card-hover-effect magnetic-effect`}>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <span className="font-medium">Engagement</span>
            </Link>
            <Link href="/scheduler" className={`flex items-center px-4 py-3 rounded-md transition-all mb-1 ${activePage === 'scheduler' ? 'bg-[#F5F5F7] text-[#E1407A]' : 'text-[#71767B] hover:bg-gray-50'} card-hover-effect magnetic-effect`}>
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Scheduler</span>
            </Link>
          </nav>
        </div>

        <div className="animate-slide-in" style={{animationDelay: '0.3s'}}>
          <div className="px-4 py-2 text-xs font-semibold text-[#E1407A] uppercase tracking-wider mb-4">
            ACTIONS
          </div>
          <div className="space-y-2">
            <button 
              className={`w-full flex items-center px-4 py-3 rounded-md transition-all btn-primary magnetic-effect glow-effect ${isLoading ? 'opacity-70' : ''}`}
              onClick={onRefresh}
              disabled={isLoading}
            >
              <svg className={`w-5 h-5 mr-3 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="font-medium">{isLoading ? 'Refreshing...' : 'Refresh Data'}</span>
            </button>
            <button className="w-full flex items-center px-4 py-3 rounded-md transition-all btn-outline">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="font-medium">Add New Profile</span>
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 animate-fade-in">
          <div className="p-4 rounded-lg bg-[#F5F5F7] text-center card-hover-effect animate-shine glow-effect">
            <div className="text-sm text-[#71767B] mb-3">
              <div className="animate-gradient-bg text-transparent bg-clip-text bg-gradient-to-r from-[#E1407A] to-[#6e57f2] font-bold mb-1">PRO VERSION</div>
              Upgrade to access advanced analytics and unlimited profiles
            </div>
            <button className="w-full py-2 rounded-md bg-[#E1407A] text-white font-medium text-sm hover:shadow-lg transition-all hover:-translate-y-1 transform">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 