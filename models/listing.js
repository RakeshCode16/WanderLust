const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image :{
       url : String,
       filename : String,
  },
  price: {
    type: Number,
    default: 0,
  },
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  category: String,

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;