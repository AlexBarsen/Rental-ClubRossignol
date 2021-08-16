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

// * createUserProfileDocument() = async await function which:
// * 1. returns the user reference (userRef) if the user exists
// * 2. creates user document and returns reference if the doesn't
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // * get a reference at /users/userAuth.uid (reference the user document)
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // * get snapShot of the userRef
  const snapShot = await userRef.get();

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

// * function which adds data.js to firestore
export const addCollectionAndDocuments = async (
  CollectionKey,
  objectsToAdd
) => {
  // * firestore collection reference
  const collectionRef = firestore.collection(CollectionKey);

  // * groups all calls into a single object
  const batch = firestore.batch();

  // * function which creates a document for each object (in data.js) in firestore
  objectsToAdd.forEach((obj) => {
    // * reference to document from the collection
    const newDocRef = collectionRef.doc(); // * firestore will automatically set an ID

    // * create document at 'newDocRef' with the 'object'
    batch.set(newDocRef, obj);
  });

  // * batch.commit() returns null if the the .set() succeeds
  return await batch.commit();
};

// * converts Snapshot object
export const convertRentalsSnapshotToMap = (rentals) => {
  const transformedRentals = rentals.docs.map((doc) => {
    // * destructe properties from the document
    const { categoryName, products } = doc.data();

    // * return final object with desired data
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

// * function which get's the current signed in user
// * 1. returns user object if singed in
// * 2. returns null(reject) if used isn't signed in
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export default firebase;
