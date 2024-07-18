const dbConnect= require('./mongodb');

const insertOne =async ()=>{
    db = await dbConnect();
    const result = await db.insertOne(
        {name:'note 5',brand:'vivo',price:320,category:'mobile'}
    );
if(result.acknowledged)
{console.log("data inserted")}
}

insertOne();