const express = require("express");
const mysql = require('mysql');
const cors = reqquire('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "signup"
    
})

app.post('/signup',(req, res) => {
    const sql = "INSERT INTO login(`name`,`email`,`password`) VALUES (?)";
    const values = [
        
    ]
    db.query(sql,[])
})

app.listen(8081, () => {
    console.log("listening");
}
)
