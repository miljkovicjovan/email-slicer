// html target variables
var error = document.getElementById('error');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');

// when submit was pressed 
submit.addEventListener('click', e => {
    // check the values 
    checkValues(fname, lname);
    // make the results
    // remove the input and display the results
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
    console.log(firstName + lastName);
}