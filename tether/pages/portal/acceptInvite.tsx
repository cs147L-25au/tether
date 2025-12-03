import React from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  TouchableOpacity,
} from 'react-native';
import { palette } from '../../styles/palette';
import { ChevronLeft } from 'lucide-react-native';
import portalStyles from '../../styles/portalStyles';

interface AcceptInviteProps {
  contact: { id: string; name: string };
  onBack: () => void;
  onNavigateToExpectations: () => void;
}

export const AcceptInvite = ({ contact, onBack, onNavigateToExpectations }: AcceptInviteProps) => {
  return (
    <ImageBackground 
      source={require("../../assets/backgrounds/light_ombre.png")}
      style={portalStyles.background}
      resizeMode='cover'
    >
      <View style={portalStyles.container}>
        <TouchableOpacity onPress={onBack} style={portalStyles.backButton}>
          <ChevronLeft size={40} color={palette.slate} />
        </TouchableOpacity>
        
        <View style={[portalStyles.content, { paddingTop: 80 }]}>
          <Text style={[portalStyles.title, { fontFamily: 'Avenir' }]}>
            {contact.name} accepted invite! Continue to setting expectations
          </Text>
          <TouchableOpacity
            style={portalStyles.continueButton}
            onPress={onNavigateToExpectations}
          >
            <Text style={[portalStyles.continueButtonText, { fontFamily: 'Avenir' }]}>
              Continue to Set Expectations
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
