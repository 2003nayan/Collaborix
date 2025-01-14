import {
  initializeApp,
  getApps,
  getApp,
  App,
  cert,
  ServiceAccount, // Import the type
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceKey from "@/service_key.json"; // Import the JSON file

let app: App;

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceKey as ServiceAccount), // Cast the JSON object
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };
