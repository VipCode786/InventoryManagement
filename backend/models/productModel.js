import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String , required: true},
    price: { type: Number, required: true },
    countInStock: { type: Number , required: true},
    warehouse : { type: String, required: true  },
    // rating: { type: Number, required: true },
    //numReviews: { type: Number, required: true },
    isActive: { type: Boolean, default: true, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
