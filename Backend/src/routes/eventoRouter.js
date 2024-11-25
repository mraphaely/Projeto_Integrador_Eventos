import { Router } from "express";
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { create, getEventos, getEvento } from "../controllers/eventoController.js";

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads')); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });

router.get('/listar', getEventos);
router.post('/criar', upload.single('imagem'), create);
router.get('/:id', getEvento);
// router.put('/:id', updateEvento);
// router.delete('/:id', deleteEvento);

export default router;
