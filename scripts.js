function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform login validation here
    
    // Redirect to dashboard page if login is successful
    window.location.href = "dashboard.html";
  }
  
  function forgotPassword() {
    var username = document.getElementById("username").value;
    
    // Perform forgot password functionality here
    
    alert("An email has been sent to your registered email address with password reset instructions.");
  }
  
  function loginWithGoogle() {
    // Perform login with Google functionality here
    
    // Redirect to dashboard page if login is successful
    window.location.href = "";
  }
  
  function loginWithFacebook() {
    // Perform login with Facebook functionality here
    
    // Redirect to dashboard page if login is successful
    window.location.href = "dashboard.html";
  }

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDirpY4yZh0-bzTVVHH2lMwmHRGU0SZQ9E",
    authDomain: "login-271d2.firebaseapp.com",
    projectId: "login-271d2",
    storageBucket: "login-271d2.appspot.com",
    messagingSenderId: "884827386281",
    appId: "1:884827386281:web:fcd7ec8f2002f3463694b8",
    measurementId: "G-1DKVCJ3742"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
