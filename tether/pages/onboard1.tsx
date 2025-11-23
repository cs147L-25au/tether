import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { palette } from '../styles/palette';

const leftprofile = require('../assets/onboard1/leftprofile.png');
const rightimage = require('../assets/onboard1/rightimage.png');
const squiggle = require('../assets/onboard1/squiggle.png');
const thought = require('../assets/onboard1/thoughtbubble.png');
const back = require('../assets/onboard1/backgroundonboard1.png');

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface Onboard1Props {
  onContinue: () => void;
}

export default function Onboard1({ onContinue }: Onboard1Props) {
  const handleContinue = () => {
    onContinue();
  };

  return (
    <ImageBackground 
      source={back}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.container}>
        {/* Left profile image */}
        <Image 
          source={leftprofile} 
          style={styles.leftProfile}
        />
        
        {/* Right image */}
        <Image 
          source={rightimage} 
          style={styles.rightImage}
        />
        
        {/* Squiggle */}
        <Image 
          source={squiggle} 
          style={styles.squiggle}
        />
        
        {/* Thought bubble */}
        <Image 
          source={thought} 
          style={styles.thoughtBubble}
        />
        
        {/* Continue Button */}
        <Pressable
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  leftProfile: {
    position: 'absolute',
    left: 0,
    top: SCREEN_HEIGHT * 0.2,
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.3,
    resizeMode: 'contain',
  },
  rightImage: {
    position: 'absolute',
    right: 0,
    top: SCREEN_HEIGHT * 0.3,
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.4,
    resizeMode: 'contain',
  },
  squiggle: {
    position: 'absolute',
    left: SCREEN_WIDTH * 0.1,
    top: SCREEN_HEIGHT * 0.5,
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.2,
    resizeMode: 'contain',
  },
  thoughtBubble: {
    position: 'absolute',
    left: SCREEN_WIDTH * 0.15,
    top: SCREEN_HEIGHT * 0.6,
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_HEIGHT * 0.15,
    resizeMode: 'contain',
  },
  continueButton: {
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 0.1,
    left: SCREEN_WIDTH * 0.1,
    backgroundColor: palette.lightBeige,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    fontFamily: 'Avenir',
    color: palette.mediumBrown,
  },
});
