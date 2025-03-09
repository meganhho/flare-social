'use client';

import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Image from 'next/image';

// Twitter profile data
const twitterProfile = {
  id: 1,
  name: 'Flare Test Bot',
  handle: '@flaretestbot',
  avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
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

// Mock scheduled tweets
const scheduledTweets = [
  {
    id: '1',
    text: 'Exciting news coming next week about our Layer 1 EVM integration! Stay tuned for major #FlareNetwork developments. #Blockchain',
    scheduledFor: 'Jun 10, 2023, 12:00 PM',
    status: 'scheduled',
    image: null
  },
  {
    id: '2',
    text: 'Learn about Flare\'s State Connector in our latest technical blog post. Dive into the details of how we\'re revolutionizing cross-chain communication.',
    scheduledFor: 'Jun 12, 2023, 3:30 PM',
    status: 'scheduled',
    image: '/placeholder-image.jpg'
  },
  {
    id: '3',
    text: 'Join us for a live AMA with our CTO next Friday! We\'ll be discussing the future of #FlareNetwork and answering all your technical questions.',
    scheduledFor: 'Jun 15, 2023, 5:00 PM',
    status: 'scheduled',
    image: null
  }
];

// Best times to post
const bestTimeSlots = [
  { day: 'Monday', times: ['10:00 AM', '3:00 PM', '8:00 PM'] },
  { day: 'Tuesday', times: ['9:00 AM', '1:00 PM', '7:00 PM'] },
  { day: 'Wednesday', times: ['11:00 AM', '2:00 PM', '6:00 PM'] },
  { day: 'Thursday', times: ['9:30 AM', '12:00 PM', '5:00 PM'] },
  { day: 'Friday', times: ['10:00 AM', '4:00 PM', '9:00 PM'] },
  { day: 'Saturday', times: ['11:00 AM', '5:00 PM', '8:00 PM'] },
  { day: 'Sunday', times: ['12:00 PM', '6:00 PM', '9:00 PM'] },
];

export default function Scheduler() {
  const [newTweet, setNewTweet] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [activeTab, setActiveTab] = useState('compose');

  const handleScheduleTweet = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the tweet to the schedule
    alert('Tweet scheduled successfully!');
    setNewTweet('');
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <DashboardLayout activePage="scheduler">
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
              <h1 className="text-2xl font-bold text-[#1E2A3B] mr-2">{twitterProfile.name} Scheduler</h1>
              {twitterProfile.verified && (
                <svg className="w-5 h-5 text-[#E1407A] animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                </svg>
              )}
            </div>
            <p className="text-[#E1407A] mb-2">@{twitterProfile.handle.replace('@', '')}</p>
            <p className="text-[#1E2A3B] mb-4 max-w-2xl relative animate-shine">Schedule and plan your tweets for optimal engagement</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white shadow-sm rounded-xl overflow-hidden mb-8 card-hover-effect animate-fade-in">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {['compose', 'scheduled', 'optimal-times'].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-4 text-sm font-medium border-b-2 tab-transition ${
                    activeTab === tab 
                      ? 'border-[#E1407A] text-[#E1407A]' 
                      : 'border-transparent text-[#71767B] hover:text-[#1E2A3B]'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'compose' && 'Compose Tweet'}
                  {tab === 'scheduled' && 'Scheduled Tweets'}
                  {tab === 'optimal-times' && 'Optimal Times'}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'compose' && (
              <div className="animate-fade-in">
                <h3 className="text-lg font-medium text-[#1E2A3B] mb-6">Compose New Tweet</h3>
                
                <form onSubmit={handleScheduleTweet}>
                  <div className="mb-6">
                    <label htmlFor="tweet-content" className="block text-sm font-medium text-[#1E2A3B] mb-2">
                      Tweet Content
                    </label>
                    <textarea
                      id="tweet-content"
                      rows={4}
                      className="input-field"
                      placeholder="What's happening?"
                      value={newTweet}
                      onChange={(e) => setNewTweet(e.target.value)}
                      maxLength={280}
                    ></textarea>
                    <div className="flex justify-end mt-2 text-sm text-[#71767B]">
                      {newTweet.length}/280 characters
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="schedule-date" className="block text-sm font-medium text-[#1E2A3B] mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        id="schedule-date"
                        className="input-field"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="schedule-time" className="block text-sm font-medium text-[#1E2A3B] mb-2">
                        Time
                      </label>
                      <input
                        type="time"
                        id="schedule-time"
                        className="input-field"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="media-upload" className="block text-sm font-medium text-[#1E2A3B] mb-2">
                      Media (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#E1407A] transition-colors">
                      <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-[#71767B]">Click to upload an image</p>
                      <input id="media-upload" type="file" className="hidden" />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#E1407A] mr-2 animate-pulse-flare" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-[#71767B]">Tweets are automatically optimized for best engagement times</span>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary flex items-center"
                      disabled={!newTweet || !selectedDate || !selectedTime}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule Tweet
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'scheduled' && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-[#1E2A3B]">Scheduled Tweets</h3>
                  <div className="text-sm text-[#71767B]">{scheduledTweets.length} tweets scheduled</div>
                </div>
                
                {scheduledTweets.length === 0 ? (
                  <div className="text-center py-12 text-[#71767B] animate-fade-in">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-lg font-medium text-[#1E2A3B]">No tweets scheduled</p>
                    <p className="text-[#71767B]">Go to the Compose tab to schedule your first tweet</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {scheduledTweets.map((tweet, idx) => (
                      <div 
                        key={tweet.id} 
                        className="border border-gray-100 rounded-lg p-4 hover:border-gray-200 transition-all animate-slide-in bg-white card-3d-effect relative" 
                        style={{animationDelay: `${0.1 * idx}s`}}
                      >
                        <div className="absolute top-4 right-4 bg-[#F5F5F7] px-2 py-1 rounded-full text-xs text-[#1E2A3B]">
                          {tweet.scheduledFor}
                        </div>
                        
                        <div className="flex items-start mb-3 pr-24">
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
                            </div>
                            <p className="text-[#1E2A3B] mt-1">{tweet.text}</p>
                            
                            {tweet.image && (
                              <div className="mt-3 rounded-lg overflow-hidden border border-gray-200">
                                <Image 
                                  src={tweet.image} 
                                  alt="Tweet media" 
                                  width={300} 
                                  height={200} 
                                  className="w-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-3 mt-4">
                          <button className="text-[#71767B] hover:text-[#1E2A3B] transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                          <button className="text-[#71767B] hover:text-red-500 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'optimal-times' && (
              <div className="animate-fade-in">
                <h3 className="text-lg font-medium text-[#1E2A3B] mb-6">Optimal Posting Times</h3>
                <div className="bg-[#F5F5F7] rounded-lg p-6 shadow-sm card-3d-effect">
                  <p className="text-[#71767B] mb-4">
                    Based on your audience's activity patterns, these are the best times to post for maximum engagement:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                    {bestTimeSlots.map((day, idx) => (
                      <div 
                        key={day.day} 
                        className="bg-white rounded-lg p-4 shadow-sm animate-slide-in" 
                        style={{animationDelay: `${0.1 * idx}s`}}
                      >
                        <div className="font-medium text-[#1E2A3B] mb-2">{day.day}</div>
                        <div className="space-y-2">
                          {day.times.map((time, timeIdx) => (
                            <div 
                              key={`${day.day}-${time}`} 
                              className="bg-[#F5F5F7] px-3 py-2 rounded text-sm text-[#1E2A3B] flex items-center animate-pulse-flare"
                              style={{animationDelay: `${0.1 * timeIdx}s`}}
                            >
                              <svg className="w-4 h-4 text-[#E1407A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {time}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-white p-4 rounded-lg">
                    <div className="font-medium text-[#1E2A3B] mb-2">Best Days to Post</div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="h-4 bg-[#E1407A] rounded-sm" style={{ width: '80%' }}></div>
                      <span className="text-sm text-[#71767B]">Wednesday</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="h-4 bg-[#E1407A] rounded-sm" style={{ width: '75%' }}></div>
                      <span className="text-sm text-[#71767B]">Thursday</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 bg-[#E1407A] rounded-sm" style={{ width: '70%' }}></div>
                      <span className="text-sm text-[#71767B]">Tuesday</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-[#F5F5F7] rounded-lg p-6 shadow-sm animate-slide-in card-3d-effect">
                  <h4 className="font-medium text-[#1E2A3B] mb-4">Scheduling Tips</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-[#E1407A] p-2 rounded-full text-white mr-3 flex-shrink-0 animate-pulse-flare">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#1E2A3B]">Consistency is Key</p>
                        <p className="text-sm text-[#71767B]">Posting regularly at optimal times helps build audience expectation and engagement.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#E1407A] p-2 rounded-full text-white mr-3 flex-shrink-0 animate-pulse-flare">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#1E2A3B]">Quality Over Quantity</p>
                        <p className="text-sm text-[#71767B]">It's better to post 3-5 high-quality tweets per week than 20 low-effort ones.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#E1407A] p-2 rounded-full text-white mr-3 flex-shrink-0 animate-pulse-flare">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#1E2A3B]">Follow Up on Engagement</p>
                        <p className="text-sm text-[#71767B]">Schedule time to respond to replies on your posts to boost overall engagement.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 