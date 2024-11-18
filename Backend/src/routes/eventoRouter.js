import { Router } from "express";
import { create, getEventos } from "../controllers/eventoController.js";

const router = Router();

router.get('/listar', getEventos);
router.post('/criar', create);
// router.get('/:id', getTarefa);
// router.put('/:id', updateTarefa);
// router.delete('/:id', deleteTarefa);

export default router;
