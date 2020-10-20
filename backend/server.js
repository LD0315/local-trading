import express from 'express';
import data from './data';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';


////var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send("welcome to backend server");

});

//const jwt = require('jsonwebtoken');



const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: "create a admin user"
    });
});

app.get('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'user created...',
                authData
            });
        }
    });
});

/*
app.get('/api/admin', async (req, res) => {
    try {
      const user = new User({
        name: 'Kiala',
        email: 'kiala@test.com',
        password: '1234',
        isAdmin: true
      });
     
      const newUser = await user.save();
      res.send(newUser);
    } catch (error) {
  
      res.send({ message: error.message });
    }
  });
*/

app.post('/api/admin', (req, res) => {
    // Mock user 
    const user = {
        _id: "",
        name: 'Kiala',
        email: 'kiala@test.com',
        password: '1234',
        isAdmin: true
      }
      //const newUser = user.save();
      console.log('user');
     
    jwt.sign({user}, 'secretkey', { expiresIn: '48h'}, (err, token) => {
        res.json({
            token,
            user
        });
    });
});


app.get('/api/signin', (req, res) => {
    const user = {
      email: req.body.email,
      password: req.body.password
    }

    if (user) {
      res.send({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: token
      });
    } else {
      res.status(401).send({ message: 'Invalid Email or Password.' });
    }
  });

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next){
    // Get auth header value
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined') {
        // Split at the space 
        const bearer = bearerHeader.split(' ');
        // Get token fron array
        const bearerToken = bearer[1];
        //set the token 
        req.token = bearerToken;
        // Next middleware 
        next();

    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

/*
dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use('/api/users/:id', userRoute);
*/

//const router = express.Router();

//app.use("api/products", productRoute);
/* get products from backend */
app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if(product)
        res.send(product);
    else
        res.status(404).send({ msg: "Product Not Found." })
});
app.get('/api/products', (req, res) => {
    res.send(data.products);
})



app.listen(5000, () => {
    console.log("server started at http://localhost:5000")
});

module.exports = router;