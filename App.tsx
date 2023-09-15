import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './src/components/Button';
import React, { useState } from 'react';
import WelcomeRoutes from './src/routes/welcome.routes';

export default function App() {
  return (
    <WelcomeRoutes/>
  );
};