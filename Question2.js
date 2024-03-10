/*
2.1.
○ Define unshift(), shift() and split()
○ Using the topic of “CFGdegree”, provide an example of unshift(), shift() and
split(). (E.g.The theme could be the different CFGdegree streams.)

unshift() is one of the Array methods. It adds one or more elements to the beginning of an array. It modifies the original array
and returns the new length of the array.
Syntax: unshift(element1), unshift(element1,.... , elementN)
It accepts one or more elements to add to the front of the array. If more
elements are passed, they will be added as a chunk at the beginning. In terms of performance, if will be slower than push
as it needs to 1. move all the existing elements to the right and update their indexes, 2. add the new element and
3. update the length property. This might not be too noticeable with short arrays, but for arrays with a large number of
elements, it will take more time to move them, what means more in-memory operations.

shift() is another method of Array. It modifies the array by removing the first element from an array (at the 0th index) and
returns that removed element. If the length property is 0,'undefined' is returned instead.
Syntax: shift()
After the removal, all other elements in the array are shifted one position to the left,
and their indexes are updated accordingly. The length property of the array is also decremented by one.
In terms of performance, shift() is be slower than pop() because it needs to 1. remove the first element (at index 0),
2. move all the remaining elements one position to the left, renumbering the indexes, and 3. update the length property.

split() is a String method that can be used to convert String into an Array. It does not modify the original String, but creates
a new array based on the parameters.
Syntax: split(separator, limit)
Based on the specified separator (pattern that describes where to split the string), it will split a string into an array of substrings.
If separator is missing (i.e. split()) a new array will contain 1 element, which will be the original string, if the separator is
an empty string (i.e. split('')), the new array will contain each of the characters of the original string as a separate element
Limit is an optional paramater and when used, it determines the number of elements to be used in the array. If Limit is passed
as 0, the new array will be empty [] and if the string runs out of character before the limit is reached, the new array will be shorter
*/

// Examples:
const CFGdegree = "Software Engineering, Full Stack, Data";
console.log(`Original String: ${CFGdegree}`);

// create an array from the CFGdegree string
let CFGdegreeArray = CFGdegree.split(", ");
console.log(`Newly created Array: `, CFGdegreeArray);

// add new stream to the beginning of the array
const newLength = CFGdegreeArray.unshift("Product Management");
console.log(
  `Product Management has now been added, the new array has length: ${newLength}`,
  CFGdegreeArray
);

// remove the Product Management
const removed = CFGdegreeArray.shift();
console.log(
  `${removed} has now been removed from the CFGdegree, remaining paths are: ${CFGdegreeArray.join(
    ", "
  )}`
);

/*
2.2.
○ Define object methods
○ Using the topic of “Programming Languages”, create a new object and object
methods.

Object methods are built-in functions that are defined as properties within an object. These methods are associated
with the object and can access the object's properties and perform actions related to the object's behavior.
They are a great way to organise code related to an object and encapsulate functionality within the object itself.
They provide a clean way to define behavior associated with the object.
*/

// Example

let programmingLanguages = {
  familiarLanguages: ["JavaScript", "Python", "Java", "SQL"],
  printFamiliarLanguages: function () {
    console.log(
      `Familiarity with these programming Languages:\n`,
      this.familiarLanguages.join("\n ")
    );
  },
  addNewFamiliarLanguage: function (newLanguage) {
    this.familiarLanguages.push(newLanguage);
    console.log(`${newLanguage} has been successfully added to the list.`);
  },
};

programmingLanguages.printFamiliarLanguages();
programmingLanguages.addNewFamiliarLanguage("C");
programmingLanguages.printFamiliarLanguages();

/*
2.3.
○ Explain the onmouseover event
○ Explain two other DOM events of your choosing

The onmouseover event is a DOM event triggered when the mouse pointer moves over an element or one of its child elements.
It is often used to perform actions like changing the appearance of an element or displaying additional information.
We can either listen to it with addEventListener (addEventListener("mouseover", (event) => {})),
or we can add it to HTML: <element onmouseover="myFunction"> or in JavaScript: onmouseover = (event) => {}.
All methods achieve the same result, but using addEventListener is often preferred for separating HTML
structure from JavaScript behavior.

The onchange event is a DOM event triggered when the value of an input element changes. It is often used with form
elements like text input fields, dropdowns, or checkboxes. The event occurs after the user has altered the content and
then either clicked outside the input field or pressed the Enter key.
Just like with onmouseover, the onchange event can also be handled using addEventListener in
JavaScript (addEventListener("change", (event) => {})), which is often
preferred for better code organization and separation of HTML structure from JavaScript behavior.
However, it can still be added to HTML: <element onchange="myFunction"> or in JavaScript: onchange = (event) => {}.

The input event is a DOM event triggered when the value of an input element changes. Unlike the onchange event,
the input event is triggered immediately as the user interacts with the input field, whether by typing, pasting, or deleting text.
It provides real-time feedback and is often used for tasks that require continuous monitoring of input changes.
This event can be used with various input types, such as text fields, checkboxes, radio buttons, etc.
Similarly to onmouseover and onchange, the input event can be handled using addEventListener in
JavaScript (addEventListener("input", (event) => {})), which is recommended for better code organization
and separation of HTML from JavaScript. Alternatively, it can be added to HTML as <element oninput="myFunction">
or in JavaScript: object.oninput = (event) => {}.
*/