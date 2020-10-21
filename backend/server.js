import express from 'express';
// import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import userRoute from './routes/userRoute';
import data from './data';
//import productRoute from './routes/productRoute';
//import orderRoute from './routes/orderRoute';
// import uploadRoute from './routes/uploadRoute';
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));


/*app.use('/api/uploads', uploadRoute);*/
app.use('/api/users', userRoute);
console.log("!!!!!!!");
console.log("userRoute");
/*app.use('/api/products', productRoute);*/
/*app.use('/api/orders', orderRoute);*/
/*app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});
*/


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

/*
app.get('/admin', async (req, res) => {
  console.log("#################");
  try {
    console.log("user");
    const user = new User({
      name: 'Kiala',
      email: 'kiala@test.com',
      password: '1234',
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ message: error.message });
  }
});

app.get('/signin', async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid Email or Password.' });
  }
});
*/


app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});