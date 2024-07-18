const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database='e-comm'
const client= new MongoClient(url);

async function dbConnect()
{
    let result= await client.connect();
    db= result.db(database);
    return db.collection('products');
    // let data = await collection.find({}).toArray();
    // console.log(data)
}

module.exports= dbConnect;