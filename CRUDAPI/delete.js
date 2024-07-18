const dbConnect= require('./mongodb');

const deleteData=async ()=>{
    let data = await dbConnect();
    let result = await data.deleteOne({name:'m 40'})
    console.warn(result);
}

deleteData();