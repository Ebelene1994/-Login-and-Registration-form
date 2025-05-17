/*import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { auth } from "./firebaseconfiguration.js";

document.getElementById("signinForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    document.getElementById("signinButton").innerText = "Loading...";

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Sign-in successful!");
            document.getElementById("signinButton").innerText = "Done";
            //redirect to userList.html page
            window.location.href = "userList.html";
        })
        .catch((error) => {
            alert(error.message);
            document.getElementById("signinButton").innerText = "Sign In";
        });
}); */
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { auth } from "./firebaseconfiguration.js";

document.getElementById("signinForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    document.getElementById("signinButton").innerText = "Loading...";

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Sign-in successful!");
            document.getElementById("signinButton").innerText = "Redirecting...";
            
            // Redirect to user list page after short delay
            setTimeout(() => {
                window.location.href = "userList.html";
            }, 1000);
        })
        .catch((error) => {
            alert(error.message);
            document.getElementById("signinButton").innerText = "Sign In";
        });
});

