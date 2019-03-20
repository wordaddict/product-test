//const bodyParser = require("body-parser");
const uuid = require('uuid/v4');
const PurchaseServices = require('../services/purchase');

class PurchaseController {
    logPurchaseReceipts(req, res){
        const { customer_name, amount, products } = req.body;
        const dataParam = {};
        if (!customer_name || !amount || !products) {
          return res.status(400).send({
            error: true,
            message: 'customer_name, amount, product fields must be included'
          })
        }
        dataParam.customer_name = customer_name;
        dataParam.amount = amount;
        dataParam.products = products;
    
        if (req.body.msisdn) {
            const { msisdn } = req.body;
            dataParam.msisdn = msisdn;
        };
        if (req.body.supermarket) {
            const { supermarket } = req.body;
            dataParam.supermarket = supermarket;
        };
        dataParam.userId = uuid();
        return new PurchaseServices().savePurchaseToDB(dataParam)
            .then(data => res.status(202).send({
                error: false,
                message: 'purchase logged successfully',
                data
            }))
            .catch(() => res.status(400).send({
                error: true,
                message: 'Unable to create purchase log'
            }))
    }
    salesPerMonth(req, res) {
        const { month } = req.query;
        return new PurchaseServices().getAllDataByMonth(month)
            .then((data) => {
                if (data.length === 0){
                    return res.status(404).send({
                        error: false,
                        message: "There are no sales for this month"
                    })
                }
                let totalAmt = 0;
                for (let i = 0; i < data.length; i++){
                    totalAmt = data[i].amount;
                    totalAmt = totalAmt++
                }
                return res.status(200).send({
                    error: false,
                    message: 'Total number of sales in month gotten successfully',
                    total: totalAmt
                });
            })
            .catch(() => {
                return res.status(500).send({
                    error: true,
                    message: 'Something went wrong',
                });
            });
    };

    getAllProducts(req, res) {
        return new PurchaseServices().getAllProducts()
            .then((data) => {
                return res.status(200).send({
                    error: false,
                    message: 'Total products returned successfully',
                    data
                });
            })
            .catch(() => {
                return res.status(500).send({
                    error: true,
                    message: 'Something went wrong',
                });
            });
    }

    addToProducts(req, res) {
        const { userId, products } = req.body;
        const dataParam = {};
        if (!userId || !products) {
          return res.status(400).send({
            error: true,
            message: 'userId and product fields must be included'
          })
        }
        dataParam.products = products;
        const param = {
            userId
        }
        return new PurchaseServices().addToProducts(param, dataParam)
            .then((data) => {
                if(data === null){
                    return res.status(400).send({
                        error: true,
                        message: 'UserId does not exist',
                    });
                }
                return res.status(202).send({
                    error: false,
                    message: 'product updated succesfully',
                    data
                });
            })
            .catch((err) => {
                return res.status(500).send({
                    error: true,
                    message: 'Something went wrong',
                });
            })

    }
}

module.exports = PurchaseController;