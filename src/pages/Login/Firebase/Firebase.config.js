// require('dotenv').config()
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    name: process.env.REACT_APP_NAME,
    apiKey: "AIzaSyDFXg0lZCqYkwTzXhTnf61geD9ezY5O2Ow",
    authDomain: "watch-warehouse.firebaseapp.com",
    projectId: "watch-warehouse",
    storageBucket: "watch-warehouse.appspot.com",
    messagingSenderId: "443085643501",
    appId: "1:443085643501:web:3883286d0271aa1c37f6e4"
};
console.log(firebaseConfig)
export default firebaseConfig;