import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    items: [
        {
        productId: { type:mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
        },
    ],
});

export default mongoose.model("Cart", cartSchema);