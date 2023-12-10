import { firebaseConfig, signInWithEmailAndPassword, getAuth, getDocs, signOut, app, addDoc, collection, db, query, where } from "./configuration.js";

const auth = getAuth(app)

const success = document.getElementById("success")

document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("signInForm");

    signInForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                success.innerText = "Login Successful";
                success.style.display = "block";
                // Store user UID in sessionStorage
                sessionStorage.setItem('userUID', user.uid);
                setTimeout(() => {
                    window.location.href = "userHome.html";
                }, 3000);

                console.log("successful");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                window.location.href = "signin.html";
            });
    });
});

// userHome.html page
document.addEventListener("DOMContentLoaded", async function () {
    // Retrieve user UID from sessionStorage
    const userUID = sessionStorage.getItem('userUID');

    if (userUID) {
        try {
            // Fetch user details from Firestore using userUID
            const userDoc = await getDocs(collection(db, "user", userUID));
            const userData = userDoc.data();

            // Display user details in the userDetails div
            const userDetailsDiv = document.getElementById("userDetails");
            userDetailsDiv.innerHTML = `
                <p><strong>Name:</strong> ${userData.name}</p>
                <p><strong>Email:</strong> ${userData.email}</p>
                <p><strong>Phone:</strong> ${userData.phone}</p>
                <p><strong>Address:</strong> ${userData.address}</p>
                <p><strong>DOB:</strong> ${userData.dob}</p>
            `;
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    } else {
        console.error("User UID not found in sessionStorage.");
    }
});

//logout button
// const logout = document.getElementById("logout")
// logout.addEventListener("click", () => {
//     signOut(auth).then(() => {
//         console.log("logged out ")
//         window.location.href = "signin.html"
//     }).catch((error) => {
//         console.log(error)
//     })
// })



