const mongoose = require('../config/db');

const PurchaseModel = require('../model/purchase');

class PurchaseServices {
    savePurchaseToDB(data){
        return PurchaseModel.create(data);
    }

    getAllDataByMonth(month){
        return PurchaseModel.aggregate([
            {$project: {
                "month":{$month:"$createdAt"},      
            }}, 
            {$match:{
                "month": month      
            }}
        ]);
    }

    getAllProducts(){
        return PurchaseModel.find({}).select('products -_id');
    }

    addToProducts(param, dataParam){
        return PurchaseModel.findOneAndUpdate(param, { $set: dataParam }, { new: true })
    }
}

module.exports = PurchaseServices;