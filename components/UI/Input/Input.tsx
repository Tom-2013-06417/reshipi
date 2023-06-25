interface InputProps {
  label?: string;
  type?: 'text'
  [key: string]: unknown;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', ...rest }) => {
  const { className, ...inputProperties } = rest;

  return (
    <div className={`mb-4 ${className}`}>
      { label
        ? (<label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>)
        : <></>
      }
      <input
        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        type={type}
        {...inputProperties}
      />
    </div>
  )
};

export default Input;
