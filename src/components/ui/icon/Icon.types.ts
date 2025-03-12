export type IconNameType =
  | 'search'
  | 'add'
  | 'light'
  | 'dark'
  | 'dictionary'
  | 'chevron-down'
  | 'chevron-up'
  | 'term'
  | 'return-light'
  | 'return-dark'
  | 'edit-light'
  | 'edit-dark'
  | 'trash'
  | 'copy'
  | 'dots';

export interface IconProps {
  name: IconNameType;
  size?: number;
  color?: string;
  className?: string;
}
