import { express } from "express";


const router = express.router()

import {CreateBooks , getAllBooks , updateBooks , deleteBooks} from '../controllers/BookControl'


router.post('/' , CreateBooks)
router.get('/', getAllBooks)
router.patch('/' , updateBooks)
router.delete('/' , deleteBooks)

export default router