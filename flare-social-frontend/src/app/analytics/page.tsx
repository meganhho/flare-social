'use client';

import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Image from 'next/image';

// Twitter profile data - reusing the same data for consistency
const twitterProfile = {
  id: 1,
  name: 'Flare Test Bot',
  handle: '@flaretestbot',
  avatar: 'https://pbs.twimg.com/profile_images/1898673884825894912/qemdxuUW_400x400.jpg',
  bio: 'A test bot for Flare Social',
  followers: '0',
  following: '0',
  joined: 'March 2025',
  location: 'Berkeley, CA',
  website: '',
  tweets: 0,
  engagement: '0%',
  liked: 0,
  verified: false,
  userId: '1898502911476604928',
};

// Topic analysis
const topicAnalysis = [
  { topic: 'EVMs', percentage: 32 },
  { topic: 'DeFi', percentage: 24 },
  { topic: 'AI', percentage: 18 },
  { topic: 'TEEs', percentage: 12 },
  { topic: 'Consensus Learning', percentage: 8 },
  { topic: 'Other', percentage: 6 },
];

// Audience demographics data
const audienceDemographics = [
  { region: 'United States', value: 38 },
  { region: 'United Kingdom', value: 18 },
  { region: 'Canada', value: 12 },
  { region: 'Australia', value: 8 },
  { region: 'Other', value: 24 }
];

// Device usage data
const deviceUsage = [
  { device: 'Mobile', value: 67 },
  { device: 'Desktop', value: 28 },
  { device: 'Tablet', value: 5 }
];

// Hourly engagement data
const hourlyEngagement = Array.from({ length: 24 }).map(() => 
  Math.floor(Math.random() * 70) + 20
);

