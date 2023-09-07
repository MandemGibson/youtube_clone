import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn6mtq8savXTOJHzHxQJCYlBn5ZlG3uRw",
  authDomain: "clone-a91f0.firebaseapp.com",
  projectId: "clone-a91f0",
  storageBucket: "clone-a91f0.appspot.com",
  messagingSenderId: "315453777228",
  appId: "1:315453777228:web:b40535a81f09c21a0f5be9",
  measurementId: "G-FR5SCNKS30",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
