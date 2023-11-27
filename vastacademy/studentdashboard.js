// JavaScript source code
// Firebase configuration
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Check if a user is logged in
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in, fetch and display user details
        const userID = user.uid;

        // Fetch user details from Firestore and populate the dashboard
        // For example:
        db.collection("users").doc(userID).get().then(doc => {
            if (doc.exists) {
                const userData = doc.data();

                // Update the dashboard elements with user-specific data
                document.getElementById('userName').innerText = userData.name;
                document.getElementById('userCourses').innerText = userData.courses.join(', ');

                // Fetch and display attendance, fees, points, achievements, etc.
                // Update respective sections with the fetched data
            } else {
                console.log("No such document!");
            }
        }).catch(error => {
            console.log("Error getting document:", error);
        });
    } else {
        // No user is signed in, handle accordingly (redirect to login, etc.)
        console.log("No user signed in.");
    }
});
