export interface Term {
  id: string;
  term: string;
  definition: string;
  definitionEng: string;
}

export interface Dictionary {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  terms: Term[];
}
