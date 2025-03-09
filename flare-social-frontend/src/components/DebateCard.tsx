import React from 'react';
import Image from 'next/image';

interface DebateCardProps {
  title: string;
  participants: {
    name: string;
    avatar: string;
  }[];
  topic: string;
  date: string;
  status: 'active' | 'completed' | 'scheduled';
  replies: number;
}

const DebateCard: React.FC<DebateCardProps> = ({
  title,
  participants,
  topic,
  date,
  status,
  replies,
}) => {
  const statusColors = {
    active: 'text-green-500 bg-green-100',
    completed: 'text-gray-500 bg-gray-100',
    scheduled: 'text-blue-500 bg-blue-100',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="px-6 pt-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-[#1E2A3B] line-clamp-1">{title}</h3>
          <span className={`px-2 py-1 text-xs rounded-full font-medium ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        
        <p className="text-sm text-[#71767B] mb-4 line-clamp-2">{topic}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex -space-x-2">
            {participants.map((participant, index) => (
              <div 
                key={index} 
                className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                style={{ zIndex: participants.length - index }}
              >
                <Image
                  src={participant.avatar}
                  alt={participant.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            ))}
            
            {participants.length > 3 && (
              <div className="relative w-8 h-8 rounded-full bg-[#E1407A] border-2 border-white flex items-center justify-center text-white text-xs font-medium" style={{ zIndex: 0 }}>
                +{participants.length - 3}
              </div>
            )}
          </div>
          
          <div className="flex items-center text-[#71767B] text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {replies} replies
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 flex items-center justify-between">
        <span className="text-xs text-[#71767B]">{date}</span>
        <button className="text-xs font-medium text-[#E1407A] hover:underline">
          View Debate →
        </button>
      </div>
    </div>
  );
};

export default DebateCard; 