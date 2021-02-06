const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../db/product-queries');

router.use((req, res, next) => {
  console.log('inside the product router');
  // if (!req.session.user_id) {
  //   res.redirect('/login');
  // }
  next();
});

// GET /products/new

// GET /products
router.get('/', (req, res) => {
  getProducts()
    .then((products) => {
      res.json(products);
    });
});

// GET /products/:id
router.get('/:id', (req, res) => {
  getProductById(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

module.exports = router;
