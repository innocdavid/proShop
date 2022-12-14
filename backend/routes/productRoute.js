import Product from '../models/products.js';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

// @desc Fetch all products
// @desc GET /api/products
// @acess public
router.get('/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products);
  })
);

// @desc Fetch single product
// @desc GET /api/products/:id
// @acess public
router.get('/:id', 
  asyncHandler(async (req, res) => { 
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;