const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
.then(console.log("connection sucessfully"))
.catch((err)=>{console.log(err)});

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust" ;
// const dbUrl = process.env.ATLASDB_URL;

main()
.then(() =>{
    console.log("connected to DB");
}) 
.catch(err =>{
    console.log(err);
});

async function main (){
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '68d15e76ea26eaa0177642fc',}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();