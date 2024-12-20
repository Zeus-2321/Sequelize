require('dotenv').config({path: `${process.cwd()}/.env`})
const express = require('express');
const catchAsync = require("./utils/catchAsync");
const appError = require("./utils/appError")

const app = express();

app.use(express.json());

const authRouter = require('./routes/authRoute');
const projectRouter = require('./routes/projectRoute');
const userRouter = require('./routes/userRoute');
const globalErrorHandler = require('./controller/errorController');

app.use('/api/auth', authRouter);
app.use('/api/projects', projectRouter);
app.use('/api/users', userRouter);

app.use('*', catchAsync(
     async(req, res, next) => {
    throw new appError(`Can't find ${req.originalUrl} on this server`, 404);
}));

app.use(globalErrorHandler)

const PORT = process.env.APP_PORT || 4000;

app.listen(process.env.APP_PORT, ()=>{
    console.log(`Server up and running on port ${PORT}`)
})