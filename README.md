### React Native App with TypeScript, RTK Query, and Shopify Restyle

This is a React Native mobile application scaffolded with TypeScript, utilizing Redux Toolkit Query (RTK Query) for API calls and Shopify Restyle for styling. The app is set up to use the Yarn package manager for dependency management.
Setup Instructions

Follow these steps to set up and run the React Native app:
Prerequisites
    
    Node.js (>=18) and npm installed globally on your machine.
    Yarn package manager installed globally (npm install -g yarn).
    Xcode installed for iOS development (macOS only).
    Android Studio installed for Android development.

Installation

  Clone the repository to your local machine:

    git clone https://github.com/qamraaan/saturn.git

Navigate to the project directory:


    cd EmployeeDirectory

Install dependencies using Yarn:


    yarn

Starting Metro Server

The Metro bundler is responsible for compiling your JavaScript code and serving it to your app. To start the Metro server:


    yarn start

Installing Pods

If you're targeting iOS, you need to install CocoaPods dependencies:

    cd ios && pod install && cd ..

Running the App

iOS

To run the app on an iOS simulator or device, run:

    yarn ios

Android

To run the app on an Android emulator or device, run:


    yarn android

Features

    React Native framework for building cross-platform mobile applications.
    TypeScript for type-checking and improved developer experience.
    RTK Query for efficient and powerful API data fetching.
    Shopify Restyle for theming.

Folder Structure

src/
    components/ Reusable UI components
    domains/ Application modules
    layout/ Application layout
    routes/ Application routes
    store/ Application global store.
    theme/ Application theme.
    types/ Application types
    slices/ Application slices
    
    App.tsx Entry point for the application
    ... Other files
    tsconfig.json # TypeScript configuration
    vite.config.ts # Vite configuration
    package.json # Project dependencies
    yarn.lock # Dependency lock file (if using Yarn)

    ios: iOS-specific configuration and code.
    android: Android-specific configuration and code.
