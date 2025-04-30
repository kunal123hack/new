import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import PRPostForm from './PRPostForm';
import ResponseDisplay from './ResponseDisplay';
import { FormField, PostData } from '../../types';

const PRPostGenerator: React.FC = () => {
  const [formData, setFormData] = useState<PostData>({
    actor: '',
    movie: '',
    highlights: ''
  });
  const [response, setResponse] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isPosting, setIsPosting] = useState<boolean>(false);

  const updateField = (field: keyof PostData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formFields: FormField[] = [
    {
      id: 'actor',
      label: 'Actor Name',
      placeholder: 'Enter the actor name',
      value: formData.actor,
      onChange: updateField('actor'),
      required: true
    },
    {
      id: 'movie',
      label: 'Movie Title',
      placeholder: 'Enter the movie title',
      value: formData.movie,
      onChange: updateField('movie'),
      required: true
    },
    {
      id: 'highlights',
      label: 'Performance Highlights',
      placeholder: 'Enter key performance highlights, achievements, or notable moments',
      value: formData.highlights,
      onChange: updateField('highlights'),
      type: 'textarea',
      required: true
    }
  ];

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      
      // For demo purposes, we're using localhost. In production, use environment variables.
      const res = await axios.post('http://localhost:5000/generate', formData);
      
      if (res.data && res.data.message) {
        setResponse(res.data.message);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error generating post:', error);
      toast.error('Failed to generate PR post. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePost = async () => {
    try {
      setIsPosting(true);
      
      await axios.post('http://localhost:5000/post', {
        content: response
      });
      
      toast.success('Successfully posted to Facebook and portfolio!');
    } catch (error) {
      console.error('Error posting:', error);
      toast.error('Failed to post. Please try again.');
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <PRPostForm 
        formFields={formFields} 
        onGenerate={handleGenerate} 
        isGenerating={isGenerating} 
      />
      
      <ResponseDisplay 
        response={response} 
        onPost={handlePost} 
        isPosting={isPosting} 
      />
    </div>
  );
};

export default PRPostGenerator;