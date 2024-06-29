const mongoose = require('mongoose');
const mongoURI='mongodb://gofood:Harsh@ac-fmmcydb-shard-00-00.vifsjh1.mongodb.net:27017,ac-fmmcydb-shard-00-01.vifsjh1.mongodb.net:27017,ac-fmmcydb-shard-00-02.vifsjh1.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-cf842z-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
const mongoDB=async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParse:true},async(err,result)=>{
        if(err) console.log("---",err)
        else{
            console.log("connected");
            const fetched_data=await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){

                const foodCategory=await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(function(err,catData){
                    if(err) console.log(err);
                    else {
                            global.food_items=data;
                            global.foodCategory=catData;
                         }
                })
            // if(err) console.log(err);
            // else {
            //     global.food_items=data;
            // }

            })

        }
    });
}

module.exports=mongoDB;
