import React from 'react';
import { Sun, Award, Users, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">About 24SOLAR</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              We're on a mission to accelerate the world's transition to sustainable energy through innovative solar solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Founded in 2018, 24SOLAR began with a simple vision: to make clean energy accessible to everyone. What started as a small team of passionate engineers has grown into a leading provider of solar energy solutions across the country.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  We believe in a future where renewable energy powers our homes, businesses, and communities. Every day, we work to make that future a reality through innovative technology, exceptional service, and unwavering commitment to sustainability.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg" 
                  alt="Solar panels on modern house" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Values</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard 
                icon={<Sun className="h-8 w-8 text-amber-500" />}
                title="Innovation"
                description="We constantly push the boundaries of what's possible in solar technology."
              />
              <ValueCard 
                icon={<Users className="h-8 w-8 text-blue-500" />}
                title="Community"
                description="We believe in building a better future together with the communities we serve."
              />
              <ValueCard 
                icon={<Shield className="h-8 w-8 text-green-500" />}
                title="Sustainability"
                description="We're committed to environmental stewardship in everything we do."
              />
              <ValueCard 
                icon={<Award className="h-8 w-8 text-purple-500" />}
                title="Excellence"
                description="We strive for excellence in our products, our service, and our impact."
              />
              <ValueCard 
                icon={<Users className="h-8 w-8 text-red-500" />}
                title="Customer First"
                description="Our customers are at the heart of every decision we make."
              />
              <ValueCard 
                icon={<Shield className="h-8 w-8 text-teal-500" />}
                title="Integrity"
                description="We operate with transparency, honesty, and accountability."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Team</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Meet the experts behind 24SOLAR
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <TeamMember
                name="Alex Chen"
                title="Founder & CEO"
                image="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <TeamMember
                name="Sarah Johnson"
                title="Chief Technology Officer"
                image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <TeamMember
                name="Michael Wong"
                title="Head of Installation"
                image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, image }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-64">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export default AboutPage;