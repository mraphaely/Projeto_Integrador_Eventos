import { Router } from "express";
import { create, getEventos, getEvento } from "../controllers/eventoController.js";

const router = Router();

router.get('/listar', getEventos);
router.post('/criar', create);
router.get('/:id', getEvento);
// router.put('/:id', updateEvento);
// router.delete('/:id', deleteEvento);

export default router;
