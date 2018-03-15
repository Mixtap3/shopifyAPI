import mongoose from 'mongoose'

const { Schema } = mongoose

const shopSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const Shop = mongoose.model('Shop', shopSchema)

export default Shop
