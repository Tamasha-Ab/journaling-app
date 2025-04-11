import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JournalListPage from './app/(tabs)/index'; // Using index.tsx as JournalListPage
import Dashboard from './app/(tabs)/Dashboard';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Journal">
        <Tab.Screen 
          name="Journal" 
          component={JournalListPage} // This points to index.tsx
          options={{ title: 'Journal' }} 
        />
        <Tab.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ title: 'Dashboard' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;