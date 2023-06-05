import React, { createContext, useEffect, useState } from 'react';

import app from '../firebase.init';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () => {
        return signOut(auth);
    }

    /* Checking user current state */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, signIn, userSignOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;