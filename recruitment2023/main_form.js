const firebaseConfig = {
    apiKey: "AIzaSyA-0hYwjKf1WR7t86fzMvjc108hz6-VSKQ",
    authDomain: "form-58f0a.firebaseapp.com",
    databaseURL: "https://form-58f0a-default-rtdb.firebaseio.com",
    projectId: "form-58f0a",
    storageBucket: "form-58f0a.appspot.com",
    messagingSenderId: "287349648289",
    appId: "1:287349648289:web:eb4ae8d122b119d38c79e0"
};
//Editing on 6Feb2023
window.googleDocCallback = function () { return true; };


//Editing on 6Feb2023

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("recruitmentForm");
document.getElementById("recruitment_form").addEventListener("submit", submitForm);

//Html form to Google sheets Linking
// "https://script.google.com/macros/s/AKfycbxVO4l9YOMl90wcmb2oiht4qxZx6iKlxqnShMtK9qlgPQ1iRjodv06udmWO17_8qNXmWQ/exec";
// "https://script.google.com/a/macros/nmit.ac.in/s/AKfycbxSJcH1SIyTwvK-3P7ng8FPtoKonRAfQiziKIULGeYKZCxhTThwz0LPbpJhPlQI-alP/exec"; - New app script link
// "https://script.google.com/macros/s/AKfycbxsnQsi9EO5Hyx4md-ucyyNOB8o1Gk8sH2onlwgUblkRKwoTVfyPeK_Ln9xLoOg9XUk/exec"; Updated 7Feb2023


const scriptURL =
"https://script.google.com/macros/s/AKfycbxsnQsi9EO5Hyx4md-ucyyNOB8o1Gk8sH2onlwgUblkRKwoTVfyPeK_Ln9xLoOg9XUk/exec";
const form = document.forms["google-sheet"];

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var branch = getElementVal("branch");
    var year = getElementVal("year");
    var usn = getElementVal("usn");
    var email=getElementVal("email");
    var phone = getElementVal("phone");
    var q1 = getElementVal("q1");
    var q2 = getElementVal("q2");
    var q3 = getElementVal("q3");
    var q4 = getElementVal("q4");

    saveMessages(name, branch, year, usn,email, phone, q1, q2, q3,q4);
    // console.log(name, branch, year, usn,email, phone, q1, q2, q3);
    // document.querySelector(".alert").style.display = "block";
    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);
    
    //Fetching data from HTML form to GoogleSheets
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => alert("Form submitted! Thank you"))
  .catch((error) => console.error("Error!", error.message));
    
    //   reset the form
    document.getElementById("recruitment_form").reset();
}




const saveMessages = (name, branch, year, usn,email, phone, q1, q2, q3,q4) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        branch: branch,
        year: year,
        usn: usn,
        email:email,
        phone: phone,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
    });

};


const getElementVal = (id) => {
    return document.getElementById(id).value;
};
