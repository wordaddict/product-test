const express = require('express');
const bodyParser = require("body-parser");

const router = express.Router();

const PurchaseController = require('../controllers/purchase');

// create application/json parser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/', (req, res) => {
    res.send('Base application of the Purchase reciept API');
});

router.post('/purchases', (req, res) => new PurchaseController().logPurchaseReceipts(req, res));
router.get('/sales-per-month', (req, res) => new PurchaseController().salesPerMonth(req, res));
router.get('/products', (req, res) => new PurchaseController().getAllProducts(req, res));
router.put('/update-products', (req, res) => new PurchaseController().addToProducts(req, res))

module.exports = router;