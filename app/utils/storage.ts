import AsyncStorage from '@react-native-async-storage/async-storage';
import { JournalEntry } from '../types';

const STORAGE_KEY = 'journals';

export const loadEntries = async (): Promise<JournalEntry[]> => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveEntry = async (entry: JournalEntry) => {
  const entries = await loadEntries();
  entries.push(entry);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
};

export const deleteEntry = async (id: string) => {
  const entries = await loadEntries();
  const updatedEntries = entries.filter((entry: JournalEntry) => entry.id !== id);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
};
