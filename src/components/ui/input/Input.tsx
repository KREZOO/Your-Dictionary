import { InputProps } from './InputProps';
import './InputStyles.scss';

const Input: React.FC<InputProps> = ({
  title,
  type,
  placeholder,
  className,
}) => {
  return (
    <div className='input-field'>
      <h3 className='input-title'>{title}</h3>
      {className?.includes('description') ? (
        <textarea className={`input ${className}`} placeholder={placeholder} />
      ) : (
        <input
          type={type}
          className={`input ${className}`}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;
