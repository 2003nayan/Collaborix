"use server";

import { adminDb } from "@/firebase-admin";
import liveblocks from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
  // auth().protect();
  // const { sessionClaims } = await auth();

  const { userId, sessionClaims } = await auth();

  if (!userId || !sessionClaims?.email) {
    throw new Error("User is not authenticated or email is missing");
  }

  const docCollectionRef = adminDb.collection("documents");
  const docRef = await docCollectionRef.add({
    title: "New Doc",
  });

  await adminDb
    .collection("users")
    .doc(sessionClaims.email)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: sessionClaims.email,
      role: "owner",
      createdAt: new Date(),
      roomId: docRef.id,
    });

  /*
    await adminDb
      .collection("users")
      .doc(sessionClaims?.email!)
      .collection("rooms")
      .doc(docRef.id)
      .set({
        userId: sessionClaims?.email!,
        role: "owner",
        createdAt: new Date(),
        roomId: docRef.id,
      });
  */

  return {
    docId: docRef.id,
  };
}

export async function deleteDocument(roomId: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  console.log("deleteDocument", roomId);

  try {
    // Delete the document reference itself
    await adminDb.collection("documents").doc(roomId).delete();

    const query = await adminDb
      .collectionGroup("rooms")
      .where("roomId", "==", roomId)
      .get();

    const batch = adminDb.batch();

    // Delete the room reference in the users collection for every user in the room
    query.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();

    // Delete the room in liveblocks
    await liveblocks.deleteRoom(roomId);

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}

export async function inviteUserToDocument(roomId: string, email: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  console.log("Inviting user to document", roomId, email);

  try {
    await adminDb
      .collection("users")
      .doc(email)
      .collection("rooms")
      .doc(roomId)
      .set({
        userId: email,
        role: "editor",
        createdAt: new Date(),
        roomId,
      });

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}

export async function removeUserFromDocument(roomId: string, email: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  console.log("RemoveUserFromDocument", roomId, email);

  try {
    await adminDb
      .collection("users")
      .doc(email)
      .collection("rooms")
      .doc(roomId)
      .delete();

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}
