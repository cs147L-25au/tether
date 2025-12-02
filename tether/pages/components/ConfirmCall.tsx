import React, { useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import { Phone } from 'lucide-react-native';
import { palette } from '../../styles/palette';
import convoStyles from '../../styles/convoStyles';

interface ConfirmCallModalProps {
  visible: boolean;
  contactName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmCallModal = ({ visible, contactName, onConfirm, onCancel }: ConfirmCallModalProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    if (visible) {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.9);
      
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.9,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <Animated.View 
        style={[
          convoStyles.modalOverlay,
          { opacity: fadeAnim }
        ]}
      >
        <Animated.View 
          style={[
            convoStyles.confirmModalContent,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }]
            }
          ]}
        >
          <Phone size={48} color={palette.slate} style={{ marginBottom: 20 }} />
          
          <Text style={convoStyles.confirmModalTitle}>
            Start a conversation with {contactName}?
          </Text>
          
          <Text style={convoStyles.confirmModalText}>
            You're about to initiate a portal conversation. Make sure you're both ready for a meaningful discussion.
          </Text>

          <View style={convoStyles.confirmModalButtons}>
            <TouchableOpacity 
              style={convoStyles.confirmModalButtonCancel}
              onPress={onCancel}
            >
              <Text style={convoStyles.confirmModalButtonCancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={convoStyles.confirmModalButtonConfirm}
              onPress={onConfirm}
            >
              <Phone size={20} color={palette.cream} />
              <Text style={convoStyles.confirmModalButtonConfirmText}>Start Call</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};
