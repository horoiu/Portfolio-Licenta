const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");
const fs = require("fs");

const app = express();

//////////////////////////////////////////////////////////
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "portfolio",
});
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

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

////////////////////////////////////

// GET projects from DataBase
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

// Upload files to server

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../portfolio-app/public/projects-img/");
    },
    filename: function (req, file, cb) {
        // console.log("File:", file);
        cb(null, file.originalname);
    },
});

var upload = multer({ storage: storage }).single("file");

app.post("/upload", function (req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).send(req.file);
    });
});

////////////////////////////////////

// PUT project to DataBase

app.put("/addProject", (req, res) => {
    const {
        name,
        description,
        link,
        selectedBigFileName,
        selectedSmallFileName,
        id_technology,
    } = req.body;

    // need to convert date format coming from request to match the date format to be wrtitten on DB
    const dateValue = req.body.date;
    const date = new Date(dateValue).getTime() / 1000;

    const PUT_PROJECT_QUERY = `INSERT INTO proiect ( fisier_imagine, imagine_mare, id_categ, nume_proiect, prezentare, data_proiect,link)
    VALUES
    ( '${selectedSmallFileName}', '${selectedBigFileName}','${id_technology}', '${name}', '${description}', FROM_UNIXTIME('${date}','%Y-%m-%d'), '${link}' );`;

    connection.query(PUT_PROJECT_QUERY, (err, results) => {
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

// DELETE project from DataBase

app.delete("/delProject", (req, res) => {
    const id = req.body.id_proiect;
    const imgS = req.body.fisier_imagine;
    const imgB = req.body.imagine_mare;

    const DELETE_PROJECT_QUERY = `DELETE FROM proiect WHERE id_proiect='${id}';`;

    connection.query(DELETE_PROJECT_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            // if deletion from DataBase is successfull,
            // then proceed and delete project images
            fs.unlink(`../portfolio-app/public/projects-img/${imgS}`, function (
                err
            ) {
                if (err) throw err;
                else console.log(`File ${imgS} deleted!`);
            });

            fs.unlink(`../portfolio-app/public/projects-img/${imgB}`, function (
                err
            ) {
                if (err) throw err;
                else console.log(`File ${imgB} deleted!`);
            });

            return res.json({
                data: results,
            });
        }
        connection.end();
    });
});

////////////////////////////////////////////////////////////////////////

// GET technology from DataBase

app.get("/technology", (req, res) => {
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

app.post("/login", (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    // let token = "Authenticated";

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

app.listen(4000, () => {
    console.log(`NodeJS Server listening on port 4000`);
});
