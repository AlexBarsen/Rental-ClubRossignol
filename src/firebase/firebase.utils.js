import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// * configuration object containing keys  and identifiers for the app
const firebaseConfig = {
  apiKey: "AIzaSyCj3yuLXBSSvg1_LC5g13W_9IZYY1TnYds",
  authDomain: "rental-clubrossignol.firebaseapp.com",
  projectId: "rental-clubrossignol",
  storageBucket: "rental-clubrossignol.appspot.com",
  messagingSenderId: "365390353464",
  appId: "1:365390353464:web:e260ab42c41afc412ec2cd",
  measurementId: "G-XFKS4JRCR1",
};

// * initialize firebase
firebase.initializeApp(firebaseConfig);

// * get/connect auth and firestore from firebase API
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// * createUserProfileDocument() = async await function which creates a new user if it doesn’t already exists
export const createUserPorfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // * get a reference at /users/userAuth.uid (reference the user colllection)
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // * get snapShot of the userRef
  const snapShot = await userRef.get();

  // const collectionSnapshot = await collectionRef.get();
  // console.log({ collection: collectionSnapshot.docs.map((doc) => doc.data()) });

  // * if the Snapshot doesn’t exist, then destructure the email of userAuth() and proceed with creating the user document
  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      //*  create document with user data in the userRef(“/users”) collection
      await userRef.set({
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// functions which adds rental.data.js to firestore
export const addCollectionAndDocuments = async (
  CollectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(CollectionKey);

  const batch = firestore.batch();

  console.log(objectsToAdd);
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  // returns a promise => return null if it succedes
  return await batch.commit();
};

export const convertRentalsSnapshotToMap = (rentals) => {
  const transformedRentals = rentals.docs.map((doc) => {
    const { categoryName, products } = doc.data();

    return {
      id: doc.id,
      categoryName,
      products,
    };
  });

  return transformedRentals.reduce((accumulator, rentals) => {
    accumulator[rentals.categoryName.toLowerCase()] = rentals;
    return accumulator;
  }, {});
};

// * googleSignIn with PopUp
// store googleAuthProvider
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

// function for signing in with GooglePopup -> will be used in sign-in.component
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
