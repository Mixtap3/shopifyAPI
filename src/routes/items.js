import express from 'express'
import eRouter from 'express-promise-router'

import itemController from '../controllers/itemController'

const router = eRouter()

router.route('/')
  .get(itemController.getItems)
  .post(itemController.newItem)

export default router
