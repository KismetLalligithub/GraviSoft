import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import Navbar from '@/components/Navbar/Nav';

const Layout: React.FC = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
