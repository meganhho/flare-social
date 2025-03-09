import React, { useState } from 'react';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';

// Mock replies data generator
const generateMockReplies = (count: number, parentPost: any) => {
  const personas = [
    {
      id: 101,
      handle: '@BarackObama',
      name: 'Barack Obama',
      avatar: 'https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg',
    },
    {
      id: 102,
      handle: '@AndrewYang',
      name: 'Andrew Yang',
      avatar: 'https://pbs.twimg.com/profile_images/1659290254328467457/zLR5MAfN_400x400.jpg',
    },
    {
      id: 103,
      handle: '@business',
      name: 'Bloomberg',
      avatar: 'https://pbs.twimg.com/profile_images/991818020233404416/alrBF_dr_400x400.jpg',
    },
    {
      id: 104,
      handle: '@SenSanders',
      name: 'Bernie Sanders',
      avatar: 'https://pbs.twimg.com/profile_images/1489761807032541186/3Hv3xRZ1_400x400.jpg',
    },
  ];

  const replies = [];
  
  for (let i = 0; i < count; i++) {
    const randomPersona = personas[Math.floor(Math.random() * personas.length)];
    const timeDiff = Math.floor(Math.random() * 48); // Random time up to 48 hours ago
    const timestamp = new Date();
    timestamp.setHours(timestamp.getHours() - timeDiff);
    
    replies.push({
      id: Date.now() + i,
      content: generateRandomReply(parentPost, randomPersona),
      author: randomPersona,
      timestamp: timestamp.toISOString(),
      likes: Math.floor(Math.random() * 1000),
      retweets: Math.floor(Math.random() * 100),
      views: Math.floor(Math.random() * 5000),
    });
  }
  
  return replies;
};

// Function to generate a random reply based on the parent post
const generateRandomReply = (parentPost: any, persona: any) => {
  const replies = [
    `I strongly disagree with ${parentPost.author.name}'s take on this.`,
    `This is a fascinating perspective, ${parentPost.author.handle}. Have you considered...`,
    `As usual, ${parentPost.author.name} has a point, but I think we need to look deeper.`,
    `I'm not convinced by this argument at all.`,
    `Great thread! Looking forward to more insights on this topic.`,
    `This is spot on! Couldn't have said it better myself.`,
    `Let's be real here - this is a complex issue with no simple answers.`,
    `I've researched this extensively, and I think there's another angle to consider.`,
    `The data actually suggests something quite different.`,
    `This is why I follow ${parentPost.author.handle}. Always thought-provoking!`,
  ];
  
  return replies[Math.floor(Math.random() * replies.length)];
};

interface PostProps {
  post: any;
  isReply?: boolean;
}

const Post: React.FC<PostProps> = ({ post, isReply = false }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState<any[]>([]);

  const handleToggleReplies = () => {
    if (!showReplies && replies.length === 0) {
      // Generate random replies when first opened
      const newReplies = generateMockReplies(Math.floor(Math.random() * 3) + 2, post);
      setReplies(newReplies);
    }
    
    setShowReplies(!showReplies);
  };

  const formattedTime = formatDistanceToNow(new Date(post.timestamp), { addSuffix: true });

  return (
    <div className={`border-b border-gray-200 ${isReply ? 'pl-12 pt-4' : 'py-4'}`}>
      <div className="flex space-x-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image 
            src={post.author.avatar} 
            alt={post.author.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center">
            <span className="font-semibold">{post.author.name}</span>
            <span className="text-[#71767B] ml-2">{post.author.handle}</span>
            <span className="text-[#71767B] mx-1">·</span>
            <span className="text-[#71767B] text-sm">{formattedTime}</span>
          </div>
          
          <div className="mt-1 text-[15px]">
            {post.content}
          </div>
          
          {post.media && (
            <div className="mt-3 rounded-xl overflow-hidden">
              <Image 
                src={post.media} 
                alt="Post media"
                width={500}
                height={300}
                className="object-cover max-h-80 w-full"
              />
            </div>
          )}
          
          {!isReply && (
            <div className="flex items-center mt-3 text-[#71767B]">
              <button className="flex items-center mr-5 group hover:text-[#E1407A]" onClick={handleToggleReplies}>
                <svg className="w-5 h-5 mr-2 group-hover:text-[#E1407A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{showReplies ? 'Hide' : (post.comments || replies.length || '0')}</span>
              </button>
              
              <button className="flex items-center mr-5 group hover:text-green-500">
                <svg className="w-5 h-5 mr-2 group-hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span>{post.retweets || 0}</span>
              </button>
              
              <button className="flex items-center mr-5 group hover:text-red-500">
                <svg className="w-5 h-5 mr-2 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{post.likes || 0}</span>
              </button>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>{post.views || 0}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {showReplies && replies.length > 0 && (
        <div className="mt-2">
          {replies.map(reply => (
            <Post key={reply.id} post={reply} isReply={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Post; 