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


console.log("Jack Ma maslahatlar");
const list2 = [
    "yahshi talaba boling", // 0-20
    "toguri boshliq tanlang va koproq hato qiling", // 20-30
    "uzingizga ishlashingizni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam along, foydasi yoq endi", // 60
];


async function maslahatBering2(a) {
    if (typeof a !== "number") throw new Error ("insert a number");
    else if (a <= 20) return list2[0];
    else if (a > 20 && a <= 30) return list2[1];
    else if (a > 30 && a <= 40) return list2[2];
    else if (a > 40 && a <= 50) return list2[3];
    else if (a > 50 && a <= 60) return list2[4];
    

    else { //second
        return new Promise((resolve, reject) => { //reolve betda return, reject betda throw
            setTimeout( () => {
                resolve(list2[5]);
            }, 5000);
        });
    }
  }


async function run() {
    let javob2 = await maslahatBering2(65);
    console.log(javob2);
    javob = await maslahatBering2(31);
    console.log(javob2);
    javob = await maslahatBering2(45);
    console.log(javob2);
}
run();





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


//====================================TASK C=================================================


function checkContent(str1, str2) {
    
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
console.log(checkContent("mitgroup", "gmtiprou")); // true
  


//==========================================================================================


//====================================TASK D=================================================

class Shop {
    constructor(non, lagmon, cola) {
      this.products = { non, lagmon, cola };
    }
  
    vaqt() {
      return new Date().toLocaleTimeString("kr-KR", { hour: "2-digit", minute: "2-digit" });
    }
  
    qoldiq() {
      console.log(`Hozir ${this.vaqt()}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`);
    }
  
    sotish(nomi, miqdor) {
      if (this.products[nomi] >= miqdor) {
        this.products[nomi] -= miqdor;
        console.log(`Hozir ${this.vaqt()}da ${miqdor}ta ${nomi} sotildi.`);
      } else {
        console.log(`Hozir ${this.vaqt()}da ${nomi} yetarli emas! Faqat ${this.products[nomi]}ta mavjud.`);
      }
    }
  
    qabul(nomi, miqdor) {
      this.products[nomi] += miqdor;
      console.log(`Hozir ${this.vaqt()}da ${miqdor}ta ${nomi} qabul qilindi.`);
    }
  }
  
  const shop = new Shop(4, 5, 2);
  shop.qoldiq();
  shop.sotish('non', 3);
  shop.qabul('cola', 4);
  shop.qoldiq();
  

//MEN TUSHUNDIM VA QAYTA KORIB CHIQDIM. LEKIN BU DARAJADA YOZOLMAGANIM SABAB CHATGPT DAN YORDA SORAB, QARAB, TUHSUNIB YECHISHGA HARAKAT QILDIM. 
//==========================================================================================


//==========================================================================================
// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"
 
function hello(xola) {
  if (typeof xola === 'string') {
      let zzz = xola.split('').reverse().join('');
      return zzz;
  } else {
      console.log(xola + " is not a string type");
  }
}

// Example usage:
console.log(hello("world")); // Output: "dlrow"
hello(123); // Output: "123 is not a string type"

//========================================================================================