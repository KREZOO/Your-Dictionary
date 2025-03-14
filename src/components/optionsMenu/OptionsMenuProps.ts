interface DictionaryData {
  title: string | undefined;
  description: string | undefined;
}

interface TermData {
  term: string | undefined;
  term_eng: string | undefined;
  definition: string | undefined;
  definition_eng: string | undefined;
}

export interface OptionsMenuProps {
  urlCall: string;
  onEdit: (url: string) => void;
  id?: string;
  dictionaryData?: DictionaryData;
  termData?: TermData;
}
