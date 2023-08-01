import express from 'express'
import { MessageResponse,DataResponse,Response } from '../common/reponses.js'

import Book from '../model/Book.js'
const router = express.Router()

router.get('/', (req, res) => {
        res.json("fine")
})


export default router
