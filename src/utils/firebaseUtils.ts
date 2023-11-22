import { firestore } from "firebase-admin";

type DocumentData = firestore.DocumentData;
type DocumentReference = firestore.DocumentReference<DocumentData>;

export const db = firestore();

export async function createDocument(collection: string, data: DocumentData) {
  const docRef = db.collection(collection).doc();
  await docRef.set(data);
  return docRef;
}

export async function readDocument(docRef: DocumentReference) {
  const doc = await docRef.get();
  if (doc.exists) {
    return doc.data();
  } else {
    throw new Error("Document not found"); 
  }
}

export async function updateDocument(
  docRef: DocumentReference,
  data: Partial<DocumentData>
) {
  await docRef.update(data);
}

export async function deleteDocument(docRef: DocumentReference) {
  await docRef.delete();
}
