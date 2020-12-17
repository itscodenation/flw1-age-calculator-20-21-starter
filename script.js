// [x] Create a new variable that stores the user's birth year.
// [x] This variable should hold the birth year that the user inputs on the page.
// [x] Create a new variable to store the age of the user.
// [x] Calculate the user's age by subtracting their birth year from the year you live in today. Store the result in the age variable.
// [x] Append the user's age to the message div.
// [x] Add a name input so the app can display a more personalized message.
// [x] Extension: Add another input for the user to put in the current year and do the math from there so the app always works
// [ ] Extension: Style your app any way you want.


let birthYear = null;
let age = null;
let name = null;
let currentYear = null;


$("button").click(function() {
  console.log('year:', birthYear)
  console.log('age:', age)
  birthYear = $(".year").val();
  console.log('year:', birthYear)
  currentYear = $(".current-year").val();
  age = (currentYear - birthYear)
  console.log('age:', age)
  name = $(".name").val();
  $(".message").html(`${name} is ${age} cool`);
});
