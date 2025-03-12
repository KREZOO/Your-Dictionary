import { TooltipProps } from './TooltipProps';
import './TooltipStyles.scss';

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className='tooltip-container'>
      {children}
      <div className='tooltip-text'>{text}</div>
    </div>
  );
};

export default Tooltip;
