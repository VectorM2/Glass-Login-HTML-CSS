import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBQT9wF-uZ5xu2daJmWdLDuxQRhyfyDfuo",
    authDomain: "login-html-css.firebaseapp.com",
    projectId: "login-html-css",
    storageBucket: "login-html-css.appspot.com",
    messagingSenderId: "307123670646",
    appId: "1:307123670646:web:450221785169f87ca79957"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, function (user) {
    if (user) {
        const currentUser = auth.currentUser;
        document.getElementById("email").value = currentUser.email;
        document.getElementById("username").value = currentUser.displayName;
    } else {
        window.location.href = "index.html";
    }
});

const logout = document.getElementById("logout");
logout.addEventListener("click", function (event) {
    event.preventDefault();
    signOut(auth).then(
        function () {
            alert("Logging out...");
            window.location.href = "index.html";
        }
    ).catch(function () {
        alert("Error, can't logout...");
    });
});

const confirmReset = document.getElementById("confirmReset");
confirmReset.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    sendPasswordResetEmail(auth, email)
        .then(function () {
            alert("Password reset email sent!");
            location.reload();
        })
        .catch(function (error) {
            alert(error.message);
        });
});
