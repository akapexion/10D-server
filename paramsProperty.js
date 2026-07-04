import express from 'express';
const app = express();


app.get("/products", (req, res) => {
    res.send("All Products");
})

app.get("/products/:id", (req, res) => {

    const productId = req.params.id;

    res.send("Single Product " + productId);
})




app.listen(3000, () => {
    console.log("Server Started");
})