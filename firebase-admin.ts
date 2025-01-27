import {
  initializeApp,
  getApps,
  getApp,
  App,
  cert,
  ServiceAccount,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Custom type for the full service key structure (optional)
type FullServiceAccount = {
  projectId: string;
  privateKey: string;
  clientEmail: string;
  [key: string]: string | undefined; // To allow additional properties
};

// Construct the service account object
const serviceKey: FullServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID!,
  privateKey: process.env.FIREBASE_PRIVATE_KEY!,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
  privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
  authUri: process.env.FIREBASE_AUTH_URI,
  tokenUri: process.env.FIREBASE_TOKEN_URI,
  authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
  clientX509CertUrl: process.env.FIREBASE_CLIENT_CERT_URL,
  universeDomain: process.env.FIREBASE_UNIVERSE_DOMAIN,
};

// Explicitly cast to `ServiceAccount` for Firebase Admin SDK
const validServiceAccount: ServiceAccount = {
  projectId: serviceKey.projectId,
  privateKey: serviceKey.privateKey,
  clientEmail: serviceKey.clientEmail,
};

let app: App;

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(validServiceAccount),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };
