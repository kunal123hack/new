import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const FeaturedPage: React.FC = () => {
  const [posts, setPosts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5001/api/featured')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching featured posts:', err);
        // For demo purposes, add some sample data when the API fails
        setPosts([
          'Exciting new solar installation completed in California! 🌞',
          'Our team just finished a major commercial project in Texas 🏢',
          'New battery storage solution launched for residential customers! 🔋',
          'Meet our newest solar consultant - bringing 15 years of experience! 👋',
          'Case study: How we helped a local business save 75% on energy costs 📊'
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
          <span className="text-blue-600 dark:text-blue-400 mr-2">🎉</span> 
          Featured Solar Updates
        </h1>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">No featured posts available yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all hover:shadow-lg"
              >
                <p className="text-gray-800 dark:text-gray-200">{post}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedPage;