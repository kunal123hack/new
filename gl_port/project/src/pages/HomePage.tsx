import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-slate-300 to-slate-200 dark:from-slate-800 dark:to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="mr-1">92%</span> Energy Efficient
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide mb-6 leading-tight">
                <span className="block">SOLAR</span>
                <span className="block">PANEL</span>
              </h1>
              <div className="flex">
                <Link 
                  to="/contact" 
                  className="flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <span className="mr-2">See more</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-wide mb-6 leading-tight text-right">
                <span className="block">PURE</span>
                <span className="block">SUN</span>
              </h2>
              <div className="flex justify-end items-center">
                <span className="text-white mr-2">Reviews</span>
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-amber-500 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star size={16} className="fill-current mr-1" />
                  <span>4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden transition-all hover:shadow-lg">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">IP68</h3>
                  <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold">M+</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Waterproof</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Resistance to precipitation</p>
                <div className="mt-4">
                  <img src="https://images.pexels.com/photos/9875363/pexels-photo-9875363.jpeg" alt="Solar panel waterproof feature" className="rounded-lg w-full h-48 object-cover" />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden text-white transition-all hover:shadow-lg">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium">Rated #1</div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                      <span className="text-xs">+8k</span>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold mb-2">
                  Great selection of 
                  <span className="text-amber-500"> solar panels</span> in 
                  <span className="block">SunSolar company</span>
                </h4>
                
                <div className="mt-8 flex items-center">
                  <div className="flex items-center">
                    <span className="text-gray-300">Trusted by 50,000+ people</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden transition-all hover:shadow-lg">
              <div className="p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Inverter for solar panels</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Portable unit with large storage capacity</p>
                  </div>
                  <ArrowRight className="text-gray-400" />
                </div>
                <div className="mt-4">
                  <img src="https://images.pexels.com/photos/6322159/pexels-photo-6322159.jpeg" alt="Solar inverter" className="rounded-lg w-full h-48 object-cover" />
                </div>
                <div className="mt-4">
                  <span className="text-blue-600 dark:text-blue-400">24solar.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to switch to clean energy?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of satisfied customers who are saving money and helping the environment with our solar solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link 
                to="/featured" 
                className="bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                See Featured Posts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;