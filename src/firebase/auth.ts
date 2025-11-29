import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile, 
  User, 
  UserCredential 
} from "firebase/auth";
import app from "./config";

const auth = getAuth(app);

export interface SignUpData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface AuthResponse {
  user: User | null;
  error?: string;
}

export const signUp = async ({ 
  email, 
  password, 
  firstName, 
  lastName 
}: SignUpData): Promise<AuthResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update user profile with first and last name if provided
    if (firstName || lastName) {
      const displayName = [firstName, lastName].filter(Boolean).join(' ').trim();
      if (displayName) {
        await updateProfile(userCredential.user, {
          displayName
        });
      }
    }
    
    return { user: userCredential.user };
  } catch (error: any) {
    console.error('Sign up error:', error);
    return { 
      user: null, 
      error: error.message || 'Failed to create account' 
    };
  }
};

export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error: any) {
    console.error('Sign in error:', error);
    return { 
      user: null, 
      error: error.message || 'Failed to sign in' 
    };
  }
};

export const logOut = async (): Promise<{ error?: string }> => {
  try {
    await signOut(auth);
    return {};
  } catch (error: any) {
    console.error('Sign out error:', error);
    return { error: error.message || 'Failed to sign out' };
  }
};

export { auth };
