import React from 'react';
import Button from '../UI/Button';

interface ResponseDisplayProps {
  response: string;
  onPost: () => Promise<void>;
  isPosting: boolean;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response, onPost, isPosting }) => {
  if (!response) return null;

  return (
    <div className="mt-6 animate-fadeIn">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Generated PR Post</h3>
      <div className="relative">
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4">
          <p className="whitespace-pre-wrap text-gray-800">{response}</p>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <button 
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            onClick={() => navigator.clipboard.writeText(response)}
            title="Copy to clipboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          variant="secondary"
          onClick={onPost}
          disabled={!response}
          isLoading={isPosting}
        >
          {isPosting ? 'Posting...' : 'Post to Facebook & Portfolio'}
        </Button>
      </div>
    </div>
  );
};

export default ResponseDisplay;