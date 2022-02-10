import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyCKJHN5vrHEKUJPFY0RCJTsvGm-aBvU7Fc",
	authDomain: "ty-crwn-clothing-db.firebaseapp.com",
	projectId: "ty-crwn-clothing-db",
	storageBucket: "ty-crwn-clothing-db.appspot.com",
	messagingSenderId: "1097559679512",
	appId: "1:1097559679512:web:153c0eccb8fbc69f2f196d",
	measurementId: "G-PC6QYF5X51",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("Error creating user.", error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
