import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Mock session type
type MockSession = {
  user: {
    phone: string;
  };
} | null;

export default function useSession() {
  const [session, setSession] = useState<MockSession>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const storedSession = await AsyncStorage.getItem('mock_session');
      if (storedSession) {
        setSession(JSON.parse(storedSession));
      }
    } catch (error) {
      console.error('Error checking session:', error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (phone: string) => {
    const newSession = {
      user: { phone }
    };
    await AsyncStorage.setItem('mock_session', JSON.stringify(newSession));
    setSession(newSession);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('mock_session');
    setSession(null);
  };

  return { session, loading, signIn, signOut };
}