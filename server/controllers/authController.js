const jwt = require("jsonwebtoken");
const UserLogin = require("../models/userLogin");

const authController = {
    verifyLogin: async (req, res) => {
        try {

            const { username, password } = req.body;

            if (!username || !password) {
                console.log("credentials missing")
                return res.status(500).json({ message: 'credentials missing' });
            }

            // fetching user login data from DB
            UserLogin.getUserLogin(username, (err, results) => {

                if (err) {
                    return res.status(500).json({ message: 'internal server error' });
                }
                
                // checking if user exists
                if (results.length === 0) {
                    return res.status(401).json({ message: 'username does not exist' });
                }

                const user = results[0];

                if (user.password === password) {
                    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
                    return res.json({ token });
                }
                return res.status(401).json({ message: 'invalid credentials' });
            });
        } catch (err) {
            console.log("error in auth controller: ", err);
            return res.status(500).json({ message: 'internal server error' });
        }
    }
};

module.exports = authController;
