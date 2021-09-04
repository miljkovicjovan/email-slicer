// html target variables
var error = document.getElementById('error');

var inputCont = document.getElementById('input-cont');

var resultCont = document.getElementById('result-cont');

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');

var emailSpan = document.getElementById('email');
var usernameSpan = document.getElementById('username');
var domainSpan = document.getElementById('domain');

// when submit was pressed 
submit.addEventListener('click', e => {
    // check the values 
    checkValues(fname, lname);
});
document.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        checkValues(fname, lname);
    }
});

// function to check the values and display an errors
function checkValues(fname, lname) {
    var firstName = fname.value;
    var lastName = lname.value;

    // regex for names
    var reg = /^[a-z ,.'-]+$/i;

    //reset no error look 
    error.style.color = "#343A3F";

    // only if the variables have values
    if (firstName && lastName) {
        if (reg.test(firstName) && reg.test(lastName)) {
            // if both regex are correct then make the results
            makeResults(firstName, lastName);
        } else {
            if (!reg.test(firstName)) {
                error.style.color = "red";
                error.innerHTML = "Error: First Name value is not correct"
            }
            if (!reg.test(lastName)) {
                error.style.color = "red";
                error.innerHTML = "Error: Last Name value is not correct"
            }
        }
    } else {
        error.style.color = "red";
        error.innerHTML = "Error: You haven't added the values that are needed"
    }
}

// function to make the results (username/email/domain)
function makeResults(firstName, lastName) {
    // create email 
    var email = lastName.toLowerCase() + firstName.toLowerCase() + "@email.com"

    // create username
    var username = "@" + firstName.toLowerCase() + lastName.toLowerCase();

    // create domain name 
    var domain =  lastName.toLowerCase() + firstName.toLowerCase() + ".com";

    // pass the variables to the last function to display in the results cont
    displayResults(email, username, domain);
}

// function to display the result cont 
function displayResults(email, username, domain) {
    // add the results in the HTML variables
    emailSpan.innerHTML = email;
    usernameSpan.innerHTML = username;
    domainSpan.innerHTML = domain;
}