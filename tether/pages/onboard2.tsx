import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { palette } from '../styles/palette';

const background = require('../assets/onboard2/backgroundonboard1.png');
const frogLeft = require('../assets/onboard2/frog left.png');
const rightFrog = require('../assets/onboard2/rightfrog.png');
const squiggle = require('../assets/onboard2/squiggle.png');
const number1 = require('../assets/onboard2/number1.png');
const lock = require('../assets/onboard2/lock.png');

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface Onboard2Props {
  onContinue: () => void;
}

export default function Onboard2({ onContinue }: Onboard2Props) {
  const handleContinue = () => {
    onContinue();
  };

  return (
    <ImageBackground 
      source={background}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>onboarding 2</Text>
        
        {/* Main Card */}
        <View style={styles.card}>
          {/* Main text at top */}
          <Text style={styles.mainText}>
            The journey starts with reaching out to a friend...
          </Text>
          
          {/* Journey path container */}
          <View style={styles.journeyContainer}>
            {/* Left frog above path */}
            <Image 
              source={frogLeft} 
              style={styles.leftFrog}
            />
            
            {/* Wavy path line */}
            <Image 
              source={squiggle} 
              style={styles.pathLine}
            />
            
            {/* Right frog below path */}
            <Image 
              source={rightFrog} 
              style={styles.rightFrog}
            />
            
            {/* Milestone circles */}
            <View style={styles.milestonesContainer}>
              {/* First circle with number 1 */}
              <View style={styles.circle}>
                <Image 
                  source={number1} 
                  style={styles.milestoneIcon}
                />
              </View>
              
              {/* Four locked circles */}
              {[1, 2, 3, 4].map((index) => (
                <View key={index} style={styles.circle}>
                  <Image 
                    source={lock} 
                    style={styles.milestoneIcon}
                  />
                </View>
              ))}
            </View>
          </View>
          
          {/* Bottom text */}
          <Text style={styles.bottomText}>
            ...often the hardest part.
          </Text>
        </View>
        
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Avenir',
    color: palette.darkBrown,
    marginTop: SCREEN_HEIGHT * 0.05,
    marginLeft: SCREEN_WIDTH * 0.05,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#F5F8E8', // Light green to pale yellow gradient approximation
    borderRadius: 24,
    padding: 24,
    marginTop: SCREEN_HEIGHT * 0.1,
    marginHorizontal: SCREEN_WIDTH * 0.05,
    minHeight: SCREEN_HEIGHT * 0.5,
    shadowColor: palette.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  mainText: {
    fontSize: 20,
    fontFamily: 'Avenir',
    color: palette.darkBrown,
    fontWeight: '600',
    marginBottom: SCREEN_HEIGHT * 0.04,
    lineHeight: 28,
  },
  journeyContainer: {
    position: 'relative',
    width: '100%',
    height: SCREEN_HEIGHT * 0.25,
    marginVertical: SCREEN_HEIGHT * 0.03,
  },
  leftFrog: {
    position: 'absolute',
    left: SCREEN_WIDTH * 0.05,
    top: -SCREEN_HEIGHT * 0.02,
    width: SCREEN_WIDTH * 0.12,
    height: SCREEN_WIDTH * 0.12,
    resizeMode: 'contain',
    zIndex: 3,
  },
  pathLine: {
    position: 'absolute',
    left: SCREEN_WIDTH * 0.1,
    top: SCREEN_HEIGHT * 0.08,
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_HEIGHT * 0.05,
    resizeMode: 'contain',
    zIndex: 1,
  },
  rightFrog: {
    position: 'absolute',
    right: SCREEN_WIDTH * 0.05,
    bottom: -SCREEN_HEIGHT * 0.02,
    width: SCREEN_WIDTH * 0.12,
    height: SCREEN_WIDTH * 0.12,
    resizeMode: 'contain',
    zIndex: 3,
  },
  milestonesContainer: {
    position: 'absolute',
    left: SCREEN_WIDTH * 0.1,
    top: SCREEN_HEIGHT * 0.06,
    width: SCREEN_WIDTH * 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  circle: {
    width: SCREEN_WIDTH * 0.12,
    height: SCREEN_WIDTH * 0.12,
    borderRadius: SCREEN_WIDTH * 0.06,
    backgroundColor: '#E8F5D0', // Light green-yellow gradient approximation
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: palette.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  milestoneIcon: {
    width: SCREEN_WIDTH * 0.06,
    height: SCREEN_WIDTH * 0.06,
    resizeMode: 'contain',
  },
  bottomText: {
    fontSize: 16,
    fontFamily: 'Avenir',
    color: palette.darkBrown,
    textAlign: 'right',
    marginTop: SCREEN_HEIGHT * 0.02,
    fontWeight: '500',
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

