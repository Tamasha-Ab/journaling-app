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

`Node.js (v16 or later)
`npm or yarn
`Expo CLI (npx expo-cli)
`Android Studio (for Android emulator) or Xcode (for iOS simulator)

Steps to Run the App

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/journaling-app.git
   cd journaling-app
   ```

2. Install dependencies:

   ```bash
    npm install
   ```

3. Start the Expo development server:

   ```bash
    npx expo start
   ```

4. Run the app:

*On a physical device: Install the Expo Go app and scan the QR code.
*On an emulator:
      -For Android: Open Android Studio, start an emulator, and click "Run on Android device/emulator" in the Expo Developer Tools.
      -For iOS: Open Xcode, start a simulator, and click "Run on iOS simulator" in the Expo Developer Tools.

## Features Overview

Core Features

Journal Entries:
Add, edit, and delete journal entries.
Attach images to entries.
Track moods (e.g., Happy, Neutral, Sad).

Dashboard:
Visualize mood trends using a pie chart.
View journal entry frequency using a bar chart.

Theming:
Supports light and dark modes.

Persistent Storage:
Saves journal entries locally using AsyncStorage.

## Design Decisions and Architecture

*Component-Based Architecture
   The app is structured using reusable components like ThemedView, JournalProvider, and Dashboard.

   Context API is used for state management (JournalContext) to share data (e.g., journal entries) across components.

*Data Persistence
AsyncStorage is used to persist journal entries locally, ensuring data is retained even after the app is closed.

*Charts and Visualization
react-native-chart-kit is used for rendering charts (pie and bar charts) to provide insights into user data.

*Routing
expo-router is used for navigation, enabling a tab-based layout with screens for "Journal" and "Dashboard."

## Known Limitations and Future Improvements

*Known Limitations
   No Cloud Sync: Data is stored locally and cannot be synced across devices.
   Limited Mood Options: Only three moods (Happy, Neutral, Sad) are available.

*Future Improvements
   Cloud Integration: Add support for syncing data with cloud storage (e.g., Firebase).
   Custom Moods: Allow users to define their own moods.
   Search and Filters: Add functionality to search and filter journal entries by date or mood.
   Push Notifications: Remind users to log their daily entries.

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
