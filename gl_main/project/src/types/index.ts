export interface PostData {
  actor: string;
  movie: string;
  highlights: string;
}

export interface FormField {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'input' | 'textarea';
  required?: boolean;
}