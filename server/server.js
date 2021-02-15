import config from "../config/config";
import app from "./express";
import {Client} from "pg";

const client = new Client()


app.listen(config.port,(err)=>{
    if(err){
        console.log(err)
    }
    console.info("Server started on port %s.",config.port)

})