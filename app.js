const express= require("express");
const app= express();
const mongoose= require("mongoose");
const Listing= require("./models/listing.js");
const path= require("path");
const methodOverride= require("method-override");
const wrapAsync= require("./utils/wrapAsync.js");
app.use(methodOverride("_method"));
const ExpressErr= require("./utils/ExpressErr.js");
const {listingSchema}= require("./schema.js");
const ejsMate= require("ejs-mate"); // helps to create templates
const PORT= process.env.PORT || 8080;
app.engine("ejs", ejsMate);
app.set("viewengine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.urlencoded({extended: true}));
const dbURL= process.env.ATLASDB_URL;
main().then( ()=>{
    console.log("connected to DB");
})
.catch( (err) =>{
    console.log(err);
} );
async function main() {
  await mongoose.connect(dbURL);
}


const validateListing= (req, res, next)=>{
    let {error}= listingSchema.validate(req.body);
    if(error){
      let errMsg= error.details.map((el)=> el.message).join(",");
     throw new ExpressErr(400, error);
    } 
    else{
        next();
    }
};
// app.get("/testlisting", async (req, res)=>{
//     let sampleListing= new Listing({
//         name: "Shreya Rawat",
//         age: "26",
//         phone: "9084223345",
//         location: "Gujarat",
//         country: "India",
//     });
//    await sampleListing.save();
//    console.log("sample was saved");
//    res.send("successful testing");
// });

//INDEX ROUTE
app.get("/listings", wrapAsync(async (req, res)=>{
    const  allListings= await Listing.find({});
    res.render("./listings/index.ejs", {allListings}); 
}))


//NEW ROUTE
app.get("/listings/new", wrapAsync(async(req, res)=>{
    res.render("./listings/form.ejs");
}))


//CREATE ROUTE
app.post("/listings",validateListing, wrapAsync( async (req, res)=>{
    // if(!req.body.listing){
    //    throw new ExpressErr(400, "Bad request"); //this means client ki galti ki wejeh se server side pr error aa rha hai
    // }  
   
    // if(!newlisting.name){
    //     throw new ExpressErr(400, "Name is missing");
    // }
    // if(!newlisting.age){
    //     throw new ExpressErr(400, "Age is missing");
    // }
    // if(!newlisting.location){
    //     throw new ExpressErr(400, "Location is missing");
    // }
    // if(!newlisting.country){
    //     throw new ExpressErr(400, "Country is missing");
    // }
  
   const newListing= new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
   
 }));

//EDIT ROUTE
app.get("/listings/:id/edit", wrapAsync(async (req, res)=>{
    let {id}= req.params;
    let listing= await Listing.findById(id);
    res.render("./listings/edit.ejs", {listing});
}))

//UPDATE
app.put("/listings/:id", validateListing, wrapAsync(async (req, res)=>{
   let {id}= req.params;
   if(!req.body.listing){
    throw new ExpressErr(400, "Bad request");
   }
   await Listing.findByIdAndUpdate(id, {...req.body.listing});
   res.redirect("/listings");
}))

//SHOW ROUTE
app.get("/listings/:id", wrapAsync(async(req, res)=>{
    let {id}= req.params;
    const listing= await Listing.findById(id);
    res.render("./listings/show.ejs", {listing});
 }))

//DELETE ROUTE
app.delete("/listings/:id", wrapAsync(async(req, res)=>{
   let {id}= req.params;
  let deleted= await Listing.findByIdAndDelete(id);
  console.log(deleted); 
  res.redirect("/listings");
}));

//for the routes that doesn't exist
//if the route doesn't get matched with any of the above paths, then it will come in this
app.all("*", (req, res, next)=>{
    next(new ExpressErr(404, "Page not found"));
});

//middleware
app.use((err, req, res, next)=>{
    let { status=500, message="Some error has occured"}= err;
     res.render("./listings/error.ejs", { err });
    // res.status(status).send(message);
    
});
app.listen(PORT, ()=>{
    console.log("server is listening to port 8080");
});