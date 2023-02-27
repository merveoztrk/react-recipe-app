// import Base from "antd/lib/typography/Base";
//import * as firebase from "firebase/app";
// import "firebase/auth";
                // import { initializeApp } from "firebase/app";
                // import { getAuth } from 'firebase/auth'

                // const firebaseConfig = {
                //     apiKey: "AIzaSyABZU4aHUQ04cYw-xkidh4dz5h98fE0UFU",
                //     authDomain: "react-recipe-app-d741c.firebaseapp.com",
                //     databaseURL: "https://react-recipe-app-d741c-default-rtdb.firebaseio.com",
                //     projectId: "react-recipe-app-d741c",
                //     storageBucket: "react-recipe-app-d741c.appspot.com",
                //     messagingSenderId: "880168687838",
                //     appId: "1:880168687838:web:009506daa11e7a49398a4f"
                // };

// /* PrivateRoute exact path="/authhome" component={AuthHome} */
// /* Route exact path="/login" component={Login} */
// /* Route exact path="/signup" component={SignUp} */

// export default app;
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)