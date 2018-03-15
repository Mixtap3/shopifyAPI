import mongoose from 'mongoose'

const { Schema } = mongoose

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imgUrl: String,
  offers: [{
    shopId: Number,
    price: Number,
    quantity: Number
  }]
})

const Item = mongoose.model('Item', itemSchema)

export default Item