export default function Analytics() {
  return (
    <DashboardLayout activePage="analytics">
      <div className="relative">
        {/* Floating particles for visual interest */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={`particle-static-${i}`} 
            className="particle" 
            style={{
              width: `${Math.random() * 10 + 4}px`, 
              height: `${Math.random() * 10 + 4}px`,
              top: `${Math.random() * 90}%`, 
              left: `${Math.random() * 90}%`, 
              opacity: Math.random() * 0.4 + 0.1,
              animation: `particle-float ${Math.random() * 8 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        <div className="flex items-start mb-8 animate-fade-in">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mr-6 border-2 border-[#E1407A] animate-pulse-flare">
            <Image
              src={twitterProfile.avatar}
              alt={twitterProfile.name}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#1E2A3B] mr-2">{twitterProfile.name} Analytics</h1>
              {twitterProfile.verified && (
                <svg className="w-5 h-5 text-[#E1407A] animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                </svg>
              )}
            </div>
            <p className="text-[#E1407A] mb-2">@{twitterProfile.handle.replace('@', '')}</p>
            <p className="text-[#1E2A3B] mb-4 max-w-2xl relative animate-shine">Detailed analytics for your Twitter profile</p>
          </div>
        </div>

        {/* Content Topics */}
        <div className="animate-fade-in mb-8">
          <h3 className="text-lg font-medium text-[#1E2A3B] mb-6">Content Topics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F5F7] p-6 rounded-lg shadow-sm animate-slide-in card-3d-effect">
              <h4 className="font-medium text-[#1E2A3B] mb-4">Topic Distribution</h4>
              <div className="space-y-6">
                {topicAnalysis.map((topic, idx) => (
                  <div key={topic.topic} className="animate-slide-in" style={{animationDelay: `${0.1 * idx}s`}}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-[#1E2A3B]">{topic.topic}</span>
                      <span className="text-[#71767B]">{topic.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden progress-bar-animated">
                      <div 
                        className="bg-[#E1407A] h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${topic.percentage}%`, animationDelay: `${0.2 * idx}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-[#F5F5F7] p-6 rounded-lg shadow-sm h-full card-3d-effect">
                <h4 className="font-medium text-[#1E2A3B] mb-4">Content Insights</h4>
                <ul className="space-y-4">
                  <li className="flex items-start animate-slide-in" style={{animationDelay: '0.4s'}}>
                    <div className="bg-[#E1407A] p-2 rounded-full text-white mr-3 flex-shrink-0 animate-pulse-flare">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#1E2A3B]">Highest Engagement</p>
                      <p className="text-sm text-[#71767B]">Topics related to technology receive 2x more engagement than other topics.</p>
                    </div>
                  </li>
                  <li className="flex items-start animate-slide-in" style={{animationDelay: '0.5s'}}>
                    <div className="bg-[#E1407A] p-2 rounded-full text-white mr-3 flex-shrink-0 animate-pulse-flare">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#1E2A3B]">Optimal Posting Time</p>
                      <p className="text-sm text-[#71767B]">Tweets posted between 12-2 PM EST receive 40% more impressions.</p>
                    </div>
                  </li>
                  <li className="flex items-start animate-slide-in" style={{animationDelay: '0.6s'}}>
                    <div className="bg-[#E1407A] p-2 rounded-full text-white mr-3 flex-shrink-0 animate-pulse-flare">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#1E2A3B]">Content Length</p>
                      <p className="text-sm text-[#71767B]">Tweets with 80-110 characters perform best with 60% higher engagement.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Audience Demographics */}
        <div className="animate-fade-in mb-8">
          <h3 className="text-lg font-medium text-[#1E2A3B] mb-6">Audience Demographics</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#F5F5F7] rounded-lg p-6 shadow-sm animate-slide-in card-3d-effect">
              <h4 className="font-medium text-[#1E2A3B] mb-4">Top Regions</h4>
              <div className="space-y-4">
                {audienceDemographics.map((item, idx) => (
                  <div key={item.region} className="animate-slide-in" style={{animationDelay: `${0.3 + idx * 0.1}s`}}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#1E2A3B]">{item.region}</span>
                      <span className="font-medium text-[#1E2A3B]">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 progress-bar-animated">
                      <div 
                        className="bg-[#E1407A] h-2 rounded-full transition-all duration-1000 ease-out animate-shine" 
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F5F5F7] rounded-lg p-6 shadow-sm animate-slide-in card-3d-effect" style={{animationDelay: '0.4s'}}>
              <h4 className="font-medium text-[#1E2A3B] mb-4">Device Usage</h4>
              <div className="flex items-center justify-center space-x-8">
                {deviceUsage.map((item, idx) => (
                  <div key={item.device} className="flex flex-col items-center animate-slide-in animate-scale" style={{animationDelay: `${0.5 + idx * 0.1}s`}}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${idx === 0 ? 'animate-gradient-bg' : 'bg-[#F4B4C7]'} text-white ${idx === 0 ? '' : 'animate-pulse-flare'}`}>
                      <span className="text-xl font-bold">{item.value}%</span>
                    </div>
                    <span className="text-sm font-medium text-[#1E2A3B] mt-3">{item.device}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Performance */}
        <div className="animate-fade-in">
          <h3 className="text-lg font-medium text-[#1E2A3B] mb-6">Content Performance</h3>
          <div className="bg-[#F5F5F7] rounded-lg p-6 shadow-sm animate-slide-in card-3d-effect">
            <h4 className="font-medium text-[#1E2A3B] mb-4">Engagement by Time</h4>
            <div className="h-64 flex items-end space-x-0.5 mt-4 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#F5F5F7] to-transparent opacity-20 animate-pulse"></div>
              {hourlyEngagement.map((height, index) => (
                <div 
                  key={index} 
                  className="flex-1 flex flex-col items-center group"
                >
                  <div 
                    className="w-full bg-[#E1407A] rounded-t-sm transition-all duration-700 ease-out hover:bg-[#F4B4C7] group-hover:bg-[#E1407A] hover:animate-bounce" 
                    style={{ 
                      height: `${height}%`,
                      opacity: height / 100,
                      animationDelay: `${index * 0.05}s`,
                      transform: `scaleY(1)`,
                      transformOrigin: 'bottom'
                    }}
                  ></div>
                  <span className="text-[10px] text-[#71767B] mt-1">{index}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-2 text-sm text-[#71767B]">Hour of Day (UTC)</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 