# TableMade — React Native Boilerplate

Cozy/homey cooking app scaffold with:
- Redux Toolkit
- SafeAreaView default wrapper
- Navigation aligned to IA (SignIn → Onboarding → Pantry → Generate → RecipeDetail → CookMode → Favorites → Grocery → Settings)
- Custom splashscreen
- Sign-in: Email, GitHub (OAuth via AuthSession), Apple (native)
- Firebase Auth + Firestore integration

## Quickstart
```bash
npm install
npm run start
```

## Env & Config
Add Firebase config in `app.json` via env vars or inline. Create `.env` with:
```
EXPO_PUBLIC_GITHUB_CLIENT_ID=your_github_client_id
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
```

### Notes
- GitHub/Apple sign-in flows require a tiny backend to exchange tokens for Firebase Custom Tokens. Stubs are in `src/hooks/useAuth.ts`.
- Replace splash/icon images in `/assets` with your branding.

## Info Architecture Routes
- `SignIn` → `Onboarding` → `Pantry` → `Generate` → `RecipeDetail` → `CookMode` → `Favorites` → `Grocery` → `Settings`
