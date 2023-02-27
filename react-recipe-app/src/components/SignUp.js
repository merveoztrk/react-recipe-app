// import React, { useCallback } from 'react'
// import { withRouter } from 'react-router'
// import app from "../components/Base"
// import { Input, Button } from "antd";


// const SignUp = ({ history }) => {
//     const handleSignUp = useCallback(async event => {
//         event.preventDefault();
//         const { email, password } = event.target.elements;
//         try {
//             await app
//                 .auth()
//                 .createUserWithEmailAndPassword(email.value, password.value);
//             history.push("/authhome");
//         } catch (error) {
//             alert(error);
//         }
//     }, [history])

//     return (
//         <div>
//             <h1>Sign Up</h1>
//             <form onSubmit={handleSignUp}>
//                 <label>
//                     <Input name="email" type="email" placeholder="Email"></Input>
//                 </label>
//                 <label>
//                     <Input name="password" type="password" placeholder="Password"></Input>
//                 </label>
//                 <Button type="submit">Sign Up</Button>
//             </form>
//         </div>
//     )
// }

// export default SignUp;

{/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyABZU4aHUQ04cYw-xkidh4dz5h98fE0UFU",
    authDomain: "react-recipe-app-d741c.firebaseapp.com",
    databaseURL: "https://react-recipe-app-d741c-default-rtdb.firebaseio.com",
    projectId: "react-recipe-app-d741c",
    storageBucket: "react-recipe-app-d741c.appspot.com",
    messagingSenderId: "880168687838",
    appId: "1:880168687838:web:009506daa11e7a49398a4f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script> */}


