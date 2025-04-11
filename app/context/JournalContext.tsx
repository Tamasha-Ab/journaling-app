// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// interface JournalEntry {
//   id: string;
//   content: string;
//   date: string;
// }

// interface JournalContextProps {
//   entries: JournalEntry[];
//   setEntries: React.Dispatch<React.SetStateAction<JournalEntry[]>>;
// }

// const JournalContext = createContext<JournalContextProps | undefined>(undefined);

// export const useJournalContext = () => {
//   const context = useContext(JournalContext);
//   if (!context) {
//     throw new Error('useJournalContext must be used within a JournalProvider');
//   }
//   return context;
// };

// interface JournalProviderProps {
//   children: ReactNode;
// }

// export const JournalProvider = ({ children }: JournalProviderProps) => {
//   const [entries, setEntries] = useState<JournalEntry[]>([]);

//   // Load entries from AsyncStorage when the app starts
//   useEffect(() => {
//     const loadEntries = async () => {
//       try {
//         const storedEntries = await AsyncStorage.getItem('journalEntries');
//         if (storedEntries) {
//           setEntries(JSON.parse(storedEntries));
//         }
//       } catch (error) {
//         console.error('Failed to load journal entries:', error);
//       }
//     };

//     loadEntries();
//   }, []);

//   // Save entries to AsyncStorage whenever they change
//   useEffect(() => {
//     const saveEntries = async () => {
//       try {
//         await AsyncStorage.setItem('journalEntries', JSON.stringify(entries));
//       } catch (error) {
//         console.error('Failed to save journal entries:', error);
//       }
//     };

//     saveEntries();
//   }, [entries]);

//   return (
//     <JournalContext.Provider value={{ entries, setEntries }}>
//       {children}
//     </JournalContext.Provider>
//   );
// };

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Updated JournalEntry interface to include mood and image
interface JournalEntry {
  id: string;
  content: string;
  date: string;
  mood: string; // Mood of the journal entry (e.g., Happy, Neutral, Sad)
  image: string | null; // Optional image URI
}

interface JournalContextProps {
  entries: JournalEntry[];
  setEntries: React.Dispatch<React.SetStateAction<JournalEntry[]>>;
}

const JournalContext = createContext<JournalContextProps | undefined>(undefined);

export const useJournalContext = () => {
  const context = useContext(JournalContext);
  if (!context) {
    throw new Error('useJournalContext must be used within a JournalProvider');
  }
  return context;
};

interface JournalProviderProps {
  children: ReactNode;
}

export const JournalProvider = ({ children }: JournalProviderProps) => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  // Load entries from AsyncStorage when the app starts
  useEffect(() => {
    const loadEntries = async () => {
      try {
        const storedEntries = await AsyncStorage.getItem('journalEntries');
        if (storedEntries) {
          setEntries(JSON.parse(storedEntries));
        }
      } catch (error) {
        console.error('Failed to load journal entries:', error);
      }
    };

    loadEntries();
  }, []);

  // Save entries to AsyncStorage whenever they change
  useEffect(() => {
    const saveEntries = async () => {
      try {
        await AsyncStorage.setItem('journalEntries', JSON.stringify(entries));
      } catch (error) {
        console.error('Failed to save journal entries:', error);
      }
    };

    saveEntries();
  }, [entries]);

  return (
    <JournalContext.Provider value={{ entries, setEntries }}>
      {children}
    </JournalContext.Provider>
  );
};