import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import styles from '../../styles/styles';
import { palette } from '../../styles/palette';
import { House, Users, Snail } from 'lucide-react-native';
import theme from '../../styles/theme';

interface FooterProps {
  activeTab: 'friends' | 'home' | 'profile';
  setActiveTab: (tab: 'friends' | 'home' | 'profile') => void;
}

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  return (
    <View style={styles.footer}>

      <TouchableOpacity style={styles.navButton} onPress={()=>setActiveTab("friends")}>
        <Users size = {40} color={activeTab == "friends" ? theme.accent : theme.primary}></Users><Text style={styles.text}>Friends</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={()=>setActiveTab("home")}>
        <House size = {40} color={activeTab == "home" ? theme.accent : theme.primary}></House><Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={()=>setActiveTab("profile")}>
        <Snail size = {40} color={activeTab == "profile" ? theme.accent : theme.primary}></Snail><Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}