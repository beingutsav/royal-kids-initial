// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-KSEO-mhNzpegt49imN0z4JLuukrGbCo',
  authDomain: 'royal-kids-web-jsons.firebaseapp.com',
  projectId: 'royal-kids-web-jsons',
  storageBucket: 'royal-kids-web-jsons.appspot.com',
  messagingSenderId: '474233881693',
  appId: '1:474233881693:web:d66b718523a23c224ab9b4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Retrieve the database instance
const db = getDatabase(app);

// Reference to the "features" data
const featuresRef = ref(db, 'royal-kids-data/features');

// Listen for changes in the data
onValue(featuresRef, (snapshot) => {
  const featuresData = snapshot.val();
  // Process the retrieved data here
  console.log(featuresData);
});

// Export the Firebase database instance and the features reference
export { db, featuresRef };
