const mongoose= require("mongoose");
const listingSchema= new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  age:{
    type: String,
    required: true,
  },
  phone:{
    type: Number,
    required: true,
  },
  image:{
    type: String,
    default: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7", 
    set: (v) => v=== "" ? "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7" : v,

  },
  location:{
    type: String,
    required: true
    
  },
  country:{
    type: String,
  required: true,
  },
});

const Listing =mongoose.model("Listing", listingSchema);
module.exports= Listing;
