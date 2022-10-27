import * as admin from "firebase-admin";
import { firebaseAdminConfig } from "./config";

try {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseAdminConfig),
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

const db = admin.firestore();

export { db };
