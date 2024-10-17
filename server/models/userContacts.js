const con = require("../config/dbConnect");

const UserContact ={

    //to create contact entry in DB
    create: (data, callback) => {
        const query = "INSERT INTO user_contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";

        con.query(query, [data.name, data.email, data.phone, data.message], (err, results) => {
            if(err){
                console.log("error occured in insert query model")
                return callback(err);
            }
            //for successfull result
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = "SELECT * FROM user_contacts ORDER BY id DESC";

        con.query(query, (err, results) => {
            if(err){
                console.log("error occured in select all query model")
                return callback(err);
            }
            //for successfull result
            callback(null, results);
        });
    }
};

module.exports = UserContact;