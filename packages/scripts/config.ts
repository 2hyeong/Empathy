// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || '',
  appId: process.env.FIREBASE_APP_ID || '',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
  databaseURL: process.env.FIREBASE_DATABASE_URL || '',
  projectId: process.env.FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || '',
  // Optional emulator config (see below for options)
  emulator: {
      // Optional host, defaults to `localhost`
      host: 'localhost',
      // Optional port, defaults to `3001`
      port: 3001,
  },
};

export const naverConfig = {
  clientId: process.env.NAVER_CLIENT_ID || '',
  clientSecret: process.env.NAVER_CLIENT_SECRET || '',
}

export const kakaoConfig = {
  clientId: process.env.KAKAO_CLIENT_ID || '',
  clientSecret: process.env.KAKAO_CLIENT_SECRET || ''
}