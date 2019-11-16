import * as firebase from "firebase/app";
import "firebase/auth";


const app = firebase.initializeApp({

    apiKey: "AIzaSyCbHoZVX18F54StfBV2LBcADDy9M_I-rtE",
    authDomain: "fir-react-assignment1.firebaseapp.com",
    databaseURL: "https://fir-react-assignment1.firebaseio.com",
    projectId: "fir-react-assignment1",
    storageBucket: "fir-react-assignment1.appspot.com",
    messagingSenderId: "538360856344",
    appId: "1:538360856344:web:d28bd1c035689ae93a286d",
    measurementId: "G-FR83JMDP49"

});

export default app;