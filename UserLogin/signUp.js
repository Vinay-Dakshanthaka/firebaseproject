import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/7.14.0/firebase/auth";

const signUpForm = document.getElementById("signUpForm")

const firebaseConfig = {
    apiKey: "AIzaSyAI1nt0P9R22S2mVHum_QuhGT1VDv4dVVo",
    authDomain: "authentication-abfe0.firebaseapp.com",
    projectId: "authentication-abfe0",
    storageBucket: "authentication-abfe0.appspot.com",
    messagingSenderId: "139689547021",
    appId: "1:139689547021:web:22d397cde8a08f93bacc44",
    measurementId: "G-W7H14MLBYB"
  };
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = getAuth();
signUpForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const firstName = document.getElementById("firstName").value 
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const password = document.getElementById("password").value
    db.collection("userData").add({
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone
    }).then((ref)=>{
        console.log(ref)
    }).catch((error)=>{
        console.log(error)
    })

//     createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log("user created successfully");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode,errorMessage);
//     // ..
//   });
})