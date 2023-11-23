document.addEventListener("DOMContentLoaded", function() {
  // Firebase auth state change listener
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      location.replace("welcome.html");
    }
  });

  // Function to handle login
  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
      });
  }

  // Function to handle sign up
  function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
      });
  }

  // Function to handle password reset
  function forgotPass() {
    const email = document.getElementById("email").value;
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("Reset link sent to your email id");
      })
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
      });
  }
});
