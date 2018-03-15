import express from 'express'
import eRouter from 'express-promise-router'

import shopController from '../controllers/shopController'

const router = eRouter()

router.route('/')
  .get(shopController.getShops)
  .post(shopController.newShop)

export default router
