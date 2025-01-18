function Animal(name) {
  this.name;
}
Animal.prototype.speak = function () {
  console.log(`Hi, i'm ${this.name}`);
};
const cat = new Animal(`Fluffy`);
cat.speak();
