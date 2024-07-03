import express from "express"
import cors from  "cors"

const app=express();
const port=4000


app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
  res.send("Api Working")
})

app.listen(port,()=>{
  console.log(`server started on http://localhost:${port}`)
})