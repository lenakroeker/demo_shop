import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOajqSFrUPuswEHRmP2PDxMKm2AyGqpao",
  authDomain: "demoshop-f6e7c.firebaseapp.com",
  databaseURL: "https://demoshop-f6e7c-default-rtdb.firebaseio.com/",
  projectId: "demoshop-f6e7c",
  storageBucket: "demoshop-f6e7c.appspot.com",
  messagingSenderId: "997025273692",
  appId: "1:997025273692:web:cb62275f6cc61b57cb9399",
};

const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase as default, storage };
