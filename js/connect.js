  // Initialize Firebase
  (function() {
  const config = {
    apiKey: "AIzaSyCKycJQsfspfhQBB-8k0lUnInQyQarwhWk",
    authDomain: "contactform-9faba.firebaseapp.com",
    databaseURL: "https://contactform-9faba.firebaseio.com",
    projectId: "contactform-9faba",
    storageBucket: "contactform-9faba.appspot.com",
    messagingSenderId: "484922392758"
  };
  firebase.initializeApp(config);
  }());
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}