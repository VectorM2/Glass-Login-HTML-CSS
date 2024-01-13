import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
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

const provider = new FacebookAuthProvider();
auth.languageCode = 'en';


const facebook = document.getElementById("facebook");
facebook.addEventListener("click", function (event) {
 event.preventDefault()

 signInWithPopup(auth, provider)
  .then((result) => {
   // The signed-in user info.
   const user = result.user;

   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
   const credential = FacebookAuthProvider.credentialFromResult(result);
   const accessToken = credential.accessToken;

   // IdP data available using getAdditionalUserInfo(result)
   // ...
  })
  .catch((error) => {
   // Handle Errors here.
   const errorCode = error.code;
   const errorMessage = error.message;
   // The email of the user's account used.
   const email = error.customData.email;
   // The AuthCredential type that was used.
   const credential = FacebookAuthProvider.credentialFromError(error);

   // ...
  });
})


