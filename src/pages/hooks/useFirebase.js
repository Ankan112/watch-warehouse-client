import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Firebase/Firebase.init";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, signInWithPopup } from "firebase/auth";

// initialize firebase app
initializeFirebase();




const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser)
                saveUser(email, name, 'POST')
                // Send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                navigate('/')

            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });
    }

    const loginUser = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                // Signed in 
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });
    }

    const signInWithGoogle = (location, navigate) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/'
                navigate(destination)
            }).catch((error) => {


            });
    }
    // observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unsubscribe;
    }, [auth])
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then()
    }
    return {
        user,
        admin,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
    }
}
export default useFirebase;