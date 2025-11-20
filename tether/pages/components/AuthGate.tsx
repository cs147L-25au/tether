import useSession from "./../../utils/useSession";
import Loading from "./Loading";
import Title from "../title";
import { useState } from 'react';
import Signup from "../signup";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const { session, loading } = useSession();
  const [showSignup, setShowSignup] = useState(false);

  if (loading) return <Loading />;

  if (!session) {
    if (showSignup) {
      return <Signup onBack={() => setShowSignup(false)} />;
    }
    return <Title onSignup={() => setShowSignup(true)} />;
  }

  return <>{children}</>;
}