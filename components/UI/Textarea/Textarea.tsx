import { useEffect, useRef } from "react";

interface TextareaProps {
  label: string;
  [key: string]: unknown;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...rest }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleTextareaChange = () => {
    adjustTextareaHeight();
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, []);

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        ref={textareaRef}
        onChange={handleTextareaChange}
        {...rest}
      />
  </div>
  )
};

export default Textarea;
