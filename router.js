import express from 'express';
import salaryLogic from './middlewares/salary.js';
const app = express();
const route = express.Router();

route.use(salaryLogic);

app.get("/", (req, res) => {
    res.send("HOME");
});

app.get("/about", (req, res) => {
    res.send("ABOUT");
});

app.get("/contact", salaryLogic, (req, res) => {
    res.send("CONTACT");
});


app.listen(2000, () => {
    console.log("Server Started");
})