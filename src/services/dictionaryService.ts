import { supabase } from './supabaseClient';

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
  const { error } = await supabase
    .from('dictionaries')
    .delete()
    .eq('id', dictionaryId);
  if (error) {
    throw new Error('Помилка при видаленні словника');
  }
  return true;
};
