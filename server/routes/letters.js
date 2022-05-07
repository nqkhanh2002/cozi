import express from 'express';

import { getLetters, createLetter } from '../controllers/letters.js'; 

const router = express.Router();

router.get('/', getLetters);
router.post('/', createLetter)

export default router;