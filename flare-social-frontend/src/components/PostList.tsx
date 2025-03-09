import React from 'react';
import Post from './Post';

interface PostListProps {
  posts: any[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <p className="text-[#71767B] mb-2">No posts yet</p>
        <p className="text-sm text-[#71767B]">
          Select a Twitter persona and create your first post to see it here
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <h2 className="text-lg font-semibold p-4 border-b border-gray-200">Posts and Auto-Replies</h2>
      <div className="divide-y divide-gray-200">
        {posts.map(post => (
          <div key={post.id} className="p-4">
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList; 