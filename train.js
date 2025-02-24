// console.log("Jack Ma maslahatlar");
// const list = [
//     "yahshi talaba boling", // 0-20
//     "toguri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam along, foydasi yoq endi", // 60
// ];


// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     // else { //first
//     //     callback(null, list[5]);  
//     // }

//     else { //second
//         setTimeout(function () {
//         callback(null, list[5]);
//     }, 5000);
//     }
// // Result:
// // Jack Ma maslahatlar
// // passed here 0
// // passed here 1
// // javob:  endi dam along, foydasi yoq endi
// }

// // maslahatBering(10, (err, data) => {
// // // maslahatBering('salom', (err, data) => {   //reuslt: Insert a number. javob: null
// //     if(err) console.log('ERROR: ', err);
// //     console.log('javob: ', data);
// // })


// //=============================================================

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//         if(err) console.log('ERROR: ', err);
//         else {
//         console.log('javob: ', data);
//     }
// });
// console.log("passed here 1");


// // Result: 
// // Jack Ma maslahatlar
// // passed here 0
// // javob:  endi dam along, foydasi yoq endi
// // passed here 1
// //=============================================================





//****************************************22 dars*********************************


console.log("Jack Ma maslahatlar");
const list = [
    "yahshi talaba boling", // 0-20
    "toguri boshliq tanlang va koproq hato qiling", // 20-30
    "uzingizga ishlashingizni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam along, foydasi yoq endi", // 60
];


async function maslahatBering(a) {
    if (typeof a !== "number") throw new Error ("insert a number");
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    

    else { //second
        return list[5];
    //     setTimeout(function () {
    //     callback(null, list[5]);
    // }, 5000);
    }
}


//=============================================================

// //then/catch method
// console.log("passed here 0");
// maslahatBering(65)
//     .then((data) => {
//         console.log('javob: ', data);
//     })
//     .catch((err) => {
//         console.log('ERROR: ', err);
// });
// console.log("passed here 1");



// //then/catch method
async function run() {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(31);
    console.log(javob);
    javob = await maslahatBering(45);
    console.log(javob);
}
run();


//=============================================================

//============================Mitask 1=========================

function countLetter(letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) 
    {
      if (word[i] === letter) 
        {
          count++;
        }
    }
    return count;
  }
  
console.log(countLetter("a", "mehanizalashtirilganligidan-a?")); 
 
// Result: 6