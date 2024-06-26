import express from 'express';
import controller from './users.controller.js';

const router = express.Router();

router.post('/',controller.signUp);
router.get('/', controller.getAll);
router.get('/:id',controller.getUser);
router.put('/:id',controller.updateUser);
router.delete('/:id',controller.deleteUser);
router.get('/:id/logout',controller.logout);


export default router;