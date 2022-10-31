import { cert, getApps, initializeApp } from "firebase-admin/app";
import { FirestoreDataConverter, getFirestore } from "firebase-admin/firestore";
import { firebaseAdminConfig } from "../config";
import _ from "lodash";

const convertKeysToSnakeCase = (firebaseAdminConfig: {}) =>
  _.mapKeys(firebaseAdminConfig, (value, key) => _.snakeCase(key));

!getApps().length &&
  initializeApp({
    credential: cert(convertKeysToSnakeCase(firebaseAdminConfig)),
    databaseURL: firebaseAdminConfig.databaseURL,
  });

export const firestore = getFirestore();

export const db = {
  getAll: async (field: string, converter: FirestoreDataConverter<any>) => {
    const snapshots = await firestore
      .collection(field)
      .withConverter(converter)
      .get();
    return snapshots.docs.length
      ? snapshots.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      : [];
  },
  get: (field: string) => {
    return {
      where: async (doc: string, converter: FirestoreDataConverter<any>) => {
        const document = await firestore
          .collection(field)
          .withConverter(converter)
          .doc(doc)
          .get();
        return document.data();
      },
    };
  },
  update: (field: string, body: {}) => {
    return {
      where: async (doc: string) =>
        await firestore.collection(field).doc(doc).update(body),
    };
  },
};
