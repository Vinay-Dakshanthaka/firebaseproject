const form = document.getElementById("contactForm")
const alert = document.querySelector(".alert")

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCZeXw0i-nyGneNQa-hLHfrRTNaNFTz_aE",
    authDomain: "contactform-f5d3f.firebaseapp.com",
    databaseURL: "https://contactform-f5d3f-default-rtdb.firebaseio.com",
    projectId: "contactform-f5d3f",
    storageBucket: "contactform-f5d3f.appspot.com",
    messagingSenderId: "815949362049",
    appId: "1:815949362049:web:a3060a2d519451bca2ee80",
    measurementId: "G-1J24Q91D1Z"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()

  const ref = database.ref("messages")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    const phone = document.getElementById("phone").value
    alert.style.display="block"

    ref.push({
        name:name,
        email:email,
        message:message,
        phone:phone
    })

    console.log(name, email, message)

    setTimeout(()=>{
        alert.style.display="none"
    },2000)
    form.reset();
})