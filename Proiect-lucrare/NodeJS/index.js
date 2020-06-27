const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

//////////////////////////////////////////////////////////
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "portfolio",
});
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// const SELECT_ALL_PROJECTS_QUERY = "SELECT * FROM admin";

// const connection = mysql.createConnection({
//     host: "192.168.64.2",
//     // port: 3306,
//     user: "root",
//     password: "password1",
//     database: "test",
//     // timeout: 60000,
// });
//////////////////////////////////////////////////////////

connection.connect((err) => {
    if (err) {
        console.log("ERROR while connecting to DB: ", err);
        return err;
    }
});
// console.log(connection);

app.get("/", (req, res) => {
    res.send("Hello from the MainPage of NodeJS server");
});

////////////////////////////////////

// get projects from DataBase
app.get("/projects", (req, res) => {
    const SELECT_ALL_PROJECTS_QUERY = `SELECT * FROM proiect INNER JOIN categorie ON categorie.id_categ=proiect.id_categ;`;

    connection.query(SELECT_ALL_PROJECTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            // console.log("results:", res);
            return res.json({
                data: results,
            });
        }
        connection.end();
    });
});

////////////////////////////////////

// get technology from DataBase

app.get("/technology", (req, res) => {
    // const SELECT_ALL_TECHNOLOGIES_QUERY = `SELECT * FROM categorie;`;
    const SELECT_ALL_TECHNOLOGIES_QUERY = `SELECT id_categ AS id, nume_categorie AS technology FROM portfolio.categorie;`;

    connection.query(SELECT_ALL_TECHNOLOGIES_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            // console.log("results:", res);
            return res.json({
                data: results,
            });
        }
        connection.end();
    });
});

////////////////////////////////////

//////// login to DataBase

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    let token = "Authenticated";

    // console.log(`Username = '${user}', password = '${password}'`);

    const SELECT_CHECK_USER_QUERY = `SELECT user AS user, password AS password FROM admin WHERE (user = '${user}') AND (password = '${password}')`;

    connection.query(SELECT_CHECK_USER_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results,
            });
        }
        connection.end();
    });
});

////////////////////////////////////

////////////////////////////////////

app.listen(4000, () => {
    console.log(`NodeJS Server listening on port 4000`);
});
