var mysql = require('mysql');
require('dotenv').config();

var con = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

con.getConnection(function(err) {
  if (err){
    console.error("DB connection failed !!!! ", err);
  }

  console.log("DB connection successfull!");

  // var sql = "INSERT INTO user_contacts (name, email, phone, message) VALUES ('Bk', 'ba@a.com', '3974374873', 'dkfdsdfhsfsksj')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 contact inserted");
  // });
  // con.query("SELECT * FROM user_contacts", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
});

module.exports = con;