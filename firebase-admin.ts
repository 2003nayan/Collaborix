import { initializeApp, getApps, getApp, App, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
// import serviceKey from "@/service_key.json"; // Import the JSON file
// import serviceKey from "./service_key.json";
const serviceKey = JSON.parse(process.env.FIREBASE_SERVICE_KEY || "");

let app: App;

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceKey), // Cast the JSON object
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };
