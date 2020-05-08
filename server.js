const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());

const PORT = 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const bandRouter = require("./routes/bands");
app.use("/", bandRouter);

app.listen(PORT, (err)=>{
    if(err){
        console.log(err)
    }
    console.log(`SERVER SUCCESSFULY CONNECTED: http://localhost:${PORT}`);
});