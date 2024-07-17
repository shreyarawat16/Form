const mongoose= require("mongoose");
main().then( ()=>{
    console.log("connected to DB");
})
.catch( (err) =>{
    console.log(err);
});
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/form');
}
const Listing= require("./models/listing.js");

Listing.insertMany([
    {
        name: "Vansh Pokhriyal",
        age: "29",
        image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
        phone: "234-567-8901",
        location: "New York",
        country: "USA",
    },
    {
        name: "Reyanshi Semalty",
       age: "30",
       image: "https://images.unsplash.com/photo-1517840545241-5215885b08ab",
    
       phone: "+1-234-567-8902",
       location: "los angeles, ca",
       country: "usa",
    },
    {
        name: "Shahid kapoor",
        age: "45",
        image:  "https://images.unsplash.com/photo-1517840545241-5215885b08ab",
        phone: "+1-234-567-8903",
        location: "chicago, il",
        country: "usa"
    },
    {
        name: "Jessica Brown",
        age: "26",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        phone: "+1-234-567-8904",
        location: "houston, tx",
        country: "usa"
    },
    {
        name: "Laura Garcia",
        age: "29",
        image: "https://images.unsplash.com/photo-1504151932400-72d4384f04b3",
        phone: "+1-234-567-8906",
        location: "philadelphia, pa",
        country: "usa"  
    },
    {
        name: "Daniel Jones",
        age: "31",
        image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
        phone: "+1-234-567-8905",
        location: "phoenix, az",
        country: "usa"
    },
    {
         name: "Rahul Sharma",
        age: "28",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        phone: "8433485001",
        location: "mumbai",
        country: "india"
       
       
    },
    {
        name: "Anita Verma",
        age: "34",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        phone: "8433485002",
        location: "delhi",
        country: "india"
    },
    {
        name: "Arjun Rao",
        age: "31",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
        phone: "8433485005",
        location: "hyderabad",
        country: "india"
    },
    {
        name: "Priya Singh",
        age: "26",
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
        phone: "8433485004",
        location: "chennai",
        country: "india"
    },
    {
        name: "Deepika Patel",
        age: "29",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        phone: "8433485006",
        location: "ahmedabad",
        country: "india"
    },
    {
        name: "Nisha Joshi",
        age: "24",
        image: "https://images.unsplash.com/photo-1517840545241-5215885b08ab",
        phone: "8433485008",
        location: "jaipur",
        country: "india"
    },

]);