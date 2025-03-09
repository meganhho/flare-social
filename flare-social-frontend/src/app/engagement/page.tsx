'use client';

import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Image from 'next/image';

// Twitter profile data
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

// Mock engagement data
const engagementTrends = [
  { date: 'May 1', likes: 45, retweets: 12, replies: 8 },
  { date: 'May 2', likes: 32, retweets: 8, replies: 5 },
  { date: 'May 3', likes: 58, retweets: 15, replies: 10 },
  { date: 'May 4', likes: 72, retweets: 24, replies: 18 },
  { date: 'May 5', likes: 63, retweets: 18, replies: 12 },
  { date: 'May 6', likes: 50, retweets: 14, replies: 9 },
  { date: 'May 7', likes: 83, retweets: 29, replies: 22 },
];

// Top performing tweets
const topTweets = [
  {
    id: '1',
    text: 'Just launched our new #FlareNetwork integration with major exchanges! The future of interoperability is here. #Blockchain #Crypto',
    engagement: { likes: 283, retweets: 124, replies: 57, views: '24.5K' },
    date: 'May 7, 2023'
  },
  {
    id: '2',
    text: 'Excited to announce our partnership with @BinanceExchange to bring #Flare to millions of users worldwide! This is just the beginning. #FlareNetwork',
    engagement: { likes: 176, retweets: 89, replies: 42, views: '18.2K' },
    date: 'May 5, 2023'
  },
  {
    id: '3',
    text: 'Our smart contract capability enables developers to build cross-chain applications with unprecedented ease. Join our hackathon next month! #FlareDevs',
    engagement: { likes: 118, retweets: 67, replies: 31, views: '12.9K' },
    date: 'May 3, 2023'
  },
];

// Competitor accounts
const competitors = [
  { name: 'Competitor A', handle: '@competitor_a', followers: '12.4K', engagement: '3.2%' },
  { name: 'Competitor B', handle: '@competitor_b', followers: '8.7K', engagement: '2.8%' },
  { name: 'Competitor C', handle: '@competitor_c', followers: '24.1K', engagement: '1.9%' },
];

