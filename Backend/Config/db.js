const Pool = require('pg').Pool;
require('dotenv').config();


const db = new Pool({
    user: "postgres" ,
    host:"localhost",  
    database: "Innovation_db", 
    password: "Lethabo2015!!", 
    port: "5432"
  });