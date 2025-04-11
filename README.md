# Welcome to your Journaling App 👋

A modern journaling app built with React Native and Expo, designed to help users track their daily thoughts, moods, and activities. The app includes features like mood tracking, image attachments, and data visualization through charts.

## Table Of Content

1. Setup and Installation
2. Features Overview
3. Design Decisions and Architecture
4. Known Limitations and Future Improvements
5. Third-Party Libraries

## Setup and Installation

   Prerequisites
   
   1. Node.js (v16 or later)
   2. npm or yarn
   3. Expo CLI (npx expo-cli)
   4. Android Studio (for Android emulator) or Xcode (for iOS simulator)
   
   Steps to Run the App
   
   1. Install dependencies:
   
      ```bash
       npm install
      ```
   
   2. Start the Expo development server:
   
      ```bash
       npx expo start
      ```
   
   3. Run the app:
   
   1) On a physical device: Install the Expo Go app and scan the QR code.
   2) On an emulator:
         -For Android: Open Android Studio, start an emulator, and click "Run on Android device/emulator" in the Expo Developer Tools.
         -For iOS: Open Xcode, start a simulator, and click "Run on iOS simulator" in the Expo Developer Tools.

## Features Overview

   Core Features
   
   1. Journal Entries:
   Add, edit, and delete journal entries.
   Attach images to entries.
   Track moods (e.g., Happy, Neutral, Sad).
   
   2. Dashboard:
   Visualize mood trends using a pie chart.
   View journal entry frequency using a bar chart.
   
   3. Persistent Storage:
   Saves journal entries locally using AsyncStorage.

## Design Decisions and Architecture
   
   1. Data Persistence
      AsyncStorage is used to persist journal entries locally, ensuring data is retained even after the app is closed.
   
   2. Charts and Visualization
      react-native-chart-kit is used for rendering charts (pie and bar charts) to provide insights into user data.
   
   3. Routing
      expo-router is used for navigation, enabling a tab-based layout with screens for "Journal" and "Dashboard."

   4. Component-Based Architecture
      Context API is used for state management (JournalContext) to share data (e.g., journal entries) across components.
      The app is structured using reusable components like ThemedView, JournalProvider, and Dashboard.

## Known Limitations and Future Improvements

   1. Known Limitations
      No Cloud Sync: Data is stored locally and cannot be synced across devices.
      
      Limited Mood Options: Only three moods (Happy, Neutral, Sad) are available.
   
   3. Future Improvements
      Cloud Integration: Add support for syncing data with cloud storage (e.g., Firebase).
      Custom Moods: Allow users to define their own moods.
      Search and Filters: Add functionality to search and filter journal entries by date or mood.
      Push Notifications: Remind users to log their daily entries.
      Theming: Supports light and dark modes.

## Third-Party Libraries

   1. Expo
   Why: Provides a streamlined development environment for React Native apps.
   Usage: Handles app bundling, QR code scanning, and device compatibility.

   2. react-native-chart-kit
   Why: Simplifies the creation of charts and visualizations.
   Usage: Used for rendering pie and bar charts in the Dashboard.

   3. AsyncStorage
   Why: Enables local data persistence.
   Usage: Stores journal entries and retrieves them on app startup.

   4. expo-router
   Why: Simplifies navigation in Expo apps.
   Usage: Implements tab-based navigation for "Journal" and "Dashboard" screens.
   
   5. expo-image-picker
   Why: Provides an easy way to select images from the device gallery.
   Usage: Allows users to attach images to journal entries.
