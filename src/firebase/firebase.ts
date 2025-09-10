// src/firebase/firebase.ts
import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  Auth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, Firestore } from "firebase/firestore";
import Constants from "expo-constants";

// Augment globalThis so TypeScript knows our cache exists.
declare global {
  // eslint-disable-next-line no-var
  var __TABLEMADE_FB__:
    | { app: FirebaseApp; auth: Auth; db: Firestore }
    | undefined;
}

function getConfig() {
  const cfg = (Constants.expoConfig?.extra as any)?.firebase;
  if (!cfg)
    throw new Error(
      "Firebase config missing in app.json (expo.extra.firebase)"
    );
  return cfg;
}

function createFirebase() {
  const cfg = getConfig();

  // Ensure a single App
  const app = getApps().length
    ? getApp()
    : initializeApp({
        apiKey: cfg.apiKey,
        authDomain: cfg.authDomain,
        projectId: cfg.projectId,
        storageBucket: cfg.storageBucket,
        messagingSenderId: cfg.messagingSenderId,
        appId: cfg.appId,
      });

  // Ensure a single Auth (initialize once, then getAuth thereafter)
  let auth: Auth;
  try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (e: any) {
    // If Fast Refresh re-runs this file, initializeAuth will throw.
    if (e?.code === "auth/already-initialized") {
      auth = getAuth(app);
    } else {
      throw e;
    }
  }

  const db = getFirestore(app);
  return { app, auth, db };
}

// Reuse across Fast Refresh and multiple imports
if (!globalThis.__TABLEMADE_FB__) {
  globalThis.__TABLEMADE_FB__ = createFirebase();
}

export const { app, auth, db } = globalThis.__TABLEMADE_FB__;
