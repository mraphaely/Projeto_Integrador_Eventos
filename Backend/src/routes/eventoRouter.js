import { request, response, Router } from "express";
import { create, deleteEvento, getAll, getEvento, updateEvento } from "../controllers/tarefaController.js";

const router = Router();

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getTarefa);
router.put('/:id', updateTarefa);
router.delete('/:id', deleteEvento);

export default router;
