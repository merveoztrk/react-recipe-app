// import React, { useCallback, useContext } from "react";
// import { WithRouter, Redirect } from "react-router";
// import app from "../components/Base.js"
// import { AuthContext } from "./Auth";
// import { Input, Button } from "antd";

// const Login = ({ history }) => {
//     const handleLogin = useCallback(
//         async event => {
//             event.preventDefault();
//             const { email, password } = event.target.elements;
//             try {
//                 await app
//                     .auth()
//                     .signInWithEmailAndPassword(email.value, password.value);
//                 history.push("/");
//             } catch (error) {
//                 alert(error);
//             }
//         },
//         [history]
//     );
//     const { currentUser } = useContext(AuthContext);

//     if (currentUser) {
//         return <redirect to="/authhome" />
//     }

//     return (
//         <div>
//             <h1>Log in</h1>
//             <form onSubmit={handleLogin}>
//                 <label>
//                     Email
//                     <Input name="email" type="email" placeholder="Email" />
//                 </label>
//                 <label>
//                     Password
//                     <Input name="password" type="password" placeholder="Password" />
//                 </label>
//                 <Button type="submit">Log in</Button>
//             </form>
//         </div>
//     )
// }
// export default Login
