import mongoose from "mongoose"

const swapRequestSchema = {
  _id: ObjectId,
  consumerId: {
     type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
  },
  desiredProductId: ObjectId,
  offeredProductDetails: {
    productName: String,
    size: String,
    condition: String,
    images: [String]
  },
  status: { type: String, enum: ['pending', 'approved', 'rejected', 'completed'] },
  createdAt: Date
}


const Swap = mongoose.model('Swap', swapRequestSchema);
export default Swap;