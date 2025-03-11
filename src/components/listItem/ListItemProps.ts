export interface DictionaryItemProps {
  id: string;
  title: string;
  description?: string;
  dateDictionary?: string;
}

export interface TermItemProps {
  id: string;
  title: string;
  titleEng?: string;
  description?: string;
  descriptionEng?: string;
  dateTerm?: string;
}
