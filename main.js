//setting up firebase with our quizz app
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyD0Sbt7qW1uVN9NnoIpYTq_sJIxZRMV8cM",
    authDomain: "quizz-app-e6479.firebaseapp.com",
    projectId: "quizz-app-e6479",
    storageBucket: "quizz-app-e6479.appspot.com",
    messagingSenderId: "774283150778",
    appId: "1:774283150778:web:6413f8f0b50387f9040983",
    measurementId: "G-8CZK8S79E5"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

  // // sign up function
  // const signUp = () => {
  //   let email = document.getElementById('email').Value; 
  //   let password = document.getElementById('password').value;
  //   console.log(email,password);

  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //   .then((result) => {
  //     // Signed in 
  //     document.write('you are signed in');
  //     console.log(result);
  //     // ...
  //   })
  //   .catch((error) => {
  //     console.log(error.code);
  //     console.log(error.message);
  //     // ..
  //   }); 
  // }

  // setting up firebase with our website
// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyDxBXchuAv8px0ZlziNWVGkYJyE5uMfelI",
//   authDomain: "auth-form-89a5e.firebaseapp.com",
//   projectId: "auth-form-89a5e",
//   storageBucket: "auth-form-89a5e.appspot.com",
//   messagingSenderId: "800339173862",
//   appId: "1:800339173862:web:4f1783d50b3843a6937627"
// });
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password)
  // firebase code
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          document.write("You are Signed Up")
          console.log(result)
          // ...
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
          // ..
      });
}

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase.auth().onAuthStateChanged(function(user)
  {
    if(user)  
    {
      console.log(user);
      // window.location.href="quizapp .html";
      // console.log(user);
    }

  }
  
  )
     
   

    }
 