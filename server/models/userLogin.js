const con = require("../config/dbConnect");

const UserLogin = {
    getUserLogin: (username, callback) => {
        const query = "SELECT * FROM logintable WHERE username = ?";

        con.query(query, [username], (err, results) => {
            if (err) {
                console.log("error while fetching login credentials (in login model):", err);
                return callback(err);
            }
            // for successful result
            callback(null, results);
        });
    }
};

module.exports = UserLogin;
