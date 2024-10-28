import Tarefa from "../models/tarefaModel.js";
import { z } from "zod";

//validar tarefa
const createSchema = z.object({
    tarefa: z.string({
        invalid_type_error: "A tarefa deve ser um texto",
        required_error: "Tarefa é obrigatória"
    })
        .min(3, { message: "A tarefa deve conter pelo menos 3 caracteres" })
        .max(255, { message: "A tarefa deve conter no máximo 255 caracteres" }),
});

//validar id
const idSchema = z.object({
    id: z.string().uuid({ message: 'ID inválido' })
});

//POST -> criar
export const create = async (request, response) => {
    const createValidation = createSchema.safeParse(request.body);
    if (!createValidation.success) {
        return response.status(400).json(createValidation.error);
    }

    const { tarefa } = createValidation.data;

    //campo escrever opc
    const descricao = request.body?.descricao || null;

    const novaTarefa = { tarefa, descricao };

    try {
        const addTarefa = await Tarefa.create(novaTarefa);
        response.status(201).json({ message: "Tarefa criada", addTarefa });
    } catch (error) {
        console.log(error)
        response.status(500).json({ message: "Erro ao criar tarefa" });
    }
};

//GET => 3333/api/tarefa?page=1&limit=10
export const getAll = async (request, response) => {
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
            proximaPage: totalPages === 0 ? null : `http://localhost:3333/api/tarefas/page=${page + 1}`,
            tarefas: tarefas.rows,
        });

    } catch (error) {
        console.log(error);
        response.status(500).json({ error: "Error ao buscar a tarefas", error });
    }
};

//GET -> tarefa por id
export const getTarefa = async (request, response) => {
    const idValidation = idSchema.safeParse(request.params);
    if (!idValidation.success) {
        return response.status(400).json({ message: idValidation.error });
    }
    const id = idValidation.data.id;

    try {
        const tarefa = await Tarefa.findByPk(id);
        if (!tarefa) {
            return response.status(404).json({ message: "Tarefa não encontrada" });
        }
        response.status(200).json(tarefa);

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Erro ao buscar tarefa" });
    }
};

export const updateTarefa = async (request, response) => {
    response.status(200).json("Chegou no controlador");
}

//DEL -> tarefa por id 
export const deleteEvento = async (request, response) => {
    const idValidation = idSchema.safeParse(request.params);
    if (!idValidation.success) {
        return response.status(400).json({ message: idValidation.error });
    }
    const id = idValidation.data.id;

    try {
        const tarefaDeletada = await Tarefa.destroy({ where: { id } });
        if (tarefaDeletada === 0) {
            return response.status(404).json({ message: "Tarefa não existe" });
        }

        response.status(200).json({ message: "Tarefa deletada com sucesso!" });

    } catch (error) {
        console.log(error);
        response.status(500).json({ error: "Error ao deletar a tarefa", error });
    }
};
