const form = document.getElementById("contactForm")
const alert = document.querySelector(".alert")

const firebaseConfig = {
  apiKey: "AIzaSyB3D3ag7-Ykk9vrH_WAdEsRN4MGNVYrQhI",
  authDomain: "contactformfirestore.firebaseapp.com",
  projectId: "contactformfirestore",
  storageBucket: "contactformfirestore.appspot.com",
  messagingSenderId: "470411372748",
  appId: "1:470411372748:web:9b5231c5737e36ef49fa69",
  measurementId: "G-XBBS0JLK3R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()


//saving data to firestore database
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value
  const phone = document.getElementById("phone").value
  alert.style.display = "block"

  db.collection("contacts").add({
    name: name,
    email: email,
    message: message,
    phone: phone
  }).then((ref)=>{
      console.log(ref.id)
  }).catch((error)=>{
    console.log(error)
  })

  setTimeout(() => {
    alert.style.display = "none"
  }, 2000)
  form.reset();
})