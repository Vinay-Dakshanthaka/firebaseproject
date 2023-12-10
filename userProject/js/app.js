import { firebaseConfig, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, app, addDoc, collection, db } from "./configuration.js";

const auth = getAuth(app)

/*form validation*/
function validateForm() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone');
    const email = document.getElementById("emial")
    //to remove extra spaces to match passwords
    const phoneNumber = phone.value.trim();

    const nameErr = document.getElementById("nameErr")
    const passwordLengthErr = document.getElementById("passwordLengthErr")
    // const emailErr = document.getElementById("emailErr")
    const confirmPasswordErr = document.getElementById("confirmPasswordErr")
    const ageErr = document.getElementById("ageErr")
    const phoneErr = document.getElementById("phoneErr")

    // Name validation
    if (name.length < 3) {
        nameErr.style.display = "block"
        return false;
    } else {
        nameErr.style.display = "none"
    }

    // //email validation
    // if ( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    //     emailErr.style.display = "block"
    //     return false;
    // } else {
    //     emailErr.style.display = "block"
    // }

    // Phone number validation
    if (!/^\d{10}$/.test(phoneNumber)) {
        phoneErr.style.display = "block"
        return false;
    } else {
        phoneErr.style.display = "none"
    }
    // Password lenth validation
    if (password.length < 6) {
        passwordLengthErr.style.display = "block"
        return false;
    } else {
        passwordLengthErr.style.display = "none"

    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        confirmPasswordErr.style.display = "block"
        return false;
    } else {
        confirmPasswordErr.style.display = "none"

    }

    // Date of Birth validation 
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();

    if (age < 10) {
        ageErr.style.display = "block"
        return false;
    } else {
        ageErr.style.display = "none"

    }
    return true;
}
/*validation code ends here*/


/*Create user and add the data to firestore*/
const registerForm = document.getElementById("registerForm");
//form submit event 
registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const name = document.getElementById("name").value
    const phone = document.getElementById("phone").value
    const address = document.getElementById("address").value
    const dob = document.getElementById("dob").value

    const success = document.getElementById("success")
    //check whether validation is success or not 
    if (validateForm()) {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userUid = userCredential.user.uid;
                console.log("Account created successfully")
                
        const docRef =  addDoc(collection(db, "user"), {
            name: name,
            email: email,
            password: password,
            phone: phone,
            address: address,
            dob: dob ,
            uid:userUid
        })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
        console.log("user created successfully");

        //to display success message
        success.innerText = "Account Created Successfully"
        success.style.display = "block"

        setTimeout(() => {
            window.location.href = "./signin.html"
        }, 3000);
    } else {
        console.log("validation error");
    }
});


