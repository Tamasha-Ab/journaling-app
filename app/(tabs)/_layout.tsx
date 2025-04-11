import { Tabs } from 'expo-router';
import React from 'react';
import { JournalProvider } from '../context/JournalContext';

export default function TabLayout() {
  return (
    <JournalProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#6200ee',
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Journal',
          }}
        />
        <Tabs.Screen
          name="Dashboard"
          options={{
            title: 'Dashboard',
          }}
        />
      </Tabs>
    </JournalProvider>
  );
}