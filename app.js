console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs");


// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error", err);
//     } else { 
//         user = JSON.parse(data);
//     }
// });



//Mongo DB connect(birinchi mongo ga ulangandan keyin serverni ishga tushirish)

//MongoDB ni chaqirish
const db = require("./server").db;







// 1 - Expressdan kirib kelayotgan malumotlarga bogliq kodlar kirib keladi
app.use(express.static("public")); // har qanday browserdan kirib kelayotgan zapros uchun public folder ochiq, yoki faqat public folderni kora oladi degan manoni angatadi
app.use(express.json()); // kirib kelayotgan JSON formatdagi malumotlarni object holatiga ogirib beradi
app.use(express.urlencoded({ extended: true })); // form request, formdan biron narsani post qilsak express qabul qiladi, htmldan qilingan malumotlarni qabul qilmaydi


// 2 - Session bo'limi


// 3 - Viewsga bogliq kodlar: bss ni tanladik, backend server side da fronted yasaymiz,backda html yasab cientga yuboramiz
app.set("views", "views"); // views folderni ochaman, views folderini ishlatish uchun
app.set("view engine", "ejs"); // EJS ni ishlatish uchun

// 4 - rooter larga moljallangan

app.post("/create-item", (req, res) => {
    //console.log(req.body);
    //console.log(req);
    //res.json({ test: "success" });
});

// app.get('/author', (req, res) => {
//     res.render("author", { user: user });
// });



app.get("/", function (req, res) {
    res.render("reja");
}); 



module.exports = app;

// npm start  start papka uchun ok
//npm run dev qolgan hamma holatda run yoziladi