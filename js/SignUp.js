import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import {ref,set} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
import {auth,database} from "./firebaseconfiguration.js";


document.getElementById("signupForm").addEventListener("submit",(event)=>{
    event.preventDefault()
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    document.getElementById("submitbutton").innerText="loading..."

    //console.log("userdetails",firstName,lastName,email,password)

    createUserWithEmailAndPassword(auth,email,password).then ( (userCredentials)=>{
        const userID = userCredentials.user.uid 
        set( 
            ref(database,"user/"+userID),{
            firstname : firstName,
            lastname : lastName,
            email : email,
            password : password,
            userid : userID,
        }
    ).then (()=>{
        alert("user signed up successfully")
        document.getElementById("submitbutton").innerText="done"

    }).catch ((error)=>{
        alert(error.message)
    })
})
})