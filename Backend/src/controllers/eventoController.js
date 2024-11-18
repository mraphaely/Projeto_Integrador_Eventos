import Evento from "../models/eventoModel.js";
import { z } from "zod";

// Validar tarefa
const createSchema = z.object({
    titulo: z.string({
        invalid_type_error: "O titulo do evento deve ser um texto",
        required_error: "Titulo é obrigatório"
    }),
    local: z.string({
        invalid_type_error: "O local do evento deve ser um texto",
        required_error: "Local é obrigatório"
    }),
    cidade: z.string({
        invalid_type_error: "A cidade do evento deve ser um texto",
        required_error: "Cidade é obrigatório"
    }),
    data: z.string({
        required_error: "Data é obrigatória"
    }),
    horario: z.string({
        required_error: "Horário é obrigatório"
    }),
    categoria: z.string({
        invalid_type_error: "A categoria do evento deve ser um texto",
        required_error: "Categoria é obrigatória"
    }),
    palestrante: z.string({
        invalid_type_error: "O nome do palestrante deve ser um texto",
        required_error: "Palestrante é obrigatório"
    }),
    vagas: z.string({
        required_error: "Vagas é obrigatório"
    }),
    ingresso: z.string({
        required_error: "Ingresso é obrigatório"
    })
});

// POST -> criar
export const create = async (request, response) => {
    const createValidation = createSchema.safeParse(request.body);
    if (!createValidation.success) {
        return response.status(400).json(createValidation.error);
    }

    const { titulo, local, cidade, data, horario, categoria, palestrante, vagas, ingresso } = createValidation.data;

    // Campo opcional
    const descricao = request.body?.descricao || null;
    const image = request.body?.image || null;

    const novoEvento = { titulo, local, image, cidade, data, horario, categoria, palestrante, vagas, ingresso, descricao };

    try {
        const addEvento = await Evento.create(novoEvento);
        response.status(201).json({ message: "Evento criado", addEvento });
    } catch (error) {
        console.log(error)
        response.status(500).json({ message: "Erro ao criar evento" });
    }
};

export const getEventos = async (request, response) => {
    const page = parseInt(request.query.page) || 1;
    const limit = parseInt(request.query.limit) || 10;
    const offset = (page - 1) * 10;

    try {
        const tarefas = await Tarefa.findAndCountAll({
            limit,
            offset
        });//select * from tabela

        const totalPages = Math.ceil(tarefas.count / limit)
        response.status(200).json({
            totalTarefas: tarefas.count,
            totalPages,
            paginaAtual: page,
            itensPorPage: limit,
            proximaPage: totalPages === 0 ? null : `http://localhost:3333/eventos/page=${page + 1}`,
            tarefas: tarefas.rows,
        });

    } catch (error) {
        console.log(error);
        response.status(500).json({ error: "Error ao buscar a tarefas", error });
    }
    // try {
    //     const eventos = await Evento.findAll();
    //     res.status(200).json(eventos);
    // } catch (error) {
    //     console.error("Erro ao listar eventos:", error);
    //     res.status(500).json({ error: "Erro ao listar eventos" });
    // }
};



//validar id
const idSchema = z.object({
    id: z.string().uuid({ message: 'ID inválido' })
});

//validar update
const updateSchema = z.object({
    tarefa:
        z.string()
            .min(3, { message: "A tarefa deve conter pelo menos 3 caracteres" })
            .max(255, { message: "A tarefa deve conter no máximo 255 caracteres" }),
    status: z.enum(["pendente", "concluída"]),
});


//GET => 3333/eventos/select?page=1&limit=10

// //GET -> pegar tarefa por id
// export const getTarefa = async (request, response) => {
//     const idValidation = idSchema.safeParse(request.params);
//     if (!idValidation.success) {
//         return response.status(400).json({ message: idValidation.error });
//     }
//     const id = idValidation.data.id;

//     try {
//         const tarefa = await Tarefa.findByPk(id);
//         if (!tarefa) {
//             return response.status(404).json({ message: "Tarefa não encontrada" });
//         }
//         response.status(200).json(tarefa);

//     } catch (error) {
//         console.log(error);
//         response.status(500).json({ message: "Erro ao buscar tarefa" });
//     }
// };

// //PUT -> mod tarefa
// export const updateTarefa = async (request, response) => {
//     const idValidation = idSchema.safeParse(request.params);
//     if (!idValidation.success) {
//         return response.status(400).json({ message: idValidation.error });
//     };

//     const id = idValidation.data.id;

//     const updateValidation = updateSchema.safeParse(request.body);
//     if (!updateValidation.success) {
//         return response.status(400).json({ message: updateValidation.error });
//     };

//     const { tarefa, status } = updateValidation.data;
//     const descricao = request.body.descricao || "";

//     const tarefaAtualizada = {
//         tarefa,
//         descricao,
//         status
//     };
//     try {
//         const [numAffectedRow] = await Tarefa.update(tarefaAtualizada, {
//             where: { id },
//         });
//         if (numAffectedRow <= 0) {
//             return response.status(404).json({ message: "Tarefa não encontrada" });
//         }
//         response.status(200).json({ message: "Tarefa atualizada com sucesso" });
//     } catch (error) {
//         console.log(error);
//         response.status(500).json({ message: "Erro ao atualizar tarefa" });
//     }
// };

// //DELETE -> del tarefa por id 
// export const deleteTarefa = async (request, response) => {
//     const idValidation = idSchema.safeParse(request.params);
//     if (!idValidation.success) {
//         return response.status(400).json({ message: idValidation.error });
//     }
//     const id = idValidation.data.id;

//     try {
//         const tarefaDeletada = await Tarefa.destroy({ where: { id } });
//         if (tarefaDeletada === 0) {
//             return response.status(404).json({ message: "Tarefa não existe" });
//         }

//         response.status(200).json({ message: "Tarefa deletada com sucesso!" });

//     } catch (error) {
//         console.log(error);
//         response.status(500).json({ error: "Error ao deletar a tarefa", error });
//     }
// };
