// const fruits = new Map([
//     ['apples', 500],
//     ['bananas', 200],
//     ['oranges', 300]
// ]);

// // const fruits = new Map();
// // fruits.set('apples', 500);
// // fruits.set('bananas', 200);
// fruits.set('oranges', 700);
// console.log(fruits);
// console.log(fruits.get('apples'));
// console.log(typeof fruits);
// console.log(fruits instanceof Map);


//JAVASCRIPT MAP METHODS

// fruits.delete("apples");
// console.log(fruits.size);
// fruits.clear();
// console.log(fruits.size);
// console.log(fruits.has("apples"));

// let text="";
// fruits.forEach(function(value,key){
//     text+=key+'='+value;
// })
// console.log(text);
// console.log(typeof(text));

// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);
// let text="";
// for(const x of fruits.keys())
// {
//     text+=x;
// }
// console.log(text);
// let text="";
// for(const x of fruits.values())
// {
//     text+=x;
// }
// console.log(text);
// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};

// const fruits = new Map();

// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);  

// console.log(fruits.get(apples));  
// console.log(fruits.get(bananas)); 
// console.log(fruits.get(oranges));
// const fruits=[
//     {name:"apples",quantity:300},
//     {name:"bananas",quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"kiwi",quantity:150}
// ];
// console.log(fruits)

// function myCallback({quantity}){
//     return quantity>200?"ok":undefined;
// }

// const result=Map.groupBy(fruits,myCallback); 
//JAVA SCRIPT DESTRUCTURING
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50
// };
// let{firstName,lastName,age,country="India"}=person;
// console.log(firstName);
// console.log(lastName)
// console.log(age)
// console.log(country)
// let name="GurukulTheSchools";

// let[a1,a2,a3,a4,a5]=name;
// console.log(a1,a2,a3,a4,a5)
// const fruits=["Bananas","Oranges","Apples","Mangos"];

// let[fruit1,fruit2]=fruits;
// console.log(fruit1,fruit2)

// const [first, , , fourth] = fruits;
// console.log(first, fourth);
// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruit1,fruit2)
// const numbers=[10,20,30,40,50,60,70];

// const[a,b,...rest]=numbers;
// console.log(numbers)
// console.log(a,b,rest)
// const fruits=new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);

// let text="";
// for(const[key,value] of fruits){
//     text+=key + " is " + value;
// }
// console.log(text)
// let firstName="John";
// let lastName="Singh";
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName);
// console.log(lastName);
// let x=5;
// let z=x**2;
// console.log(z);
// let x=5;
// let z=Math.pow(x,2);
// console.log(z);
// let x=5;
// x**=2;
// console.log(x);
// JAVA SCRIPT ARRAY INCLUDES
// const fruits=["Banana","Orange","Apple","Mango"];
// console.log(fruits.includes("Banana",3));
// training commas 
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr.length);
// const sparseArray=[1,,,4,5,,]
// console.log(sparseArray)
// console.log(sparseArray.length)
// const person={
//     firstName:"John",
//     lastName:"Davis",
//     age:30,
// }
// console.log(person)

// const person={
//     firstName:"John",
    
//     ,

//     age:30,
// }
// console.log(person)

// function createRectangle(
    // w, //width of the rectangle
    // h   //height of the rectangle
// ){}

