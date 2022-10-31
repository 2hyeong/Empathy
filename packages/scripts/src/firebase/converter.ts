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
