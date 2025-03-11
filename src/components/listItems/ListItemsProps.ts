export interface ListItemsProps {
  title?: string;
  items: Array<{
    id: string;
    title: string;
    titleEng?: string;
    description?: string;
    descriptionEng?: string;
    createdAt?: string;
  }>;
  type: 'dictionary' | 'term';
}
