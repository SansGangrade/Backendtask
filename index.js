const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const indexRouter = require('./routes/index.routes');

const db = require('./database/db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/v1',indexRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Listening at http://localhost:${process.env.PORT}`);
})
