import React from 'react';
import { View, Text, Pressable, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { palette } from '../styles/palette';

interface ContactsProps {
  onNext: () => void;
  onBack: () => void;
}

export const Contacts = ({ onNext, onBack }: ContactsProps) => {
  const contacts = [
    { id: '1', name: 'Zafar' },
    { id: '2', name: 'Yuina' },
    { id: '3', name: 'Zimin' },
    { id: '4', name: 'Fayez' },
    { id: '5', name: 'James' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>
        
        <Text style={styles.heading}>Choose Contact</Text>
        
          {contacts.map((contact) => (
            <Pressable 
              key={contact.id} 
              style={styles.contactCard} 
              onPress={onNext}
            >
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </Text>
              </View>
              <Text style={styles.contactName}>{contact.name}</Text>
            </Pressable>
          ))}
      </View>
    </SafeAreaView>
  );
};