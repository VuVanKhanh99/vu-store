import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDNsbQDT4VH0amiRCt-ofpZJ9OyZwhwl9E",
    authDomain: "login-page-c64c7.firebaseapp.com",
    projectId: "login-page-c64c7",
    storageBucket: "login-page-c64c7.appspot.com",
    messagingSenderId: "834293654883",
    appId: "1:834293654883:web:9cda118c72ec2b78551f56",
    measurementId: "G-8ZDBTZVLEJ"
  };
  
const fire =  firebase.initializeApp(firebaseConfig);

export default fire;