

const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");



router.get("/home", function (req, res) {
  return res.render("products/homePage");
});


router.get("",async function (req, res) {
    const product = await Product.find().lean().exec();  
   return res.send(product)
          
 });
    

router.get("/productpage",async function (req, res) {
     
   return res.render("products/allSofasPage")
        
 });
    

router.get("/productinfo", function (req, res) {
    return res.render("products/productInfo");
});
router.get("/cart", function (req, res) {
    return res.render("products/cartPage");
});
router.get("/payment", function (req, res) {
    return res.render("products/paymentpage"); 
});
router.get("/success", function (req, res) {
    return res.render("products/successPage"); 
});
router.get("/aboutus", function (req, res) {
    return res.render("products/footerAboutPage"); 
});




router.post("", async function (req, res) {
 
  const product = await Product.create(req.body);

  return res.send(product);
});


  


module.exports = router;
