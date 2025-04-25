//classes are a blyeprint or template for object creation
//properties aur methods ek baar likhna is sufficient


//classes and objects
//objects are a collection of properties and methods
// let dog = {
//     dogName:"JavaScript",
//     weight:2.4,
//     color:"brown",
    
// };

// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         //left class ka attribute hai right waala function parameter or variable defined in the function
//         this.prop2=prop2;
//     }
// }
// let obj = new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

//this keyword refers to the object it belongs to,so it is the first property of the instance of ClassName and classes are just some special function beneath the surface

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("JavaScript","2.4","brown","chohuaha");
// // console.log(dog.dogName);
// // console.log(dog.weight);
// // console.log(dog.color);
// // console.log(dog.breed);
// console.log(dog.dogName,"is a",dog.breed, "and",dog.color,"and",dog.breed);


//Contructors=>invoked at the time of object creation
//class name with capital
//there can be only one constructor in a program
// class Person {
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p= new Person("kashish","singh");
// console.log("Hi",p.firstname);


//METHODS
//Functions on a class are called methods.When defining these methods,we dont use function keyword.we start directly with name
// class Person {
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("hi there! I'm",this.firstname);
//     }
//     compliment(name,object){
//         return "That's a wonderful" + object+ ","+name;

//     }
// }
// let p= new Person("Jatin","singh");
// p.greet();
// let compliment=p.compliment("Harry","hat");
// //apne hi attributes bna kar krenge
// console.log(compliment);
// PROPERTIES-> they atre sometimes called the field hold the data of the class
// class Person
// {
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person("malik","van putten");
// console.log("hi",p.firstname);
// private
// class Person{
//     #firstname
//     #lastname
//     constructor(firstname,lastname){
//                 this.firstname=firstname;
//                 this.lastname=lastname;
//             }
//         }
//         let p=new Person("malik","van putten");
//         console.log("hi",p.firstname);
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname)
//     {
//         if(firstname.startsWith("M")){
//             this.#firstname=firstname;
//         }else
//         {
//             this.#firstname="M"+firstname;
//         }
//         this.#lastname=lastname
//     }

// }
// let p=new Person("kay","waxon");
// console.log(p.firstname);
// class Person {
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }

//     get firstname() {
//         return this.#firstname;
//     }

//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }

//     get lastname() {
//         return this.#lastname;
//     }

//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }
// let p=new Person("JATIN","SINGH");
// console.log(p.firstname);
// INHERITANCE
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move() {
//         console.log("moving at", this.currentSpeed);
//     }

//     accelerate(amount) {
//         this.currentSpeed +=amount;
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);  
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }
// }
// let myBike = new Motorcycle("black", 60, 200, "pet");

// console.log("Color:", myBike.color);
// console.log("Current Speed:", myBike.currentSpeed);
// console.log("Max Speed:", myBike.maxSpeed);
// console.log("Fuel:", myBike.fuel);

// myBike.move();
// myBike.accelerate(40);
// myBike.move();
// myBike.doWheelie();
//PROTOTYPES->A prototype is the mechanism in JavaScript that makes it possible to have objects.When nothing is specified when creating a class, the objects inherit from the object.prototype prototype.
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there! I'm", this.firstname);
//     }
//     introduce() {
//         console.log("Hi, I'm", this.firstname);
//     }
// }
// Person.prototype.favoriteColor = "green";
// let p = new Person("jatin", "singh");
// console.log(p.favoriteColor);
// p.introduce();
