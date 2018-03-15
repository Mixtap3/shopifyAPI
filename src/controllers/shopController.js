import Shop from '../models/Shop'

export default {

  getShops: async (req, res) => {
    const shops = await Shop.find({})
    res.json(shops)
  },

  newShop: async (req, res) => {
    const newShop = new Shop(req.body)
    const shop = await newShop.save()
    res.status(201).json(shop)
  }

}
