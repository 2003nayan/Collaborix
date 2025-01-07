import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
/* 
- initializeApp: Initializes a Firebase app instance with the provided configuration.
- getApps: Checks if any Firebase app instances are already initialized in the current environment.
- getApp: Retrieves the default Firebase app instance if it is already initialized.
- getFirestore: Sets up and provides access to Firestore, Firebase's NoSQL database. 
*/

const firebaseConfig = {
  apiKey: "AIzaSyAysx25h98tKQTy8BuZLIkQyibweXFXXec",
  authDomain: "collaborix-9ced7.firebaseapp.com",
  projectId: "collaborix-9ced7",
  storageBucket: "collaborix-9ced7.firebasestorage.app",
  messagingSenderId: "1074785078986",
  appId: "1:1074785078986:web:bb85d76d2fcc338a10ee33",
};
/* 
Purpose: Provides project-specific credentials to initialize Firebase.

- apiKey: Unique key used to authenticate requests to Firebase.
- authDomain: Domain for Firebase Authentication (handles user login/authentication).
- projectId: Unique identifier for your Firebase project.
- storageBucket: URL for Firebase Storage (manages file uploads and storage).
- messagingSenderId: ID for Firebase Cloud Messaging (handles push notifications).
- appId: Unique identifier for the Firebase app instance.
*/

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
/* 
- Checks if no Firebase app instances are currently initialized.
- If none, initializes a new app instance using `firebaseConfig`.
- Otherwise, retrieves the already initialized app instance.
- This prevents multiple initializations, which can cause runtime errors.
*/

const db = getFirestore(app);
/* 
- Initializes Firestore (Firebase's NoSQL database) using the Firebase app instance.
- Firestore is used for storing and querying data in real-time.
*/

export { db };
/* 
- Exports the `db` object, making it reusable across the project.
- Other files can import `db` to interact with Firestore.
*/
