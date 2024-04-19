const Helpcenter = require('../Model/Helpcenter');

const createHelp = async (req, res) => {
    try {
      const userdetail = new Helpcenter(req.body);
      const recordMatch = await Helpcenter.findOne({
        email: req.body.email,
      });
  
      if (recordMatch) {
        res.status(400).json({ message: "This email is already in existence." });
      } else {
        await userdetail.save();
        console.log("Email successfully updated");
        res.status(201).json({ message: "Email successfully updated" });
      }
    } catch (error) {
      console.error("Error creating help:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  
const showHelp = async (req, res) => {
    Helpcenter.find((err, user) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send(user);
        }
    });
};
const deleteHelp = (req, res) => {
    const id = req.params.id;
    Helpcenter.findByIdAndDelete(id, (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json({ message: "Document deleted successfully" });
        }
    });
};
module.exports = {createHelp , showHelp, deleteHelp};