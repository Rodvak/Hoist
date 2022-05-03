// GIVEN
console.log(example);
var example = "I'm the example!";
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// GIVEN 1
console.log(hello);
var hello = 'world';
// var hello;
// logs undefined because of the position og the log

// GIVEN 2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// logs magnet because the log is inside the function

// GIVEN 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// logs super cool because we are printing the global varible. Function hasn't been called.

// GIVEN 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'fish';
    console.log(food);
}
// logs chicken, our global variable
// function is executed and half-chicken is printed first and fish second.

// GIVEN 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// logs error, mean is a variable, not a function.

// GIVEN 6 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// first log logs undefined since we have a log before asigning genre variable
// function gets called and logs rock, r&b, and our disco variable since it is global and we log outside the function.

// GIVEN 7 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// first log logs san jose.
// function gets executed
// first log inside the function prints seattle
// second log inside the function logs burbank 
// log outside the function logs san jose again, our global variable.

// GIVEN 8 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
    dojo.hiring = true;
    }
    else if(dojo.students <= 0){
    dojo = "closed for now";
    }
    return dojo;
}
// error because you are not pushing anything to the dictionary







