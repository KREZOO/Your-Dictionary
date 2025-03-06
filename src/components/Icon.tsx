import React from 'react';

import SearchIcon from '../assets/icons/search-icon.svg?react';
import AddIcon from '../assets/icons/add-icon.svg?react';
import LightIcon from '../assets/icons/light-icon.svg?react';
import DarkIcon from '../assets/icons/dark-icon.svg?react';

type IconName = 'search' | 'add' | 'light' | 'dark';

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  search: SearchIcon,
  add: AddIcon,
  light: LightIcon,
  dark: DarkIcon,
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
