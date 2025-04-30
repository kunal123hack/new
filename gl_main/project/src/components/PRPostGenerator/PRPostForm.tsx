import React from 'react';
import FormField from '../UI/FormField';
import Button from '../UI/Button';
import { FormField as FormFieldType } from '../../types';

interface PRPostFormProps {
  formFields: FormFieldType[];
  onGenerate: () => Promise<void>;
  isGenerating: boolean;
}

const PRPostForm: React.FC<PRPostFormProps> = ({ formFields, onGenerate, isGenerating }) => {
  const allFieldsFilled = formFields.every(field => field.value.trim() !== '');

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create PR Post</h2>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        onGenerate();
      }}>
        {formFields.map(field => (
          <FormField key={field.id} {...field} />
        ))}

        <div className="mt-6">
          <Button
            type="submit"
            isLoading={isGenerating}
            disabled={!allFieldsFilled || isGenerating}
          >
            {isGenerating ? 'Generating...' : 'Generate PR Post'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PRPostForm;