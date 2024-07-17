const mongoose= require("mongoose");
const listingSchema= new mongoose.Schema({
  name:{
    type: String,

  },
  age:{
    type: Number,
    
  },
  phone:{
    type: Number,
    
  },
  image:{
    type: String,
    default: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7", 
    set: (v) => v=== "" ? "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7" : v,

  },
  location:{
    type: String,
    
  },
  country:{
    type: String,
  
  },
});

const Listing =mongoose.model("Listing", listingSchema);
module.exports= Listing;
