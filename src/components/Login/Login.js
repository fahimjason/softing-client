import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Login.css'

// Add the Firebase services 
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };



    var provider = new firebase.auth.GoogleAuthProvider();

    // Google Sign in
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signInUser = { name: displayName, email: email, img: photoURL };
                setLoggedInUser(signInUser);
                storeAuthToken();
                console.log(loggedInUser);
                // ...
            }).catch((error) => {

            });


        // Set Auth Token in sessionStorage
        const storeAuthToken = () => {
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
                .then(function (idToken) {
                    sessionStorage.setItem('token', idToken);
                    history.replace(from);
                }).catch(function (error) {
                    // Handle error
                });
        }
    }

    return (
        <div className="form-signin text-center p-4 mt-5 bg-light">
            <form>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="pt-2">Or</p>
            </form>
            <button onClick={googleSignIn} className="w-100 btn btn-lg btn-danger" type=""><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></button>
        </div>
    );
};

export default Login;