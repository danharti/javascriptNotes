# javascriptNotes
notes for javascript

example:
lightbox - http://lokeshdhakar.com/projects/lightbox2/
parallax example - http://davegamache.com/parallax/
full screen form - http://tympanus.net/Development/FullscreenForm/

Tools:
? http://brackets.io/

Syntax - a programming language's commands, special words and punctuation

Javascript statement 
- sentence
- ends with semicolon

A program is composed of multiple statements.
A set of statements that run one after the other.
One statement needs to be complete before the next statement runs.

HTML - content
CSS - style
JavaScript - interactivity

Each browser has a JS interpreter.
Javascript interpreter - reads all the statements in your program and does what the statement says to do.
Running (executes) a program - when a browser reads and acts on JS program

Javascript files - must end with .js

to connect it to html file: <script src="scripts.js"></script>
src = source attributes

or you can do <script>//add your code here</script>

position:
1. usually just before the closing head tag
2. just before the closing body tag

Advantage: if it is place in #2 - let's the browser load and display any HTML before running the JavaScript.

Javascript console shortcut:
Chrome - Command + Option + J (mac), Control + shift + J (windows)
Firefox -  Command + Option + K (mac), Control + shift + k (windows)
Internet explore - f12 key
Safari - Command + Option + C (mac)

Reserve words for naming variables:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

How to name:
Variables
- names can't start with number
- names can only contain letters, numbers, $, _




Variables
- we place values in them

Type of values:
1. Numbers
  - we can use to form calculations
2. Strings
  - start with ' ' or " ". To put a quote mark in a string  
  - "They've." or use \'   ---> "They\'ve"
  - '<h1 class="container">They</h1>'; or use '<h1 class=\"container\">They</h1>';
3.


Objects eg. string, document, browser's console
Property eg. length of string
Method - these are actions the objects can perform

------------
Numbers
Integer - whole numbers (positive and negative)
Floating Point Numbers - with decimals
Scientific Notation - 10e-8, 19e-4

+, - , *, /
+=, -=, *=, /=

parseInt - integer (whole numbers)
parseFloat - float (decimal numbers)


function
- declaring a function
- naming convention same with variables
- creating a function - no semicolon

function functionName(){
  //code here
}

{ } - code block

To use the function - you CALL the function:
function name parenthesis then semicolon
functionName();

place functions created on top of the file as reference

function expression - let's you assign a function to a variable
**ends with semicolon
var functionName = function (){
  //code here
};

anonymous function - function without a name
to call it, same with how you call a function.

return - returning a value, function gives something back when they finish.
function functionName() {
  return "a string";
}
functionName(); ---> results to ---> a string

***return statement exits the function immediately, make sure it is the last statement inside your function.
***can return only one value

How you can send information to a function?
To give information to function:
parameter - is the variable (parameter name) - stores the value of the argument
argument - value or info

Passing an argument to a function:

Loop 
- a loop is a way to repeat the same actions a certain number of times, or until a certain condition is true.


While Loop - will not execute if test condition is false

while (testCondition) {

}
- as long as the condition is true it will just run the loop

Do While Loop: - this will execute at least once. Run first before checking the condition.

do {

} while (testCondition)

For Loops - used for actions that needs to run a particular number of times
          - usually use with arrays
          
for (var counter = 0; counter < 5; counter +=1) {
  //code here
}


**** 
helper files --- 
library
module
plugin 
