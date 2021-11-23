const firebaseConfig = {
    apiKey: "AIzaSyCkifQUEZxbZNk0zrtasHNZC19WH7M5hns",
    authDomain: "kwitter-f7b44.firebaseapp.com",
    databaseURL: "https://kwitter-f7b44-default-rtdb.firebaseio.com",
    projectId: "kwitter-f7b44",
    storageBucket: "kwitter-f7b44.appspot.com",
    messagingSenderId: "909721523108",
    appId: "1:909721523108:web:52ad917bfa451d3619a731"
  };
  
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();