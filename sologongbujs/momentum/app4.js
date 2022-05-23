const age = parseInt(prompt("How old are you?"));

console.log(age);
console.log(isNaN(age));

if (isNaN(age)) {
  console.log("please write a number");
} else {
  console.log("Thanks");
  if (age < 18) {
    console.log("You are too young");
  } else if (age >= 18 && age < 50) {
    console.log("You can drink");
  } else {
    console.log("you can't drink. You are too old!");
  }
}
