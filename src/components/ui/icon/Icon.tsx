import React from 'react';

import SearchIcon from '../../../assets/icons/search-icon.svg?react';
import AddIcon from '../../../assets/icons/add-icon.svg?react';
import LightIcon from '../../../assets/icons/light-icon.svg?react';
import DarkIcon from '../../../assets/icons/dark-icon.svg?react';
import DicIcon from '../../../assets/icons/dic-icon.svg?react';
import TermIcon from '../../../assets/icons/term-icon.svg?react';
import chevronDownIcon from '../../../assets/icons/chevron-down-icon.svg?react';
import chevronUpIcon from '../../../assets/icons/chevron-up-icon.svg?react';
import returnLightIcon from '../../../assets/icons/return-light-icon.svg?react';
import returnDarkIcon from '../../../assets/icons/return-dark-icon.svg?react';
import editLightIcon from '../../../assets/icons/edit-light-icon.svg?react';
import editDarkIcon from '../../../assets/icons/edit-dark-icon.svg?react';
import copyIcon from '../../../assets/icons/copy-icon.svg?react';
import trashIcon from '../../../assets/icons/trash-icon.svg?react';
import dotsIcon from '../../../assets/icons/dots-icon.svg?react';

import { IconNameType, IconProps } from './Icon.types';

const icons: Record<IconNameType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  search: SearchIcon,
  add: AddIcon,
  light: LightIcon,
  dark: DarkIcon,
  dictionary: DicIcon,
  copy: copyIcon,
  'edit-light': editLightIcon,
  'edit-dark': editDarkIcon,
  trash: trashIcon,
  dots: dotsIcon,
  term: TermIcon,
  'chevron-down': chevronDownIcon,
  'chevron-up': chevronUpIcon,
  'return-light': returnLightIcon,
  'return-dark': returnDarkIcon,
};

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
