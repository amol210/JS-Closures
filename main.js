// 1
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// output:alert box opens on webpage

// 2
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

// output:1 0

// 3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
// output:3

// 4. Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function areaOfReactangleouter(length){
  function areaOfReactangleinner(breadth){
    return length * breadth;
  }
  return areaOfReactangleinner;
}
console.log(areaOfReactangleouter(10)(20));


//5.Take a variable in outer function and create an inner function to increase the counter every time it is called
function outer(){
    var count= 0;
    function inner(){
       return count +=1;
    }
    return inner;
}
var counter = outer()
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());

 
// 6."Print Output
var a = 12;
(function () {
  alert(a);
})();

// output:alert box opens on webpage

// 7.
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
// output:alert box opens on webpage

// 8
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
// Output:
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
