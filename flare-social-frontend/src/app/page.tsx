'use client';

import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import DashboardHeader from '../components/DashboardHeader';
import StatCard from '../components/StatCard';
import Image from 'next/image';

// Mock Twitter profile data
const twitterProfile = {
  id: 1,
  name: 'Elon Musk',
  handle: '@elonmusk',
  avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
  bio: 'Technoking of Tesla, CEO of SpaceX, Chief of X/Twitter',
  followers: '180.5M',
  following: '259',
  joined: 'June 2009',
  location: 'A Meme Factory',
  website: 'tesla.com',
  tweets: 32681,
  engagement: '12.4%',
  liked: 23461,
  verified: true,
};

// Mock tweets data
const mockTweets = [
  {
    id: 1,
    content: "Humanity will reach Mars in your lifetime",
    date: 'Mar 8, 2024',
    likes: 234500,
    retweets: 18600,
    replies: 9800,
    views: '12.7M',
    media: null,
    sentiment: 'positive',
  },
  {
    id: 2,
    content: "Some people spend their lives angry at the world. It's their choice to be unhappy.",
    date: 'Mar 7, 2024',
    likes: 189300,
    retweets: 15700,
    replies: 5400,
    views: '10.2M',
    media: null,
    sentiment: 'neutral',
  },
  {
    id: 3,
    content: "The quality of the new Cybertruck is incredible",
    date: 'Mar 6, 2024',
    likes: 323600,
    retweets: 24900,
    replies: 12700,
    views: '17.3M',
    media: 'https://pbs.twimg.com/media/F-NqDpaacAAFQbm?format=jpg&name=medium',
    sentiment: 'positive',
  },
  {
    id: 4,
    content: "The best technologies disappear into the background. When was the last time you thought about electricity?",
    date: 'Mar 5, 2024',
    likes: 298400,
    retweets: 23100,
    replies: 8600,
    views: '14.5M',
    media: null,
    sentiment: 'neutral',
  },
  {
    id: 5,
    content: "Looking forward to Tesla AI Day on September 30!",
    date: 'Mar 4, 2024',
    likes: 356700,
    retweets: 29800,
    replies: 14300,
    views: '18.9M',
    media: null,
    sentiment: 'positive',
  },
];

