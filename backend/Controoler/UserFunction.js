const model = require("../Model/User");

const signupUser = async (req, res) => {
    const userdetail = new model(req.body);
    const recordMatch = await model.findOne({
        email: req.body.email
    });
    if (recordMatch) {
        res.json("This email is Already in Exist");
    } else {
        userdetail.save();
        res.json("Email successfully updated");
    }
}; 

const loginUser = async (req , res ) => {
    const recordMatch = await model.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (recordMatch) {
        res.status(200).send({ message: "User Login successfully", recordMatch });
    } else {
        res.status(500).send({ message: "Login failed Invalid password or email" });
    }
}
const showsignupuser = async (req, res) => {
    model.find((err, user) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send(user);
        }
    });
};

const deleteuser= (req , res) => {
    const id = req.params.id;
    model.findByIdAndDelete(id, (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json({ message: "Document deleted successfully" });
        }
    });
}
module.exports = {signupUser , loginUser , deleteuser , showsignupuser};