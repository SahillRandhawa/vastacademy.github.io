// Firebase Configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5-ow4YS3r98QIcfMyT4JLJJmzjDfmCbc",
  authDomain: "authentication-608f0.firebaseapp.com",
  databaseURL: "https://authentication-608f0-default-rtdb.firebaseio.com",
  projectId: "authentication-608f0",
  storageBucket: "authentication-608f0.appspot.com",
  messagingSenderId: "574744795723",
  appId: "1:574744795723:web:aedc90dce5a85278a58bce",
  measurementId: "G-EBFQEFYH2P"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Main JavaScript Logic
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if the entered email and password exist in the database (student or admin)
  // You may use Firebase Authentication or Firestore queries for this check

  // Example using Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Successful login
      const user = userCredential.user;
      const email = user.email;

      // Check user type based on credentials (for example, using email domain or database field)
      if (email.endsWith('@example.com')) {
        // Redirect to user panel
        window.location.href = 'user-panel.html';
      } else if (email.endsWith('@admin.com')) {
        // Redirect to admin panel
        window.location.href = 'admin-panel.html';
      } else {
        // Handle unrecognized user type or show an error message
        alert('Invalid credentials.');
      }
    })
    .catch((error) => {
      // Handle login errors
      alert('Login failed. Please check your email and password.');
    });
}
