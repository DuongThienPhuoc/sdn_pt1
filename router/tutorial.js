import express from 'express'
import {getAllTutorial, getTutorialById,createTutorial} from '../controller/tutorial.js'
const tutorialRouter = express.Router()

tutorialRouter.route('/tutorials')
    .get(getAllTutorial)
    .post(createTutorial)
tutorialRouter.route('/tutorials/:title')
    .get(getTutorialById)
export default tutorialRouter