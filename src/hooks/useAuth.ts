import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import * as AppleAuth from 'expo-apple-authentication';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

WebBrowser.maybeCompleteAuthSession();

export function useEmailAuth() {
  return {
    signIn: (email: string, password: string) => signInWithEmailAndPassword(auth, email, password),
    signOut: () => signOut(auth),
  };
}

export function useGithubAuth() {
  const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
  };
  const clientId = process.env.EXPO_PUBLIC_GITHUB_CLIENT_ID ?? 'YOUR_GITHUB_CLIENT_ID';
  const redirectUri = AuthSession.makeRedirectUri({ scheme: 'tablemade' });

  async function signIn() {
    const request = new AuthSession.AuthRequest({
      clientId,
      scopes: ['read:user', 'user:email'],
      redirectUri,
    });
    await request.promptAsync(discovery);
    // Exchange code on backend → Firebase custom token
  }

  return { signIn };
}

export function useAppleAuth() {
  async function signIn() {
    const available = await AppleAuth.isAvailableAsync();
    if (!available) return;
    const credential = await AppleAuth.signInAsync({
      requestedScopes: [AppleAuth.AppleAuthenticationScope.FULL_NAME, AppleAuth.AppleAuthenticationScope.EMAIL],
    });
    // Send credential.identityToken to backend → Firebase custom token
    return credential;
  }
  return { signIn };
}
