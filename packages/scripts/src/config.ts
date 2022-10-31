// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseClientConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "",
  // Optional emulator config (see below for options)
  emulator: {
    // Optional host, defaults to `localhost`
    host: "localhost",
    // Optional port, defaults to `3001`
    port: 3001,
  },
};

export const firebaseAdminConfig = {
  type: "service_account",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  privateKeyId: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY_ID || "",
  privateKey: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY
    ? process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n")
    : "",
  clientId: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_ID || "",
  clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL || "",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "",
  authUri: process.env.NEXT_PUBLIC_FIREBASE_AUTH_URI || "",
  tokenUri: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_URI || "",
  authProviderX509CertUrl:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_PROVIDER_X509_CERT_URL || "",
  clientX509CertUrl:
    process.env.NEXT_PUBLIC_FIREBASE_CLIENT_X509_CERT_URL || "",
};

export const naverConfig = {
  clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || "",
  clientSecret: process.env.NAVER_CLIENT_SECRET || "",
};

export const kakaoConfig = {
  clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || "",
  clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
};
