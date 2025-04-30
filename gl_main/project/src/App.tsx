import React from 'react';
import { Toaster } from 'react-hot-toast';
import PRPostGenerator from './components/PRPostGenerator';
import { Film } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Toaster position="top-right" />
      
      <header className="py-6 px-4 border-b border-gray-100 bg-white shadow-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <Film className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">PR Post Generator</h1>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto max-w-6xl py-8 px-4">
        <PRPostGenerator />
      </main>
      
      <footer className="py-6 px-4 border-t border-gray-100 bg-white mt-auto">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PR Post Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;