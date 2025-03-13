import { InputProps } from './InputProps';
import './InputStyles.scss';

const Input: React.FC<InputProps> = ({
  title,
  type,
  placeholder,
  className,
  ...props
}) => {
  return (
    <div className='input-field'>
      <h3 className='input-title'>{title}</h3>
      {className?.includes('description') ? (
        <textarea
          className={`input ${className}`}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={`input ${className}`}
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
