// import React from 'react';
// import Button from '../UI/Button';

// interface ResponseDisplayProps {
//   response: string;
//   onPost: () => Promise<void>;
//   isPosting: boolean;
// }

// const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response, onPost, isPosting }) => {
//   if (!response) return null;

//   return (
//     <div className="mt-6 animate-fadeIn">
//       <h3 className="text-xl font-semibold mb-3 text-gray-800">Generated PR Post</h3>
//       <div className="relative">
//         <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4">
//           <p className="whitespace-pre-wrap text-gray-800">{response}</p>
//         </div>
//         <div className="absolute top-3 right-3 flex gap-2">
//           <button 
//             className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
//             onClick={() => navigator.clipboard.writeText(response)}
//             title="Copy to clipboard"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <Button
//           variant="secondary"
//           onClick={onPost}
//           disabled={!response}
//           isLoading={isPosting}
//         >
//           {isPosting ? 'Posting...' : 'Post to Facebook & Portfolio'}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ResponseDisplay;




import React, { useState } from 'react';
import Button from '../UI/Button';
import { Loader2 } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

interface ResponseDisplayProps {
  response: string;
  onPost: () => Promise<void>;
  isPosting: boolean;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response, onPost, isPosting }) => {
  const [showBounty, setShowBounty] = useState(false);
  const [bounty, setBounty] = useState('');
  const [isSendingBounty, setIsSendingBounty] = useState(false);

  const handleBountySubmit = async () => {
    if (!bounty) {
      toast.error("Please enter a bounty amount");
      return;
    }

    try {
      setIsSendingBounty(true);
      await axios.post('http://localhost:5000/send-bounty', {
        bounty,
        content: response
      });
      toast.success("Emails sent successfully to meme pages!");
      setShowBounty(false);
      setBounty('');
    } catch (error) {
      console.error(error);
      toast.error("Failed to send emails.");
    } finally {
      setIsSendingBounty(false);
    }
  };

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
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <Button
            variant="secondary"
            onClick={onPost}
            disabled={!response || isPosting}
            isLoading={isPosting}
          >
            {isPosting ? 'Posting...' : 'Post to Facebook & Portfolio'}
          </Button>
        </div>
        
        {!showBounty && (
          <div className="flex justify-end mt-2">
            <Button
              variant="primary"
              onClick={() => setShowBounty(true)}
              disabled={isPosting}
            >
              Send to Meme Pages
            </Button>
          </div>
        )}

        {showBounty && (
          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-2">
            <h4 className="text-lg font-semibold mb-3">Submit Bounty Offer</h4>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 outline-none"
              placeholder="Enter bounty amount (e.g. ₹500)"
              value={bounty}
              onChange={(e) => setBounty(e.target.value)}
            />
            <div className="flex gap-2 justify-end">
              <Button
                variant="primary"
                onClick={handleBountySubmit}
                isLoading={isSendingBounty}
                disabled={isSendingBounty || !bounty}
              >
                {isSendingBounty ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5" />
                    Sending...
                  </>
                ) : (
                  'Send to Meme Pages'
                )}
              </Button>
              <Button
                variant="secondary"
                onClick={() => setShowBounty(false)}
                disabled={isSendingBounty}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseDisplay;