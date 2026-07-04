import express from 'express'; //import
import salaryLogic from './middlewares/salary.js';
import dbConnect from './config/db_connection.js';
import user from './models/users.js';

import cors from 'cors'

const app = express(); //execution
app.use(salaryLogic);

app.use(cors());

dbConnect();


const createUser = async() => {
    try {
        await user.insertOne({user_name : "Ali", user_email : "ali@gmail.com", user_password : "123"});
        console.log("User Inserted");
    }
    catch(err){
        console.log(err);
    }
}

// createUser();

const getUsers = async() => {
    try{
        const myUsers = await user.find();
        console.log("My Users List: ", myUsers);
    }
    catch(err){
        console.log(err);
    }
}

getUsers();













app.get("/about", (req, res) => {
    const name = req.query.name;

    if(name){
        res.send(`Welcome ${name}`);
    }
    else {
    res.send("About US");
    }
});

app.get("/", (req, res) => {
    res.send("HOME");
});

app.listen(3000, () => {
    console.log("Server Started");
}); // port



