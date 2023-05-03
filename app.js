const connectdb=require("./db/connect");
const express = require('express')
const app = express()
connectdb();



const port = process.env.port || 5000;
const process_routes=require("./routes/product");
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/products",process_routes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})