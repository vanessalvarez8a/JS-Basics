//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
  if(name === "Tyler") {
    return true;
  }
  else {
    return false;
  }
}
isTyler("Tyler");

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName() {
  var askName = prompt("whats your name?");
  return askName;
}
getName();

//Next Problem


//Create a function called welcome that uses your getName function you created in 
//the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.


function welcome() {
  var user = getName();
  alert('Welcome, ' + getName());
}
welcome();

//Next problem


//What is the difference between arguments and parameters?

  // arguments are the values that is passed when the function is called
  // parameters will be variables define in a function 


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //null, undefined, Nan, false, 0, '' you can check with the 2 exclamations !!



//Next Problem



//Create a function called myName that returns your name
var name = 'vanessa';
function myName() {
  var name = 'vanessa';
  return name;
}  
myName();

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.
var name = 'vanessa';
function outerFn() {
  return function() {
    return name;
  }
}


//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
innerFn();
