import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'residential',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'residential',
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Have questions about solar energy? Want to get a quote? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
                
                <div className="space-y-6">
                  <ContactInfo 
                    icon={<MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
                    title="Visit Us"
                    details={["123 Solar Way", "Sunshine City, SC 12345"]}
                  />
                  
                  <ContactInfo 
                    icon={<Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
                    title="Call Us"
                    details={["(555) 123-4567", "Monday-Friday, 9am-5pm"]}
                  />
                  
                  <ContactInfo 
                    icon={<Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
                    title="Email Us"
                    details={["info@24solar.com", "support@24solar.com"]}
                  />
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Our Location</h3>
                  <div className="rounded-xl overflow-hidden h-64 bg-gray-200 dark:bg-gray-700">
                    {/* This would be a map in a real application */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                      <MapPin className="h-10 w-10 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
                
                {formStatus && (
                  <div className={`p-4 mb-6 rounded-lg ${
                    formStatus.success ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' : 
                    'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                  }`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      I'm interested in
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="residential">Residential Solar</option>
                      <option value="commercial">Commercial Solar</option>
                      <option value="battery">Energy Storage</option>
                      <option value="maintenance">Solar Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Find answers to common questions about solar energy
              </p>
            </div>
            
            <div className="space-y-6">
              <FAQ 
                question="How much does it cost to install solar panels?"
                answer="The cost of solar panel installation varies depending on the size of your property, energy needs, and local incentives. On average, residential installations range from $15,000 to $25,000 before tax credits and incentives. We offer free consultations to provide you with an accurate quote tailored to your specific situation."
              />
              <FAQ 
                question="How long does installation take?"
                answer="Most residential solar installations take 1-3 days once permits are approved. The entire process, from signing a contract to turning on your system, typically takes 2-3 months, which includes design, permitting, and utility approval."
              />
              <FAQ 
                question="Do solar panels work during power outages?"
                answer="Standard grid-tied solar systems shut down during power outages for safety reasons. However, if you add battery storage to your system, you can continue to power essential appliances during outages."
              />
              <FAQ 
                question="What maintenance do solar panels require?"
                answer="Solar panels require minimal maintenance. Occasional cleaning (2-4 times per year depending on your location) and an annual inspection are recommended to ensure optimal performance. Our panels come with monitoring software that alerts you to any issues."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details }) => {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600 dark:text-gray-400">{detail}</p>
        ))}
      </div>
    </div>
  );
};

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span>{question}</span>
          <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronIcon />
          </span>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-600">
          <p className="text-gray-700 dark:text-gray-200">{answer}</p>
        </div>
      )}
    </div>
  );
};

const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default ContactPage;