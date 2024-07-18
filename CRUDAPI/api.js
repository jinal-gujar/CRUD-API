const express = require('express');
const dbConnect= require('./mongodb');
const mongodb = require('mongodb')
 const app = express();


 app.use(express.json());

app.get('/', async(res,resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    //console.log(data)
    resp.send(data)
});
console.log('API server is starting...');
app.post('/',async(req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)

})
console.log('API server is starting...');

app.put("/:name",async(req,resp)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.params.name},
        { $set:req.body}
    )
    resp.send({result:"update"})
})
console.log('API server is starting...');
app.delete("/:id",async(req,resp)=>{
    console.log(req.params.id)
    const data = await dbConnect();
    const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})
console.log('API server is starting...');
app.listen(5000)
console.log('API server is starting...');