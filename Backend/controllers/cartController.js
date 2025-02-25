import Cart from "../models/Cart.js";
import Product from "../models/Product.js"

// Get Cart Items
export const getCart = async (req, res) => {
    try{
        const cart = await Cart.findOne({ userId: req.user.id }).populate("items.productId");
        res.json(cart || { items: [] });
    } catch (error) {
        res.status(500).json({ message: "Error Fetching Cart ", error });
    }
};

// Add Item to Cart
export const addToCart = async (req, res) => {
    try{
        const { productId, quantity } = req.body;

        // Check if product exists
        const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

        let cart = await Cart.findOne({ userId: req.user.id });

        if(!cart){
            cart = new Cart({ userId: req.user.id, items: [] });
        }

        const existingItem = cart.items.find((item) => item.productId.toString() === productId);
        if(existingItem){
            existingItem.quantity += quantity;
        }else{
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.json(cart);
    } catch (error){
        res.status(500).json({ message: "Error adding to cart", error });
    }
};

// Update Item Quantity in Cart (PUT /api/cart/:id)
export const updateCartItem = async (req, res, next) => {
    try {
      const { quantity } = req.body;
      const { id } = req.params;
  
      let cart = await Cart.findOne({ userId: req.user.id });
      if (!cart) return res.status(404).json({ message: "Cart not found" });
  
      const cartItem = cart.items.find((item) => item.productId.toString() === id);
      if (!cartItem) return res.status(404).json({ message: "Product not found in cart" });
  
      cartItem.quantity = quantity;
      await cart.save();
      res.json({ message: "Cart updated successfully", cart });
    } catch (error) {
      next(error);
    }
  };

// Remove Item from Cart (DELETE /api/cart/:id)
export const removeFromCart = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      let cart = await Cart.findOne({ userId: req.user.id });
      if (!cart) return res.status(404).json({ message: "Cart not found" });
  
      cart.items = cart.items.filter((item) => item.productId.toString() !== id);
      await cart.save();
      res.json({ message: "Item removed from cart", cart });
    } catch (error) {
      next(error);
    }
  };