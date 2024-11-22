require('dotenv').config({path: `${process.cwd()}/.env`})
const express = require('express');

const app = express();

app.use(express.json());

const authRouter = require('./routes/authRoute')

app.get('/', (req, res) => {
    res.status(200).json({
        status:'success',
        message:'APIs are working!'
    });
})

app.use('/api/auth', authRouter);
app.use('*', (req, res) => {
    res.status(404).json({
        status:'fail',
        message:'Route Not Defined'
    })
})

const PORT = process.env.APP_PORT || 4000;

app.listen(process.env.APP_PORT, ()=>{
    console.log(`Server up and running on port ${PORT}`)
})