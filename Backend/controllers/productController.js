import Product from "../models/Product.js";

// Get All Products
export const getAllProducts = async(req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    }catch(error) {
        res.status(500).json({message: "Error fetching products", error});
    }
};

// Get Single Product by ID
export const getProductById = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({ message: "Product not found"});
        res.json(product);
    }catch(error){
        res.status(500).json({message: "Error fetching product", error});
    }
};

// Add a New Product
export const addProduct = async (req, res) => {
    try {
        const { name, price, description, stock, image } = req.body;
        if (!name || !price || !description || !stock || !image) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newProduct = new Product({ name, price, description, stock, image });
        await newProduct.save();

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error });
    }
};