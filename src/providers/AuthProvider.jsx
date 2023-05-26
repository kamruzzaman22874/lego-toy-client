import {
	createUserWithEmailAndPassword,
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
    
	const signUp = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const googleSingIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider)
	}
	const githubSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider)
	}
    const logOut = () => {
        setLoading(true);
        signOut(auth)
    }

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);
	const authInfo = {
		user,
		loading,
		signUp,
		login,
		googleSingIn,
		githubSignIn,
		logOut,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
