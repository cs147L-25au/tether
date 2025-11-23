import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import { palette } from '../styles/palette';

const portal = require('../assets/onboard3/portal.png');
const enterButton = require('../assets/onboard3/enter_button.png');
const leftProfile = require('../assets/onboard3/left.png');
const rightProfile = require('../assets/onboard3/right.png');
const stroke = require('../assets/onboard3/stroke.png');

interface Onboard3Props {
  onContinue: () => void;
}

export default function Onboard3({ onContinue }: Onboard3Props) {
  return (
    <View style={styles.container}>
      {/* Top text */}
      <Text style={styles.topText}>enter portal to begin</Text>
      
      {/* Portal graphic */}
      <View style={styles.portalContainer}>
        <Image 
          source={portal} 
          style={styles.portal}
        />
      </View>
      
      {/* Enter button */}
      <Pressable
        style={styles.enterButton}
        onPress={onContinue}
      >
        <Image 
          source={enterButton} 
          style={styles.enterButtonImage}
        />
      </Pressable>
      
      {/* Bottom profiles with stroke */}
      <View style={styles.profilesContainer}>
        <Image 
          source={leftProfile} 
          style={styles.leftProfile}
        />
        
        <Image 
          source={stroke} 
          style={styles.stroke}
        />
        
        <Image 
          source={rightProfile} 
          style={styles.rightProfile}
        />
      </View>
    </View>
  );
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#F5F8E8', // Light green-yellow gradient approximation
    paddingTop: SCREEN_HEIGHT * 0.1,
    paddingBottom: SCREEN_HEIGHT * 0.1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topText: {
    fontSize: 20,
    fontFamily: 'Avenir',
    color: palette.darkBrown,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: SCREEN_HEIGHT * 0.05,
  },
  portalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: SCREEN_WIDTH * 0.1,
  },
  portal: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_WIDTH * 0.7,
    resizeMode: 'contain',
  },
  enterButton: {
    marginTop: SCREEN_HEIGHT * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.05,
    shadowColor: palette.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  enterButtonImage: {
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.06,
    resizeMode: 'contain',
  },
  profilesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: SCREEN_WIDTH * 0.15,
    marginBottom: SCREEN_HEIGHT * 0.05,
    position: 'relative',
  },
  leftProfile: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_WIDTH * 0.2,
    resizeMode: 'contain',
  },
  stroke: {
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_WIDTH * 0.05,
    resizeMode: 'contain',
    marginHorizontal: SCREEN_WIDTH * 0.05,
  },
  rightProfile: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_WIDTH * 0.2,
    resizeMode: 'contain',
  },
});

