// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";

// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyC_7tiEUOUjt6KRwbJdcWDpPQJyP7KOOFM",
  authDomain: "coco-e485d.firebaseapp.com",
  databaseURL: "https://coco-e485d-default-rtdb.firebaseio.com",
  projectId: "coco-e485d",
  storageBucket: "coco-e485d.appspot.com",
  messagingSenderId: "907452866792",
  appId: "1:907452866792:web:0985307376730c2baf695d",
};

// Initialize Firebase
const cong = initializeApp(firebaseConfig);

export default cong;
