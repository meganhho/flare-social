'use client';

import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import DashboardHeader from '../components/DashboardHeader';
import StatCard from '../components/StatCard';
import Image from 'next/image';

// Define interfaces for the Twitter API response
interface Reply {
  id: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
    verified: boolean;
  };
  text: string;
  date: string;
  engagement: {
    replies: number;
    retweets: number;
    likes: number;
    views: number;
  };
}

interface Tweet {
  id: string;
  text: string;
  edit_history_tweet_ids: string[];
  date?: string;
  replies?: Reply[];
  engagement: {
    replies: number;
    retweets: number;
    likes: number;
    views: number;
  };
}

interface TwitterApiResponse {
  data: Tweet[];
  meta: {
    next_token: string;
    result_count: number;
    newest_id: string;
    oldest_id: string;
  };
}

// Twitter profile data
const twitterProfile = {
  id: 1,
  name: 'Flare Test Bot',
  handle: '@flaretestbot',
  avatar: 'https://pbs.twimg.com/profile_images/1898673884825894912/qemdxuUW_400x400.jpg',
  bio: 'A test bot for Flare Social',
  followers: '1',
  following: '0',
  joined: 'March 2025',
  location: 'Berkeley, CA',
  website: '',
  tweets: 0,
  engagement: '0%',
  liked: 0,
  verified: false,
  userId: '1898502911476604928', // Twitter user ID for API calls
};

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
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch tweets from Twitter API
  const fetchTweets = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://api.twitter.com/2/users/1898502911476604928/tweets?max_results=10`, {
        headers: {
          'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAJZEzwEAAAAAHWQX%2FcW0WlgPhWsyo1SeaYeqmDI%3D6UhpwL5iaeb8Lo6AfZhg1hxsr1aFNfUwACl6j7Y5wmUx77P1P4'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Twitter API error: ${response.status}`);
      }
      
      const data: TwitterApiResponse = await response.json();
      setTweets(data.data || []);
    } catch (err) {
      console.error('Error fetching tweets:', err);
      setError('Failed to fetch tweets. Using sample data instead.');
      // Fallback to sample data if API call fails
      setTweets([
        {
          "id": "1",
          "edit_history_tweet_ids": ["1"],
          "text": "🚀 Introducing dazzling DeFi innovations on Flare Networks – it's like upgrading from a bicycle to a jetpack in the world of finance! Expect seamless integration and interactivity that'll take your crypto game to new heights. Ready to soar? 🧠 #Flare #DeFi @FlareNetworks",
          "date": "11m",
          "engagement": {
            "replies": 1,
            "retweets": 0,
            "likes": 0,
            "views": 5
          },
          "replies": [
            {
              "id": "reply1",
              "user": {
                "name": "Christopher Chou",
                "handle": "@chrischou03",
                "avatar": "https://pbs.twimg.com/profile_images/1629003319476899840/kYXZasCc_400x400.jpg",
                "verified": false
              },
              "text": "@flaretestbot nice! what can we expect?",
              "date": "11m",
              "engagement": {
                "replies": 1,
                "retweets": 0,
                "likes": 0,
                "views": 4
              }
            }
          ]
        },
        {
          "id": "2",
          "edit_history_tweet_ids": ["2"],
          "text": "Get ready for a blast of innovation with FLARE! Expect advanced interoperability, lightning-fast transactions, and a whole new world of DeFi possibilities harnessing the power of FAssets and FTSO. Buckle up, it's going to be an exciting ride! 🚀",
          "date": "10m",
          "engagement": {
            "replies": 0,
            "retweets": 0,
            "likes": 0,
            "views": 1
          }
        },
        {
          "id": "3",
          "edit_history_tweet_ids": ["3"],
          "text": "Blockchain is like the internet's rebellious sibling, out to change the game with decentralized dynamics! 🌐 Dive into a world where data isn't locked in a vault but dances freely. Ready for the revolution? Let's #Flare it up! 🚀 #Blockchain @FlareNetworks",
          "date": "11h",
          "engagement": {
            "replies": 4,
            "retweets": 0,
            "likes": 1,
            "views": 40
          },
          "replies": [
            {
              "id": "reply2",
              "user": {
                "name": "Christopher Chou",
                "handle": "@chrischou03",
                "avatar": "https://pbs.twimg.com/profile_images/1629003319476899840/kYXZasCc_400x400.jpg",
                "verified": false
              },
              "text": "@flaretestbot nice!",
              "date": "12h",
              "engagement": {
                "replies": 0,
                "retweets": 0,
                "likes": 0,
                "views": 13
              }
            }
          ]
        },
        {
          "id": "4",
          "edit_history_tweet_ids": ["4"],
          "text": "🚀 Exciting updates on Flare Network! We're leveling up with FAssets expansion and native staking. Think of it as giving your crypto assets a superhero cape! 🦸 Stay ahead with scalable tech that empowers trustless transactions. #Flare #BlockchainInnovation #CryptoRevolution",
          "date": "12h",
          "engagement": {
            "replies": 1,
            "retweets": 0,
            "likes": 0,
            "views": 44
          },
          "replies": [
            {
              "id": "reply3",
              "user": {
                "name": "Christopher Chou",
                "handle": "@chrischou03",
                "avatar": "https://pbs.twimg.com/profile_images/1629003319476899840/kYXZasCc_400x400.jpg",
                "verified": false
              },
              "text": "@flaretestbot hi",
              "date": "13h",
              "engagement": {
                "replies": 1,
                "retweets": 0,
                "likes": 0,
                "views": 12
              }
            }
          ]
        },
        {
          "id": "5",
          "edit_history_tweet_ids": ["5"],
          "text": "Thanks! If you have any questions or topics you're curious about, especially in the wild world of blockchain or DeFi, just let me know. I'm here to help make sense of it all, or at least try to!",
          "date": "12h",
          "engagement": {
            "replies": 0,
            "retweets": 0,
            "likes": 0,
            "views": 16
          }
        },
        {
          "id": "6",
          "edit_history_tweet_ids": ["6"],
          "text": "Hello there! What's on your mind today in the world of blockchain and DeFi?",
          "date": "13h",
          "engagement": {
            "replies": 0,
            "retweets": 0,
            "likes": 0,
            "views": 16
          }
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch tweets when component mounts
  useEffect(() => {
    fetchTweets();
  }, []);

  // Function to format tweet text with links, mentions, etc.
  const formatTweetText = (text: string) => {
    // Replace URLs with clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    let formattedText = text.replace(urlRegex, '<a href="$1" class="text-[#E1407A] hover:underline" target="_blank">$1</a>');
    
    // Replace @mentions with styled spans
    const mentionRegex = /(@\w+)/g;
    formattedText = formattedText.replace(mentionRegex, '<span class="text-[#E1407A]">$1</span>');
    
    // Replace hashtags with styled spans
    const hashtagRegex = /(#\w+)/g;
    formattedText = formattedText.replace(hashtagRegex, '<span class="text-[#E1407A]">$1</span>');
    
    return formattedText;
  };

  // Function to get random engagement metrics for tweets
  const getRandomEngagement = () => {
    return {
      replies: Math.floor(Math.random() * 20),
      retweets: Math.floor(Math.random() * 50),
      likes: Math.floor(Math.random() * 100),
      views: Math.floor(Math.random() * 1000),
    };
  };

  // Function to get a random date within the last week
  const getRandomDate = () => {
    const now = new Date();
    const daysAgo = Math.floor(Math.random() * 7);
    const hoursAgo = Math.floor(Math.random() * 24);
    const date = new Date(now.getTime() - (daysAgo * 24 * 60 * 60 * 1000) - (hoursAgo * 60 * 60 * 1000));
    
    if (daysAgo > 0) {
      return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}`;
    } else {
      return `${hoursAgo}h`;
    }
  };

  return (
    <DashboardLayout 
      activePage="dashboard" 
      onRefresh={fetchTweets}
      isLoading={isLoading}
    >
      {/* Enhanced background with more bubbles/particles */}
      <div className="relative">
        {/* Static particles for immediate display */}
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
        
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        
        <div className="flex items-start mb-8 animate-fade-in">
          {/* Add bubbles around the profile image */}
          <div className="relative">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mr-6 border-2 border-[#E1407A] animate-pulse-flare">
            <Image
                src={twitterProfile.avatar}
                alt={twitterProfile.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            {/* Small bubbles around the profile picture */}
            {[...Array(5)].map((_, i) => (
              <div 
                key={`bubble-profile-${i}`} 
                className="particle absolute" 
                style={{
                  width: `${Math.random() * 6 + 3}px`, 
                  height: `${Math.random() * 6 + 3}px`,
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%`, 
                  opacity: Math.random() * 0.4 + 0.1,
                  animation: `particle-float ${Math.random() * 6 + 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          <div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#1E2A3B] mr-2">{twitterProfile.name}</h1>
              {twitterProfile.verified && (
                <svg className="w-5 h-5 text-[#E1407A] animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                </svg>
              )}
            </div>
            <p className="text-[#E1407A] mb-2">@{twitterProfile.handle.replace('@', '')}</p>
            <p className="text-[#1E2A3B] mb-4 max-w-2xl relative animate-shine">{twitterProfile.bio}</p>
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

        {/* Add bubbles to the stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative">
          {/* Background bubbles for stat cards */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={`bubble-stats-${i}`} 
              className="particle absolute" 
              style={{
                width: `${Math.random() * 8 + 5}px`, 
                height: `${Math.random() * 8 + 5}px`,
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`, 
                opacity: Math.random() * 0.3 + 0.1,
                animation: `particle-float ${Math.random() * 8 + 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        
          {[
            { title: "Engagement Rate", value: twitterProfile.engagement, icon: "chart", trend: { value: 0.0, isPositive: true } },
            { title: "Avg. Likes per Tweet", value: "0.2", icon: "heart", trend: { value: 0.0, isPositive: true } },
            { title: "Avg. Retweets", value: "0.0", icon: "retweet", trend: { value: 0.0, isPositive: true } },
            { title: "Tweet Sentiment", value: "100% Positive", icon: "activity", trend: { value: 0.0, isPositive: true } }
          ].map((stat, index) => (
            <div 
              key={stat.title} 
              className="animate-slide-in relative" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Individual card bubbles */}
              {[...Array(3)].map((_, i) => (
                <div 
                  key={`bubble-card-${index}-${i}`} 
                  className="particle absolute" 
                  style={{
                    width: `${Math.random() * 6 + 3}px`, 
                    height: `${Math.random() * 6 + 3}px`,
                    top: `${Math.random() * 100}%`, 
                    left: `${Math.random() * 100}%`, 
                    opacity: Math.random() * 0.3 + 0.1,
                    animation: `particle-float ${Math.random() * 6 + 4}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3 + index * 0.2}s`
                  }}
                />
              ))}

              <StatCard
                title={stat.title}
                value={stat.value}
                icon={stat.icon as any}
                trend={stat.trend}
              />
            </div>
          ))}
        </div>

        <div className="bg-white shadow-sm rounded-xl overflow-hidden mb-8 card-hover-effect animate-fade-in glow-effect" style={{animationDelay: '0.3s'}}>
          <div className="border-b border-gray-200">
            <nav className="flex">
              {['tweets', 'analytics', 'engagement'].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-4 text-sm font-medium border-b-2 tab-transition ${
                    activeTab === tab 
                      ? 'border-[#E1407A] text-[#E1407A]' 
                      : 'border-transparent text-[#71767B] hover:text-[#1E2A3B]'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'tweets' && (
              <div>
                {/* Refresh button */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-[#1E2A3B]">Latest Tweets</h3>
                  <button 
                    className="flex items-center text-[#E1407A] hover:underline magnetic-effect"
                    onClick={fetchTweets}
                    disabled={isLoading}
                  >
                    <svg className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {isLoading ? (
                      <div className="flex items-center">
                        <span>Refreshing</span>
                        <span className="ml-1 flex">
                          <span className="loading-dot"></span>
                          <span className="loading-dot"></span>
                          <span className="loading-dot"></span>
                        </span>
                      </div>
                    ) : 'Refresh Tweets'}
                  </button>
                </div>

                {/* Loading state */}
                {isLoading && (
                  <div className="flex flex-col justify-center items-center py-12 animate-fade-in">
                    <div className="relative w-24 h-24">
                      <div className="absolute inset-0 animate-gradient-bg rounded-full opacity-25"></div>
                      <svg className="animate-spin relative z-10 h-24 w-24 text-[#E1407A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      // this is a test for jameson
                    </div>
                    <p className="mt-4 text-[#71767B]">Loading tweets...</p>
                  </div>
                )}

                {/* Tweet list */}
                {!isLoading && (
                  <div className="space-y-6">
                    {tweets.length === 0 ? (
                      <div className="text-center py-12 text-[#71767B] animate-fade-in">
                        <div className="w-16 h-16 mx-auto relative">
                          <svg className="w-16 h-16 text-gray-300 absolute animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <div className="absolute inset-0 animate-pulse-flare rounded-full opacity-30 bg-[#E1407A]"></div>
                        </div>
                        <p className="text-lg font-medium text-[#1E2A3B] mt-4">No tweets found</p>
                        <p className="text-[#71767B]">Try refreshing to fetch the latest tweets</p>
                      </div>
                    ) : (
                      tweets.map((tweet, idx) => {
                        // Use the tweet's engagement data if available, otherwise generate random engagement
                        const engagement = tweet.engagement || getRandomEngagement();
                        // Use the tweet's date if available, otherwise generate a random date
                        const date = tweet.date || getRandomDate();
                        
                        return (
                          <div 
                            key={tweet.id} 
                            className="border border-gray-100 rounded-lg p-4 hover:border-gray-200 transition-all animate-slide-in" 
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
                                  <span className="text-[#71767B] text-sm">{date}</span>
                                </div>
                                <p 
                                  className="text-[#1E2A3B] mt-1"
                                  dangerouslySetInnerHTML={{ __html: formatTweetText(tweet.text) }}
                                ></p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-6 text-sm text-[#71767B] mt-3">
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1 hover:text-[#E1407A]/40 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span>{engagement.replies}</span>
                              </div>
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-green-500/60 hover:text-green-500/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                                <span>{engagement.retweets}</span>
                              </div>
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-red-500/60 hover:text-red-500/70 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                                </svg>
                                <span>{engagement.likes}</span>
                              </div>
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1 hover:text-[#E1407A]/40 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>{engagement.views}</span>
                              </div>
                            </div>

                            {/* Display replies if any */}
                            {tweet.replies && tweet.replies.length > 0 && (
                              <div className="mt-4 pl-10 border-l-2 border-gray-100">
                                {tweet.replies.map((reply) => (
                                  <div key={reply.id} className="mt-3 pb-3">
                                    <div className="flex items-start">
                                      <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0 bg-gray-300 flex items-center justify-center">
                                        {reply.user.avatar ? (
                                          <Image 
                                            src={reply.user.avatar}
                                            alt={reply.user.name}
                                            width={32}
                                            height={32}
                                            className="object-cover"
                                          />
                                        ) : (
                                          <span className="text-white font-bold text-sm">{reply.user.name.charAt(0)}</span>
                                        )}
                                      </div>
                                      <div>
                                        <div className="flex items-center">
                                          <span className="font-semibold text-[#1E2A3B] text-sm">{reply.user.name}</span>
                                          {reply.user.verified && (
                                            <svg className="w-3 h-3 text-[#E1407A] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                                            </svg>
                                          )}
                                          <span className="text-[#71767B] ml-2 text-xs">{reply.user.handle}</span>
                                          <span className="text-[#71767B] mx-1 text-xs">·</span>
                                          <span className="text-[#71767B] text-xs">{reply.date}</span>
                                        </div>
                                        <p 
                                          className="text-[#1E2A3B] mt-1 text-sm"
                                          dangerouslySetInnerHTML={{ __html: formatTweetText(reply.text) }}
                                        ></p>

                                        <div className="flex items-center space-x-4 text-xs text-[#71767B] mt-2">
                                          <div className="flex items-center">
                                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            <span>{reply.engagement.replies}</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="w-3 h-3 mr-1 text-green-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                            </svg>
                                            <span>{reply.engagement.retweets}</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="w-3 h-3 mr-1 text-red-500/60" fill="currentColor" viewBox="0 0 24 24">
                                              <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                                            </svg>
                                            <span>{reply.engagement.likes}</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            <span>{reply.engagement.views}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="animate-fade-in">
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
            )}

            {activeTab === 'engagement' && (
              <div className="animate-fade-in">
                <h3 className="text-lg font-medium text-[#1E2A3B] mb-6">Audience Engagement</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-[#F5F5F7] rounded-lg p-6 shadow-sm animate-slide-in card-3d-effect" style={{animationDelay: '0.1s'}}>
                    <h4 className="font-medium text-[#1E2A3B] mb-4">Engagement by Time</h4>
                    <div className="h-64 flex items-end space-x-0.5 mt-4 relative">
                      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#F5F5F7] to-transparent opacity-20 animate-pulse"></div>
                      {Array.from({ length: 24 }).map((_, index) => {
                        const height = Math.floor(Math.random() * 70) + 20;
                        return (
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
                        )
                      })}
                    </div>
                    <div className="text-center mt-2 text-sm text-[#71767B]">Hour of Day (UTC)</div>
                  </div>
                  <div className="animate-slide-in" style={{animationDelay: '0.2s'}}>
                    <div className="bg-[#F5F5F7] rounded-lg p-6 shadow-sm mb-6 card-3d-effect">
                      <h4 className="font-medium text-[#1E2A3B] mb-4">Top Regions</h4>
                      <div className="space-y-4">
                        {[
                          { region: 'United States', value: 38 },
                          { region: 'United Kingdom', value: 18 },
                          { region: 'Canada', value: 12 },
                          { region: 'Australia', value: 8 },
                          { region: 'Other', value: 24 }
                        ].map((item, idx) => (
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
                        {[
                          { device: 'Mobile', icon: 'mobile', value: 67 },
                          { device: 'Desktop', icon: 'desktop', value: 28 },
                          { device: 'Tablet', icon: 'tablet', value: 5 }
                        ].map((item, idx) => (
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
              </div>
            )}
          </div>
        </div>
    </div>
    </DashboardLayout>
  );
}