// Topic analysis
const topicAnalysis = [
  { topic: 'Tesla', percentage: 32 },
  { topic: 'SpaceX', percentage: 24 },
  { topic: 'AI', percentage: 18 },
  { topic: 'Politics', percentage: 12 },
  { topic: 'Memes', percentage: 8 },
  { topic: 'Other', percentage: 6 },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('tweets');

  return (
    <DashboardLayout activePage="dashboard">
      <div className="flex items-start mb-8">
        <div className="relative w-20 h-20 rounded-full overflow-hidden mr-6">
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
            <h1 className="text-2xl font-bold text-[#1E2A3B] mr-2">{twitterProfile.name}</h1>
            {twitterProfile.verified && (
              <svg className="w-5 h-5 text-[#E1407A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            )}
          </div>
          <p className="text-[#71767B] mb-2">{twitterProfile.handle}</p>
          <p className="text-[#1E2A3B] mb-4 max-w-2xl">{twitterProfile.bio}</p>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <span className="font-semibold text-[#1E2A3B] mr-1">{twitterProfile.followers}</span>
              <span className="text-[#71767B]">Followers</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-[#1E2A3B] mr-1">{twitterProfile.following}</span>
              <span className="text-[#71767B]">Following</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-[#1E2A3B] mr-1">{twitterProfile.tweets.toLocaleString()}</span>
              <span className="text-[#71767B]">Tweets</span>
            </div>
            <div className="flex items-center text-[#71767B]">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Joined {twitterProfile.joined}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Engagement Rate"
          value={twitterProfile.engagement}
          icon="chart"
          trend={{ value: 5.2, isPositive: true }}
        />
        <StatCard
          title="Avg. Likes per Tweet"
          value="246K"
          icon="heart"
          trend={{ value: 8.7, isPositive: true }}
        />
        <StatCard
          title="Avg. Retweets"
          value="18.4K"
          icon="message"
          trend={{ value: 3.1, isPositive: true }}
        />
        <StatCard
          title="Tweet Sentiment"
          value="76% Positive"
          icon="globe"
          trend={{ value: 2.8, isPositive: true }}
        />
      </div>

      <div className="bg-white shadow-sm rounded-xl overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              className={`px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'tweets' ? 'border-[#E1407A] text-[#E1407A]' : 'border-transparent text-[#71767B] hover:text-[#1E2A3B]'
              }`}
              onClick={() => setActiveTab('tweets')}
            >
              Recent Tweets
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'analytics' ? 'border-[#E1407A] text-[#E1407A]' : 'border-transparent text-[#71767B] hover:text-[#1E2A3B]'
              }`}
              onClick={() => setActiveTab('analytics')}
            >
              Content Analytics
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'engagement' ? 'border-[#E1407A] text-[#E1407A]' : 'border-transparent text-[#71767B] hover:text-[#1E2A3B]'
              }`}
              onClick={() => setActiveTab('engagement')}
            >
              Engagement Metrics
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'tweets' && (
            <div className="space-y-6">
              {mockTweets.map((tweet) => (
                <div key={tweet.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <p className="text-[#1E2A3B] mb-3">{tweet.content}</p>
                  
                  {tweet.media && (
                    <div className="mb-3 rounded-lg overflow-hidden">
          <Image
                        src={tweet.media}
                        alt="Tweet media"
                        width={500}
                        height={300}
                        className="object-cover w-full"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center text-sm text-[#71767B] mb-3">
                    <span>{tweet.date}</span>
                    <span className="mx-1">·</span>
                    <span>{tweet.views} views</span>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-[#71767B]">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                      </svg>
                      <span>{(tweet.likes/1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      <span>{(tweet.retweets/1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>{(tweet.replies/1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center ml-auto">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        tweet.sentiment === 'positive' 
                          ? 'bg-green-100 text-green-600' 
                          : tweet.sentiment === 'negative'
                          ? 'bg-red-100 text-red-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tweet.sentiment.charAt(0).toUpperCase() + tweet.sentiment.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h3 className="text-lg font-medium text-[#1E2A3B] mb-4">Content Topics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    {topicAnalysis.map((topic) => (
                      <div key={topic.topic}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-[#1E2A3B]">{topic.topic}</span>
                          <span className="text-[#71767B]">{topic.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-[#E1407A] h-2.5 rounded-full" 
                            style={{ width: `${topic.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-medium text-[#1E2A3B] mb-3">Content Analysis</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#1E2A3B]">
                          <strong>High engagement</strong> on technology and innovation topics
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#1E2A3B]">
                          <strong>Consistent messaging</strong> around Tesla and SpaceX
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#1E2A3B]">
                          <strong>Media-rich content</strong> performs 32% better than text-only
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#1E2A3B]">
                          <strong>Political content</strong> shows mixed sentiment responses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#1E2A3B]">
                          <strong>Meme content</strong> has highest virality but lowest conversion
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'engagement' && (
            <div>
              <h3 className="text-lg font-medium text-[#1E2A3B] mb-4">Engagement Metrics</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-medium text-[#1E2A3B] mb-4">Engagement by Time of Day</h4>
                  <div className="h-64 flex items-end space-x-2">
                    {[12, 28, 45, 65, 87, 72, 56, 39, 47, 60, 75, 52, 34, 28, 22, 18, 25, 38, 48, 62, 52, 40, 33, 20].map((value, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-[#E1407A] rounded-t-sm" style={{ height: `${value}%` }}></div>
                        <span className="text-[10px] text-[#71767B] mt-1">{index}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-2 text-sm text-[#71767B]">Hour (GMT)</div>
                </div>
                <div>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="font-medium text-[#1E2A3B] mb-3">Audience Demographics</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-[#71767B]">United States</span>
                          <span className="font-medium text-[#1E2A3B]">38%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#E1407A] h-2 rounded-full" style={{ width: '38%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-[#71767B]">India</span>
                          <span className="font-medium text-[#1E2A3B]">12%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#E1407A] h-2 rounded-full" style={{ width: '12%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-[#71767B]">UK</span>
                          <span className="font-medium text-[#1E2A3B]">9%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#E1407A] h-2 rounded-full" style={{ width: '9%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-[#71767B]">Japan</span>
                          <span className="font-medium text-[#1E2A3B]">7%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#E1407A] h-2 rounded-full" style={{ width: '7%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-[#71767B]">Other</span>
                          <span className="font-medium text-[#1E2A3B]">34%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#E1407A] h-2 rounded-full" style={{ width: '34%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-[#1E2A3B] mb-3">Device Usage</h4>
                    <div className="flex items-center justify-center space-x-8">
                      <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-[#E1407A]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-bold text-[#1E2A3B] mt-2">67%</span>
                        <span className="text-xs text-[#71767B]">Mobile</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-[#1E2A3B]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22L10.582 17H8.419L6.223 15H4a2 2 0 01-2-2V5zm5 4a2 2 0 100-4 2 2 0 000 4zm5 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-bold text-[#1E2A3B] mt-2">28%</span>
                        <span className="text-xs text-[#71767B]">Desktop</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-[#71767B]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-bold text-[#1E2A3B] mt-2">5%</span>
                        <span className="text-xs text-[#71767B]">Tablet</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
    </DashboardLayout>
  );
}
