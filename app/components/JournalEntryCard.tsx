import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type JournalEntryCardProps = {
  content: string;
  onDelete: () => void;
  onEdit: () => void;
};

const JournalEntryCard = ({ content, onDelete, onEdit }: JournalEntryCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.actions}>
        <Button title="Edit" onPress={onEdit} />
        <Button title="Delete" onPress={onDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default JournalEntryCard;