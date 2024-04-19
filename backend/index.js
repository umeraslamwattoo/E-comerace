const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/Routes");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const hotmodels = require("./Model/Hotproduct");
const coldmodel = require("./Model/Coldproducts");


const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5001;
app.use(cors())
app.use('/showhotpro', express.static('hotpro'));
app.use('/showcoldpro', express.static('coldpro'));

app.listen(port, () => {
  console.log("Port is connected successfully");
});
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/E-comerace", {
  useNewUrlParser: true,

});

mongoose.connection.once("open", () => {
  console.log("connection Successful");
});

app.use("/", router);


// image data uplode hot products

const hotpro = multer({ dest: './hotpro/' })

app.post('/hotproduct', hotpro.single("image"), (req, res) => {
  const image = new hotmodels({
    image: req.file.filename,
    tital: req.body.tital,
    price: req.body.price,
    pricecut: req.body.pricecut,
  })
  image.save()
    .then(() => {
      res.send('File uploaded successfully');
    })
    .catch((error) => {
      res.status(500).send('Error uploading file');
    })
})
//Api for getting the data

app.get('/showhotpro', (req, res) => {
  hotmodels.find((err, user) => {
    if (err) {
      res.status(500).send(err.message)
    }
    else {
      res.status(200).send(user)
    }
  })
})
//api for delete the data

app.delete('/hotdelete/:id', (req, res) => {
  const id = req.params.id;
  hotmodels.findByIdAndRemove(id, (err, user) => {
    if (err) {
      res.status(500).send(err.message)
    } else {
      res.status(200).send("Api Deleted Successfully")
    }
  })
})

// image data uplode Cold products

const coldproduct = multer({ dest: './coldpro/' })

app.post('/coldmodel', coldproduct.single("image"), (req, res) => {
  const image = new coldmodel({
    image: req.file.filename,
    tital: req.body.tital,
    price: req.body.price,
    pricecut: req.body.pricecut,
  })
  image.save()
    .then(() => {
      res.send('File uploaded successfully');
    })
    .catch((error) => {
      res.status(500).send('Error uploading file');
    })
})
//Api for getting the data

app.get('/showcoldpro', (req, res) => {
  coldmodel.find((err, user) => {
    if (err) {
      res.status(500).send(err.message)
    }
    else {
      res.status(200).send(user)
    }
  })
})
//api for delete the data

app.delete('/colddelete/:id', (req, res) => {
  const id = req.params.id;
  coldmodel.findByIdAndRemove(id, (err, user) => {
    if (err) {
      res.status(500).send(err.message)
    } else {
      res.status(200).send("Api Deleted Successfully")
    }
  })
})