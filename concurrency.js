// //call back//
// //just a function //
// function dosometing(callback){
//     callback();
// }
// function sayHi (){
//     console.log("hi!");
// }
// function judge(grade) {
//     switch (grade) {
//         case "A":
//             console.log("You get an", grade + ":", "Amazing!");
//             break;
//         case "B":
//             console.log("You get a", grade + ":", "Well Done");
//             break;
//         case "C":
//             console.log("You get a", grade + ":", "Good effort!");
//             break;
//         case "D":
//             console.log("You get a", grade + ":", "Keep trying!");
//             break;
//         default:
//             console.log("Invalid grade.");
//     }
// }

// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case (score >= 90):
//             grade = "A";
//             break;
//         case (score >= 80):
//             grade = "B";
//             break;
//         case (score >= 70):
//             grade = "C";
//             break;
//         case (score >= 60):
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);k;   

//PROMISES//

//When resolve()is called ,the promises is presumed to be successful and whetever is between the 
//arrow is reture and used as input for the method of the promises Object.//
//let promise = new Promise(function(resolve, reject) {
    //     let x = 20;
    //     if (x > 10) {
    //         resolve("x");
    //     } else {
    //         reject("too low");
    //     }
    // });
    
    // promise.then(function(value) {
    //         console.log("Success:", value);
    //     })
    //     .catch(function(error) {
    //         console.log("Error:", error);
    //     });
    // const promise = new Promise((resolve, reject) => {
    //     resolve("success!");
    // });
    
    // promise
    //     .then(value => {
    //         console.log(value); 
    //         return "we";
    //     })
    //     .then(value => {
    //         console.log(value); 
    //         return "can";
    //     })
    //     .then(value => {
    //         console.log(value); 
    //         return "chain";
    //     })
    //     .then(value => {
    //         console.log(value); 
    //         return "promises";
    //     });

    //async and await//
with the async keywird ,we can make a function return a promise .
this make the prommise nicer to read and look a lot like synchronous code .
we can use more powerful await keyword to wait until the promise is done .
await only work in an asynchoronous function.

function  saysometing(x){
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve("something"+x);
        },2000);
    });
}
async function talk(x){
    count words=await saysometing(x);
    console.log(word);
}
talk(2);
talk(4);
talk(8);