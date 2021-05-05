const mongoose = require('mongoose');


//db mongoDB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('db connected'))
  .catch(() => console.log('db not connected !'));