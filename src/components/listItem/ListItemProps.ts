export interface ListItemProps {
  id: string;
  title: string;
  description?: string;
  descriptionEng?: string;
  date?: string;
  type: 'dictionary' | 'term';
}
