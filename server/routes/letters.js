import express from 'express';

import { getLetters, createLetter, getLetter, updateLetter, deleteLetter } from '../controllers/letters.js';

const router = express.Router();

router.get('/', getLetters);
router.post('/', createLetter);
router.get('/:id', getLetter);
router.patch('/:id', updateLetter);
router.delete('/:id', deleteLetter);

export default router;