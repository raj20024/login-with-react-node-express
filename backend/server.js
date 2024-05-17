const express=require("express");
const mysql=require("mysql")
const cors =require("cors")
const app=express();
app.use(cors());

// app.use(cors({
//     origin:"http://localhost:8082",
//     credentials:true,
// }));

app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"login_react"
})
// app.post('/signup',(req,res)=>{
//     const sql="INSERT INTO users(`name`,`email`,`password`) ? VALUES(?)";
//     const values=[
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
//     console.log(values);
//     db.query(sql,[values],(err,data)=>{
//         if(err){
//             return res.json(err);
//         }
//         return res.json(data);

//     })
// })


//Create DATA From Reqest Body
app.post("/signup", (req, res) => {
    let post = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
    let sql = "INSERT INTO users SET ?";
    let query = db.query(sql, post, (err, result) => {
      if (err) {
        res.json({ success: false, message: "Could not create User" });
      }
      console.log(result);
      res.json({ success: true, message: "New User added" });
    });
  });
  

app.listen(8082,()=>{
    console.log("listening....");
})

