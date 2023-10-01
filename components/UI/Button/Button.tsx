import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  ...rest
}) => {
  let buttonClasses =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full';

  if (variant === 'secondary') {
    buttonClasses =
      'bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full';
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
