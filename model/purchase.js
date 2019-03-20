const mongoose = require('mongoose')

const { Schema } = mongoose;

const PurchaseSchema = new Schema({
  customer_name: { type: String, required: true },
  msisdn: { type: String, minlength: 11 },
  userId: { type: String },
  supermarket: { type: String },
  amount: { type: Number, required: true },
  products: {
    type: [Object],
    required: true
  },
  createdAt: { type: Date, default: Date, required: true },
  updatedAt: { type: Date, default: Date, required: true }
})

const PurchaseModel = mongoose.model('purchases', PurchaseSchema);

module.exports = PurchaseModel;