import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useJournalContext } from '../context/JournalContext';

export default function JournalPage() {
  const { entries, setEntries } = useJournalContext();
  const [newEntry, setNewEntry] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);

  const moods = ['Happy', 'Neutral', 'Sad'];

  const handleAddEntry = () => {
    if (!newEntry.trim() || !selectedMood) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const newJournalEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      content: newEntry,
      mood: selectedMood,
      image: imageUri,
    };

    setEntries([...entries, newJournalEntry]);
    setNewEntry('');
    setSelectedMood('');
    setImageUri(null);
  };

  const handleEditEntry = (id: string, content: string, mood: string, image: string | null) => {
    setEditingEntryId(id);
    setNewEntry(content);
    setSelectedMood(mood);
    setImageUri(image);
  };

  const handleUpdateEntry = () => {
    if (!newEntry.trim() || !selectedMood) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setEntries(
      entries.map((entry) =>
        entry.id === editingEntryId
          ? { ...entry, content: newEntry, mood: selectedMood, image: imageUri }
          : entry
      )
    );
    setEditingEntryId(null);
    setNewEntry('');
    setSelectedMood('');
    setImageUri(null);
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleRemoveImage = () => {
    setImageUri(null);
  };

  const groupedEntries = entries.reduce((acc, entry) => {
    if (!acc[entry.date]) {
      acc[entry.date] = [];
    }
    acc[entry.date].push(entry);
    return acc;
  }, {} as Record<string, any[]>);

  const groupedEntriesArray = Object.entries(groupedEntries);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal Entries</Text>
      <FlatList
        data={groupedEntriesArray}
        keyExtractor={([date]) => date}
        renderItem={({ item: [date, entries] }) => (
          <View style={styles.dateGroup}>
            <Text style={styles.date}>{date}</Text>
            {entries.map((entry) => (
              <View key={entry.id} style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardContent}>{entry.content}</Text>
                  <Text style={styles.mood}>Mood: {entry.mood}</Text>
                </View>
                {entry.image && (
                  <Image
                    source={{ uri: entry.image }}
                    style={styles.image}
                    resizeMode="contain"
                  />
                )}
                <View style={styles.cardActions}>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() =>
                      handleEditEntry(entry.id, entry.content, entry.mood, entry.image || null)
                    }
                  >
                    <Text style={styles.buttonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDeleteEntry(entry.id)}
                  >
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Write your journal entry..."
        value={newEntry}
        onChangeText={setNewEntry}
      />
      <View style={styles.moodContainer}>
        {moods.map((mood) => (
          <TouchableOpacity
            key={mood}
            style={[
              styles.moodButton,
              selectedMood === mood && styles.selectedMoodButton,
            ]}
            onPress={() => setSelectedMood(mood)}
          >
            <Text style={styles.moodText}>{mood}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePicker}>
        <Text style={styles.imagePickerText}>Pick an Image</Text>
      </TouchableOpacity>
      {imageUri && (
        <View>
          <Image source={{ uri: imageUri }} style={styles.imagePreview} resizeMode="contain" />
          <TouchableOpacity style={styles.removeImageButton} onPress={handleRemoveImage}>
            <Text style={styles.removeImageText}>Remove Image</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={editingEntryId ? handleUpdateEntry : handleAddEntry}
      >
        <Text style={styles.addButtonText}>
          {editingEntryId ? 'Update Entry' : 'Add Entry'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  dateGroup: {
    marginBottom: 16,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#6200ee',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  mood: {
    fontSize: 14,
    color: '#888',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  moodButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  selectedMoodButton: {
    backgroundColor: '#6200ee',
  },
  moodText: {
    color: '#000',
  },
  imagePickerButton: {
    backgroundColor: '#6200ee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  imagePickerText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  removeImageButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  removeImageText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});