document.getElementById("studentLoginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Login using email
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Handle successful login
            const user = userCredential.user;
            location.replace("studentdashboard.html"); // Redirect to student interface page
        })
        .catch((error) => {
            // Handle login errors for email
            document.getElementById("error").innerHTML = error.message;
        });
});
