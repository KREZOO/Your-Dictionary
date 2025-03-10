import React from 'react';

import SearchIcon from '../assets/icons/search-icon.svg?react';
import AddIcon from '../assets/icons/add-icon.svg?react';
import LightIcon from '../assets/icons/light-icon.svg?react';
import DarkIcon from '../assets/icons/dark-icon.svg?react';
import DicIcon from '../assets/icons/dic-icon.svg?react';
import TermIcon from '../assets/icons/term-icon.svg?react';
import chevronDown from '../assets/icons/chevron-down-icon.svg?react';
import chevronUp from '../assets/icons/chevron-up-icon.svg?react';

type IconName =
  | 'search'
  | 'add'
  | 'light'
  | 'dark'
  | 'dictionary'
  | 'chevron-down'
  | 'chevron-up'
  | 'term';

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  search: SearchIcon,
  add: AddIcon,
  light: LightIcon,
  dark: DarkIcon,
  dictionary: DicIcon,
  term: TermIcon,
  'chevron-down': chevronDown,
  'chevron-up': chevronUp,
};

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
}) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    console.warn(`Иконка "${name}" не найдена`);
    return null;
  }

  return (
    <SvgIcon width={size} height={size} fill={color} className={className} />
  );
};

export default Icon;
