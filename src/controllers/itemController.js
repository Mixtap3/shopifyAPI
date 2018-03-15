import Item from '../models/Item'

export default {

  getItems: async (req, res) => {
    const items = await Item.find({})
    res.json(items)
  },

  newItem: async (req, res) => {
    const newItem = new Item(req.body)
    const item = await newItem.save()
    res.status(201).json(item)
  }

}
