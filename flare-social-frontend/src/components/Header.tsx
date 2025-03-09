import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-[#E1407A] to-[#1E2A3B] bg-clip-text text-transparent">
                AI Debates
              </span>
              <span className="ml-2 text-2xl font-bold text-[#1E2A3B]">
                with Multiple Perspectives
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-[#E1407A] text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">
              New Debate
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 