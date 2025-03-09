import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface PostCreatorProps {
  persona: any;
  onPostCreated: (post: any) => void;
}

const PostCreator: React.FC<PostCreatorProps> = ({ persona, onPostCreated }) => {
  const [postContent, setPostContent] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // For demo purposes, we're just simulating an upload
    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      // In a real app, you would upload to a server and get a URL back
      // Here we're just creating a local object URL for demo purposes
      const objectUrl = URL.createObjectURL(file);
      setSelectedMedia(objectUrl);
      setIsUploading(false);
    }, 1500);
  };

  const handleSubmit = () => {
    if (!postContent.trim() && !selectedMedia) return;

    // Create a new post with the content
    const newPost = {
      id: Date.now(),
      content: postContent,
      media: selectedMedia,
      author: persona,
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: 0,
      retweets: 0,
      views: Math.floor(Math.random() * 10000),
      replies: [] // This will be filled with auto-generated replies
    };

    // Call the onPostCreated callback with the new post
    onPostCreated(newPost);

    // Reset the form
    setPostContent('');
    setSelectedMedia(null);
  };

  if (!persona) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <p className="text-center text-[#71767B]">Select a Twitter persona to create a post</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
      <div className="flex space-x-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image 
            src={persona.avatar} 
            alt={persona.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center mb-2">
            <span className="font-medium text-[#1E2A3B]">{persona.name}</span>
            <span className="text-[#71767B] ml-2">{persona.handle}</span>
          </div>
          
          <textarea
            className="w-full border-0 focus:ring-0 text-lg resize-none min-h-20 placeholder-gray-400"
            placeholder="I want to make a post about..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            rows={3}
          />
          
          {selectedMedia && (
            <div className="relative mt-3 rounded-xl overflow-hidden">
              <Image 
                src={selectedMedia} 
                alt="Uploaded media"
                width={500}
                height={300}
                className="object-cover max-h-80 w-full"
              />
              <button 
                className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-white p-1 rounded-full"
                onClick={() => setSelectedMedia(null)}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
            <div className="flex space-x-4">
              <button 
                className="text-[#E1407A] hover:bg-pink-50 p-2 rounded-full transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <input 
                  type="file" 
                  hidden 
                  ref={fileInputRef} 
                  onChange={handleMediaUpload}
                  accept="image/*"
                />
              </button>
              <button className="text-[#E1407A] hover:bg-pink-50 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            
            <button 
              className={`btn-primary ${(!postContent.trim() && !selectedMedia) ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleSubmit}
              disabled={!postContent.trim() && !selectedMedia}
            >
              {isUploading ? 'Uploading...' : 'Post'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreator; 