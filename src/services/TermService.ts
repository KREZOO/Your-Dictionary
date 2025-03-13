import { supabase } from './supabaseClient';

interface TermData {
  term: string;
  termEng: string;
  definition: string;
  definitionEng: string;
  dictionaryId: string;
}

export const createTerm = async (termData: TermData) => {
  const { term, termEng, definition, definitionEng, dictionaryId } = termData;

  const { data, error } = await supabase.from('terms').insert([
    {
      term,
      term_eng: termEng,
      definition,
      definition_eng: definitionEng,
      dictionary_id: dictionaryId,
    },
  ]);

  if (error) {
    throw error;
  }
  return data;
};

export async function getTerms(dictionaryId: string) {
  const { data, error } = await supabase
    .from('terms')
    .select('*')
    .eq('dictionary_id', dictionaryId);

  if (error) {
    console.error('Помилка при завантаженні термінів:', error);
  }
  return data || [];
}

export const deleteTerm = async (termId: string) => {
  const { error } = await supabase.from('terms').delete().eq('id', termId);

  if (error) {
    throw new Error('Помилка при видаленні терміну');
  }
  return true;
};

export const updateTerm = async (
  termId: string,
  updatedData: Partial<TermData>
) => {
  const { data, error } = await supabase
    .from('terms')
    .update(updatedData)
    .eq('id', termId);

  if (error) {
    throw new Error('Помилка при оновленні терміну');
  }
  return data;
};

export const getTermById = async (termId: string) => {
  const { data, error } = await supabase
    .from('terms')
    .select('*')
    .eq('id', termId)
    .single();

  if (error) {
    console.error('Помилка при отриманні терміну:', error);
    return null;
  }
  return data;
};
