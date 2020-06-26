const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const id_proiect = "";

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

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from the category server");
});

app.get("/proiecte", (req, res) => {
    const SELECT_ALL_PROJECTS_QUERY =
        "SELECT * FROM proiect INNER JOIN categorie ON categorie.id_categ=proiect.id_categ;";

    connection.query(SELECT_ALL_PROJECTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            console.log("results:", res);
            return res.json({
                data: results,
            });
        }
        connection.end();
    });
});

app.listen(4000, () => {
    console.log(`Server listening on port 4000`);
});

// to be implemented later on - get a single project based on ID
// app.get("/proiect", (req, res) => {
//     // const SELECT_SINGLE_PROJECT_QUERY = `SELECT * FROM proiect WHERE id_proiect=${id_proiect}`;
//     // https://stackoverflow.com/questions/53984761/how-to-pass-id-from-a-form-in-html-using-nodejs-mysql

//     connection.query(SELECT_SINGLE_PROJECT_QUERY, (err, results) => {
//         if (err) {
//             return res.send(err);
//         } else {
//             console.log("results:", res);
//             return res.json({
//                 data: results,
//             });
//         }
//         connection.end();
//     });
// });

// app.get("/categ/add", (req, res) => {
//   const { nume } = req.query;
//   const INSERT_USERS_QUERY = `INSERT INTO categorie (nume_categorie) VALUES('${nume}')`;

//   connection.query(INSERT_USERS_QUERY, (err, results) => {
//       if (err) {
//           return res.send(err);
//       } else {
//           return res.send("successfully added category");
//       }
//       connection.end();
//   });
// });
