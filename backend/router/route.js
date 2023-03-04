import { Router } from 'express'
const router = Router()

//import controllers

import * as controller from '../controllers/controller.js' // create an object to access all functions in controller.js

// Questions Routes
// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions)
// router.put('/questions', controller.updateQuestions)
// router
//   .delete('/questions', controller.deleteQuestions)

router
  .route('/questions')
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.deleteQuestions)

router
  .route('/result')
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.deleteResult)
export default router
