const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://jason:xGYluPD3EXT1oS0b@cluster0.rs721.mongodb.net/"
mongodb.connect(connectionString,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
        console.log("Mongodb connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
        console. log(
        `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
        });
        }
    }
);





// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//     console.log(`The seever isrunning successfully on port ${PORT}, http://localhost:${PORT}`);
// });

// mongodb+srv://jason:<db_password>@cluster0.rs721.mongodb.net/  



// const http = require("http");
// const mongodb = require("mongodb");
// let db;
// const connectionString =
// ""mongodb+srv://todouser: todo14@cluster0.b91ez.mongodb.net /Raja?aur
// mongodb.connect(
// connectionString,
// {
// use New Url Parser: true,
// use Unified Topology: true,
// },