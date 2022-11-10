import {
  DocumentData,
  FirestoreDataConverter,
  WithFieldValue,
} from "@google-cloud/firestore";
import { components } from "idl";

export const userConverter: FirestoreDataConverter<any> = {
  toFirestore: (
    user: WithFieldValue<components["schemas"]["User"]>
  ): DocumentData => user,
  fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) =>
    snap.data() as components["schemas"]["User"],
};

export const friendConverter: FirestoreDataConverter<any> = {
  toFirestore: (
    friend: WithFieldValue<components["schemas"]["Friend"]>
  ): DocumentData => friend,
  fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) =>
    snap.data() as components["schemas"]["Friend"],
};
