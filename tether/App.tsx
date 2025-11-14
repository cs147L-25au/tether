import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles/styles';

export default function App() {
  const [screen, setScreen] = useState('title');

  return (
    <TetherProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {screen === 'title' && <TitleScreen onNext={() => setScreen('contacts')} />}
        {screen === 'contacts' && <ContactsScreen onNext={() => setScreen('message')} onBack={() => setScreen('title')} />}
        {screen === 'message' && <MessageScreen onNext={() => setScreen('home')} onBack={() => setScreen('contacts')} />}
        {screen === 'home' && <HomeScreen onBack={() => setScreen('contacts')} />}
      </SafeAreaView>
    </TetherProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
