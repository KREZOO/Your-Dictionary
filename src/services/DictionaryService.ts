import { supabase } from './SupabaseClient';

export async function getDictionaries() {
  const { data, error } = await supabase.from('dictionaries').select('*');
  if (error) {
    console.error('Помилка при завантаженні словників:', error);
  }
  return data || [];
}

export async function createDictionary({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { data, error } = await supabase
    .from('dictionaries')
    .insert([{ title, description }]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export const deleteDictionary = async (dictionaryId: string) => {
  const { error: deleteTermsError } = await supabase
    .from('terms')
    .delete()
    .eq('dictionary_id', dictionaryId);

  if (deleteTermsError) {
    throw new Error('Помилка при видаленні термінів');
  }

  const { error: deleteDictionaryError } = await supabase
    .from('dictionaries')
    .delete()
    .eq('id', dictionaryId);

  if (deleteDictionaryError) {
    throw new Error('Помилка при видаленні словника');
  }

  return true;
};

export async function getDictionaryById(id: string) {
  const { data, error } = await supabase
    .from('dictionaries')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Помилка при отриманні словника:', error);
    return null;
  }

  return data;
}

export const updateDictionary = async (
  dictionaryId: string,
  updatedData: {
    title?: string;
    description?: string;
  }
) => {
  const { data, error } = await supabase
    .from('dictionaries')
    .update(updatedData)
    .eq('id', dictionaryId);

  if (error) {
    throw new Error('Помилка при оновленні словника');
  }

  return data;
};

export const searchDictionaries = async (query: string) => {
  const { data, error } = await supabase
    .from('dictionaries')
    .select('*')
    .ilike('title', `%${query}%`);

  if (error) {
    console.error('Ошибка при поиске словарей:', error);
  }
  return data || [];
};
