import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, ...rest }) => {
  let buttonClasses = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';

  if (variant === 'secondary') {
    buttonClasses = 'bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded';
  }

  if (fullWidth) {
    buttonClasses += ' w-full';
  }

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
