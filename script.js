var firebaseConfig = {
    apiKey: "AIzaSyDFFzASR1DwGSyr8bnXdkXw86la7ERWWVU",
    authDomain: "storedatafromform.firebaseapp.com",
    projectId: "storedatafromform",
    storageBucket: "storedatafromform.appspot.com",
    messagingSenderId: "1052356586318",
    appId: "1:1052356586318:web:96b0481734153d101ccc1f",
    measurementId: "G-VJ5ZXXLPES"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database()





function handleMe() {

    console.log("I'm Clicked and Saved")
    alert("I am saved");
    var userName = document.getElementById('userName').value;
    var pwd = document.getElementById('pwd').value;
    // var password = document.getElementById('password').value;
    // var html = document.getElementById('html').value;
    // var css = document.getElementById('css').value;
    // var javascript = document.getElementById('javascript').value;

    database.ref('users/' + userName).set({
        // fullName: fullName,
        // email: email,
        // password: password,
        // html: html,
        // css: css,
        // javascript: javascript

        userName: userName,
        pwd: pwd
    })


}
