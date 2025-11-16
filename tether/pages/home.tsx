import React, { useState } from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import styles from '../styles/styles';

interface HomeProps {
  onBack: () => void;
}

export const Home = ({ onBack }: HomeProps) => {
  const [phase, setPhase] = useState<'prepare' | 'during' | 'after'>('prepare');

  return (
    <View style={styles.imagePlaceholder}><Text>Home screen</Text></View>
  );
};