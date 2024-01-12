const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = require('./router');

mongoose.connect('mongodb://127.0.0.1:27017/CelesTechDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected');
}).catch((error) => {
  console.log('Database connection error', error);
});

app.use(express.json());
app.use(cors());
app.use('/api',router)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
