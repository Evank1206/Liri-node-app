const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const bandsRouter = require("./routes/bands");
app.use("/band", bandsRouter);

app.listen(PORT, (err)=>{
    if(err){
        console.log(err)
    }
    console.log(`SERVER SUCCESSFULY CONNECTED: http://localhost:${PORT}`);
});