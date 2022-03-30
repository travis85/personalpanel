
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js'
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'

 const firebaseConfig = {
  apiKey: "AIzaSyALtDsQYt2b8HL9Pc521cea0Lr-MTqfLSs",
  authDomain: "learning-3e6bc.firebaseapp.com",
  projectId: "learning-3e6bc",
  storageBucket: "learning-3e6bc.appspot.com",
  messagingSenderId: "256886774930",
  appId: "1:256886774930:web:3a11206b8bb8a5b5a89a4b",
  measurementId: "G-RY4HQPCM6Q"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

$(document).ready(() =>{
     $("#submit").click(()=>{
        signInWithEmailAndPassword(auth, $("#email").val(), $("#password").val())
        console.log($("#email").val(), $("#password").val())

        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
            
        });
    })

    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=42.3314&lon=-83.0458&units=imperial&appid=b4fa144032812000e6b11d9ef3fec132")
    .then((response)=>{
        const min = Math.floor(response.data.daily[0].temp.min)
        const max = Math.floor(response.data.daily[0].temp.max)
        $("footer").append(`${min} Low - ${max} High`)

        console.log(min,max)
    })
    .catch((error)=> {
        console.log(error)
    })

})

