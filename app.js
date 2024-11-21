const express = require('express');
const app = express();

const authRouter = require('./routes/authRoute')
app.get('/', (req, res)=> {
    res.status(200).json({
        status:'success',
        message:'APIs are working!'
    });
})

app.use('/api/auth', authRouter);

app.listen(3000, ()=>{
    console.log("Server up and running on port 3000")
})