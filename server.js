console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");


// 1 - Expressdan kirib kelayotgan malumotlarga bogliq kodlar kirib keladi
app.use(express.static("public")); // har qanday browserdan kirib kelayotgan zapros uchun public folder ochiq, yoki faqat public folderni kora oladi degan manoni angatadi
app.use(express.json()); // kirib kelayotgan JSON formatdagi malumotlarni object holatiga ogirib beradi
app.use(express.urlencoded({ extended: true })); // form request, formdan biron narsani post qilsak express qabul qiladi, htmldan qilingan malumotlarni qabul qilmaydi


// 2 - Session bo'limi


// 3 - Viewsga bogliq kodlar: bss ni tanladik, backend server side da fronted yasaymiz,backda html yasab cientga yuboramiz
app.set("views", "views"); // views folderni ochaman, views folderini ishlatish uchun
app.set("view engine", "ejs"); // EJS ni ishlatish uchun

// 4 - rooter larga moljallangan
app.get("/hello", function (req, res) {
    res.end(`<h1 style="background: red">Hello world by Javohir!!!!!</h1>`);
});

app.get("/gift", function (req, res) {
    res.end(`<h1 style="background: blue">welcome to the world</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The seever isrunning successfully on port ${PORT}`);
});

// npm start  start papka uchun ok
//npm run dev qolgan hamma holatda run yoziladi