export default function Engagement() {
  const [selectedTab, setSelectedTab] = useState('trends');

  return (
    <DashboardLayout activePage="engagement">
      <div className="relative">
        {/* Floating particles */}
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
              <h1 className="text-2xl font-bold text-[#1E2A3B] mr-2">{twitterProfile.name} Engagement</h1>
              {twitterProfile.verified && (
                <svg className="w-5 h-5 text-[#E1407A] animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                </svg>
              )}
            </div>
            <p className="text-[#E1407A] mb-2">@{twitterProfile.handle.replace('@', '')}</p>
            <p className="text-[#1E2A3B] mb-4 max-w-2xl relative animate-shine">Track and optimize your Twitter engagement metrics</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white shadow-sm rounded-xl overflow-hidden mb-8 card-hover-effect animate-fade-in">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {['trends', 'top-tweets', 'competitors'].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-4 text-sm font-medium border-b-2 tab-transition ${
                    selectedTab === tab 
                      ? 'border-[#E1407A] text-[#E1407A]' 
                      : 'border-transparent text-[#71767B] hover:text-[#1E2A3B]'
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab === 'trends' && 'Engagement Trends'}
                  {tab === 'top-tweets' && 'Top Performing Tweets'}
                  {tab === 'competitors' && 'Competitor Analysis'}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {selectedTab === 'trends' && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-[#1E2A3B] mb-6">Weekly Engagement Activity</h3>
                  <div className="bg-[#F5F5F7] rounded-lg p-6 shadow-sm animate-slide-in card-3d-effect">
                    {/* Bar Chart */}
                    <div className="h-64 flex items-end space-x-4">
                      {engagementTrends.map((day, index) => (
                        <div key={day.date} className="flex-1">
                          <div className="flex flex-col space-y-1">
                            {/* Replies Bar */}
                            <div 
                              className="w-full bg-blue-400 rounded-t-sm" 
                              style={{ 
                                height: `${day.replies * 1.2}px`,
                                animation: `slideIn 0.5s ease-out`,
                                animationDelay: `${0.1 * index}s`,
                              }}
                            ></div>
                            
                            {/* Retweets Bar */}
                            <div 
                              className="w-full bg-green-400 rounded-t-sm" 
                              style={{ 
                                height: `${day.retweets * 1.2}px`,
                                animation: `slideIn 0.5s ease-out`,
                                animationDelay: `${0.15 * index}s`,
                              }}
                            ></div>
                            
                            {/* Likes Bar */}
                            <div 
                              className="w-full bg-[#E1407A] rounded-t-sm" 
                              style={{ 
                                height: `${day.likes * 0.8}px`,
                                animation: `slideIn 0.5s ease-out`,
                                animationDelay: `${0.2 * index}s`,
                              }}
                            ></div>
                          </div>
                          <div className="text-center mt-2 text-xs text-[#71767B]">{day.date}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Legend */}
                    <div className="flex justify-center mt-6 space-x-6">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#E1407A] rounded-sm mr-2"></div>
                        <span className="text-sm text-[#71767B]">Likes</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-400 rounded-sm mr-2"></div>
                        <span className="text-sm text-[#71767B]">Retweets</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-sm mr-2"></div>
                        <span className="text-sm text-[#71767B]">Replies</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#1E2A3B] mb-6">Engagement Rate</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: "Average Likes", value: "25 per tweet", change: "+12%" },
                      { title: "Average Retweets", value: "8 per tweet", change: "+5%" },
                      { title: "Average Replies", value: "6 per tweet", change: "+18%" },
                    ].map((metric, index) => (
                      <div 
                        key={metric.title} 
                        className="bg-[#F5F5F7] p-6 rounded-lg shadow-sm animate-slide-in card-3d-effect" 
                        style={{animationDelay: `${0.1 * index}s`}}
                      >
                        <h4 className="text-sm font-medium text-[#71767B]">{metric.title}</h4>
                        <p className="text-2xl font-bold text-[#1E2A3B] my-2">{metric.value}</p>
                        <p className="text-xs font-medium text-green-500 flex items-center">
                          {metric.change}
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                          <span className="text-[#71767B] ml-1">vs last month</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'top-tweets' && (
              <div className="animate-fade-in">
                <h3 className="text-lg font-medium text-[#1E2A3B] mb-6">Top Performing Tweets</h3>
                <div className="space-y-6">
                  {topTweets.map((tweet, idx) => (
                    <div 
                      key={tweet.id} 
                      className="border border-gray-100 rounded-lg p-4 hover:border-gray-200 transition-all animate-slide-in bg-white" 
                      style={{animationDelay: `${0.1 * idx}s`}}
                    >
                      <div className="flex items-start mb-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                          <Image 
                            src={twitterProfile.avatar}
                            alt={twitterProfile.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <span className="font-semibold text-[#1E2A3B]">{twitterProfile.name}</span>
                            {twitterProfile.verified && (
                              <svg className="w-4 h-4 text-[#E1407A] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                              </svg>
                            )}
                            <span className="text-[#E1407A] ml-2 text-sm">@{twitterProfile.handle.replace('@', '')}</span>
                            <span className="text-[#71767B] mx-1 text-sm">·</span>
                            <span className="text-[#71767B] text-sm">{tweet.date}</span>
                          </div>
                          <p className="text-[#1E2A3B] mt-1">{tweet.text}</p>
                          
                          {/* Performance metrics */}
                          <div className="mt-4 p-3 bg-[#F5F5F7] rounded-lg">
                            <div className="text-sm font-medium text-[#1E2A3B] mb-2">Tweet Performance</div>
                            <div className="flex space-x-6 text-sm">
                              <div>
                                <span className="text-[#71767B]">Likes: </span>
                                <span className="font-medium text-[#1E2A3B]">{tweet.engagement.likes}</span>
                              </div>
                              <div>
                                <span className="text-[#71767B]">Retweets: </span>
                                <span className="font-medium text-[#1E2A3B]">{tweet.engagement.retweets}</span>
                              </div>
                              <div>
                                <span className="text-[#71767B]">Replies: </span>
                                <span className="font-medium text-[#1E2A3B]">{tweet.engagement.replies}</span>
                              </div>
                              <div>
                                <span className="text-[#71767B]">Views: </span>
                                <span className="font-medium text-[#1E2A3B]">{tweet.engagement.views}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'competitors' && (
              <div className="animate-fade-in">
                <h3 className="text-lg font-medium text-[#1E2A3B] mb-6">Competitor Analysis</h3>
                
                <div className="bg-[#F5F5F7] rounded-lg p-6 shadow-sm animate-slide-in card-3d-effect mb-8">
                  <h4 className="font-medium text-[#1E2A3B] mb-4">Engagement Comparison</h4>
                  
                  <div className="space-y-8 mt-6">
                    {/* Your account */}
                    <div className="animate-slide-in" style={{animationDelay: '0.1s'}}>
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0">
                          <Image 
                            src={twitterProfile.avatar}
                            alt={twitterProfile.name}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-[#1E2A3B]">{twitterProfile.name}</div>
                          <div className="text-xs text-[#E1407A]">@{twitterProfile.handle.replace('@', '')}</div>
                        </div>
                        <div className="ml-auto">
                          <div className="text-sm font-medium text-[#1E2A3B]">
                            Followers: <span className="text-[#71767B]">{twitterProfile.followers}</span>
                          </div>
                          <div className="text-sm font-medium text-[#1E2A3B]">
                            Engagement: <span className="text-[#71767B]">{twitterProfile.engagement}</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#E1407A] h-2.5 rounded-full animate-pulse-flare" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                    
                    {/* Competitors */}
                    {competitors.map((competitor, idx) => (
                      <div key={competitor.handle} className="animate-slide-in" style={{animationDelay: `${0.2 + idx * 0.1}s`}}>
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 flex-shrink-0 flex items-center justify-center text-white font-bold">
                            {competitor.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-[#1E2A3B]">{competitor.name}</div>
                            <div className="text-xs text-[#71767B]">{competitor.handle}</div>
                          </div>
                          <div className="ml-auto">
                            <div className="text-sm font-medium text-[#1E2A3B]">
                              Followers: <span className="text-[#71767B]">{competitor.followers}</span>
                            </div>
                            <div className="text-sm font-medium text-[#1E2A3B]">
                              Engagement: <span className="text-[#71767B]">{competitor.engagement}</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-gray-400 h-2.5 rounded-full animate-pulse" 
                            style={{ 
                              width: `${(parseFloat(competitor.engagement) / 5) * 100}%`,
                              animationDelay: `${0.2 + idx * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-[#F5F5F7] rounded-lg p-6 shadow-sm animate-slide-in card-3d-effect">
                  <h4 className="font-medium text-[#1E2A3B] mb-4">Growth Opportunities</h4>
                  
                  <div className="space-y-4 mt-4">
                    <div className="flex items-start animate-slide-in" style={{animationDelay: '0.4s'}}>
                      <div className="bg-[#E1407A] p-2 rounded-full text-white mr-3 flex-shrink-0 animate-pulse-flare">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#1E2A3B]">Post More Visual Content</p>
                        <p className="text-sm text-[#71767B]">Your competitors post 2.5x more visual content (images and videos) than your account.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start animate-slide-in" style={{animationDelay: '0.5s'}}>
                      <div className="bg-[#E1407A] p-2 rounded-full text-white mr-3 flex-shrink-0 animate-pulse-flare">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#1E2A3B]">Increase Community Engagement</p>
                        <p className="text-sm text-[#71767B]">Competitor accounts respond to 40% more user comments than your account does.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start animate-slide-in" style={{animationDelay: '0.6s'}}>
                      <div className="bg-[#E1407A] p-2 rounded-full text-white mr-3 flex-shrink-0 animate-pulse-flare">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#1E2A3B]">Optimize Posting Schedule</p>
                        <p className="text-sm text-[#71767B]">Your top competitor posts during peak hours (12-2 PM) when your audience is most active.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 