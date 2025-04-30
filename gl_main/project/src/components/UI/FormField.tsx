import React from 'react';
import { FormField as FormFieldType } from '../../types';

const FormField: React.FC<FormFieldType> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = 'input',
  required = false
}) => {
  const baseInputStyles = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 outline-none';

  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {type === 'input' ? (
        <input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseInputStyles}
          required={required}
        />
      ) : (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${baseInputStyles} min-h-[120px] resize-y`}
          required={required}
          rows={5}
        />
      )}
    </div>
  );
};

export default FormField;