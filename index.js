const express = require('express')
const mongoose= require('mongoose');
const ProductRoute = require('./routes/products.routes');

const dotenv= require('dotenv');
dotenv.config();

//middleware
const app = express()
app.use(express.json());

app.use('/api/products',ProductRoute);

app.listen(3000, ()=> {
        console.log('server ch');
    });

app.get('/', (req, res)=> {
  res.send('response changed');
})

mongoose.connect(process.env.MONGO_CONNECTION_STRING)

.then(()=>
{
  console.log('connected to mongodb');
})
.catch((err)=>
{
  console.log('connection failed',err);
})