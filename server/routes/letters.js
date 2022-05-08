import express from 'express';

import { getLetters, createLetter, getLetter, updateLetter, deleteLetter } from '../controllers/letters.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getLetters);
router.post('/', auth, createLetter);
// router.get('/:id', auth, getLetter);
router.patch('/:id', auth, updateLetter);
router.delete('/:id', auth, deleteLetter);

export default router;