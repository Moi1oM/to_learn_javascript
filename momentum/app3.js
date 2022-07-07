function sayHello(nameOfPerson, age) {
  console.log("Hello " + nameOfPerson + " and i am ", +age);
}
function divide(a, b) {
  console.log(a / b);
}

const player = {
  name: "sw",
  sayHi: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName);
  },
};

sayHello("sw", 21);
sayHello("js", 22);
sayHello("soy", 22);
divide(3, 2);
player.sayHi("lynn");
