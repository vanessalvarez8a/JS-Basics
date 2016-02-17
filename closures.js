//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}

//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  var inner = outer();

//Once you do that, invoke inner.

  inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF(('435-215-9248'));
};

callFriend();


//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //I PLACED THE WHOLE ANSWER WITH THE QUESTION ABOVE



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  function makeCounter() {
    var counter = 0;
    return function() {
      return (counter++); //counter +=1  or counter++ and start the counter in 0
    }
  }
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'.
  Write a second function named codeFriend that accepts the first function 
  as it's first parameter. The second function should return a new third function. 
  Store the third function in a variable, codeEcho which, when invoked, invokes 
  the first, original function that was passed in, but will only ever do so 
  once (returns null after first invocation).
*/

    function codeLove() {
    return 'I love code';
  }

  function codeFriend(func) {
    var call = false;
    return function() {
      // if call its false then the code inside will run  
      if (!call) {
        call = true; 
        return func();
      }
    }
  }

  var codeEcho = codeFriend(codeLove); //code love gets call as many times but codeEcho just one
  codeEcho() // is a function that invokes I love code


// THIS IS WILSONS EXPLANATION!!!! (I LIKE IT MORE)

  function codeLove() {
    return "I love code"
  }

  function codeHate() {
    return "I hate code";
  }

  function codeFriend(banana) {
    var firstTime = true;
    return function() {
      if(firstTime) {
        firstTime =!firstTime;
        return banana();
      }
      return null; // this will make it to run it once 
    }
  }
var codeEcho = codeFriend(codeLove);
console.log(codeEcho());


//Next Problem

/*
  write a function called 'fnCounter' 
  that accepts two parameters. The first parameter will be an anonymous 
  function and the second parameter, 'N', will be a number. Now, in 'fnCounter', 
  allow the anonymous funciton to be invoked 'N' number of times. After it's been
  invoked 'N' number of times, return 'STOP'.
*/



function whatever() {
  return ;
}
function fnCounter(fn, n) {

   for (var i = 0; i < n; i++) {
      fn();
   }
   return "stop";
}
fnCounter(whatever, 5);




//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function 
  (without running the code) then below write what you expect to happen 
  when the funciton is invoked. *Hint: setTimeout calls a function or evaluates 
  an expression after a specified number of milliseconds.

    //Answer Here


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here


  Fix the counter function so that it works the way you expect it to work. 
  (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
*/




function counter() {
  for (var i=1; i<=5; i++) {
    function timer(banana) {
      setTimeout(function() {
        console.log(banana);
      }, banana * 1000);
    }
    timer(i)
    console.log(i);
  }
}
counter();

//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/

// este no me quedo muy claro 
var funcArray = [];
var func = function (num) {
    return (function(){ 
      return num;
    })
  }
for (var i = 0; i < 6; i++) {
  funcArray.push(func(i))
};
var n = func();
n();


