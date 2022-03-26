import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDMyPIMV4aOlBMASAKgYsKn1Kmi5T9-lJ0",
  authDomain: "school-attendance-6f5dc.firebaseapp.com",
  databaseURL: "https://school-attendance-6f5dc-default-rtdb.firebaseio.com",
  projectId: "school-attendance-6f5dc",
  storageBucket: "school-attendance-6f5dc.appspot.com",
  messagingSenderId: "651432576725",
  appId: "1:651432576725:web:4e22c98c361a322c63c45c"
};

  firebase.initializeApp(firebaseConfig)


export default firebase.database()