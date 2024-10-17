const UserContact = require("../models/userContacts");
const mailSender = require("../config/mailSender");
require('dotenv').config();

const userContactController = {

    //creating contact
    createContact: async (req, res) => {
        const newContact = req.body;
        if (!newContact) {
            console.log('contact not fetched from request body')
            return res.status(500).json({ message: 'contact not fetched from request body' });
        };

        const email = newContact.email;
        if (!email) {
            console.log('email id of contact not found')
            return res.status(500).json({ message: 'email id of contact not found' });
        }
        
        console.log("email : ", email);
        console.log("newContact : ", newContact);

        if(!newContact){
            res.status(501).json({error: "No data found in request body"});
        }
        else{
            UserContact.create(newContact, (err, results) => {
                if(err){
                    return res.status(500).json({error: "DB inserting controller error"});
                }
                res.status(200).json({
                    success: true,
                    message: "Contact created",
                    id: results.insertId
                });
            });

            //mail sending
            try{
                 await mailSender(
                    email,
                    "Thankyou for conatcting us.",
                    "We will get back to you shortly"
                    );
            }catch(err){
                console.log("Error sending mail : ", err);
            }
        }
    },

    // fetch all contacts
    getAllContacts: async (req, res) => {
        UserContact.getAll((err, results) => {
            if(err){
                return res.status(500).json({error: "DB get all contact controller error"});
            }
            res.status(200).json({
                success: true,
                message: "all contacts fetched",
                data: results
            });
        })
    }
};

module.exports = userContactController;