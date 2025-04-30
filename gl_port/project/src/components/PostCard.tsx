import React, { useState } from 'react';
import { MessageSquare, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const isLongResponse = post.response.length > 200;
  const displayResponse = expanded || !isLongResponse 
    ? post.response 
    : `${post.response.substring(0, 200)}...`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare size={16} className="mr-1" />
            <span>Post #{post.id}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-start">
            <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">Q:</span>
            {post.prompt}
          </h3>
        </div>
        
        <div className="mb-2">
          <div className="text-gray-700 dark:text-gray-300 flex items-start">
            <span className="text-green-600 dark:text-green-400 font-bold mr-2">A:</span>
            <p>{displayResponse}</p>
          </div>
        </div>
        
        {isLongResponse && (
          <button 
            onClick={toggleExpand}
            className="mt-2 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            {expanded ? (
              <>
                <span className="mr-1">Show less</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span className="mr-1">Read more</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default PostCard;