const express = require ("express");
const app = express();
const mongoose = require ('mongoose');

const DB = 'mongodb+srv://abhinav:abhi3934@ums.wrihr5l.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(() => {
    console.log(`DB Connected`);
}).catch((err) => console.log(`No connection`));

app.get('/', (req,res) => {
    res.redirect('/login');
});

//for user routes

const userRoute = require ('./routes/userRoute');
app.use('/', userRoute);

//for admin routes

const adminRoute = require ('./routes/adminRoute');
app.use('/admin', adminRoute);

//port

app.listen(3000, function() {
    console.log("Server is Running...");
});



