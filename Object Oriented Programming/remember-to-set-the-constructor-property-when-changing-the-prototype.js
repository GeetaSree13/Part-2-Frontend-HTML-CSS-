function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Dog.prototype.constructor = Dog;
