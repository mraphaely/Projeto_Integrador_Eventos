//modificar tudo depois
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

//validar update
const updateSchema = z.object({
    tarefa:
        z.string()
            .min(3, { message: "A tarefa deve conter pelo menos 3 caracteres" })
            .max(255, { message: "A tarefa deve conter no máximo 255 caracteres" }),
    status: z.enum(["pendente", "concluída"]),
});

const situacaoSchema = z.object({
    situacao: z.enum(["pendente", "concluída"])
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

//GET -> pegar tarefa por id
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

//PUT -> mod tarefa
export const updateTarefa = async (request, response) => {
    const idValidation = idSchema.safeParse(request.params);
    if (!idValidation.success) {
        return response.status(400).json({ message: idValidation.error });
    };

    const id = idValidation.data.id;

    const updateValidation = updateSchema.safeParse(request.body);
    if (!updateValidation.success) {
        return response.status(400).json({ message: updateValidation.error });
    };

    const { tarefa, status } = updateValidation.data;
    const descricao = request.body.descricao || "";

    const tarefaAtualizada = {
        tarefa,
        descricao,
        status
    };
    try {
        const [numAffectedRow] = await Tarefa.update(tarefaAtualizada, {
            where: { id },
        });
        if (numAffectedRow <= 0) {
            return response.status(404).json({ message: "Tarefa não encontrada" });
        }
        response.status(200).json({ message: "Tarefa atualizada com sucesso" });
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Erro ao atualizar tarefa" });
    }
};

//PATCH -> mod status da tarefa
export const updateStatusTarefa = async (request, response) => {
    const idValidation = idSchema.safeParse(request.params);
    if (!idValidation.success) {
        return response.status(400).json({ message: idValidation.error });
    }

    const id = idValidation.data.id;
    try {
        const tarefa = await Tarefa.findOne({ raw: true, where: { id } });
        if (!tarefa) {
            return response.status(404).json({ message: "Tarefa não encontrada" });
        };

        if (tarefa.status === 'pendente') {
            //att para concluída
            await Tarefa.update({ status: 'concluída' }, { where: { id } });
        } else if (tarefa.status === 'concluída') {
            //att para pendente
            await Tarefa.update({ status: 'pendente' }, { where: { id } });
        };
        // const tarefaAtualizada = await Tarefa.findByPk(id);
        const tarefaAtualizada = await Tarefa.findOne({
            where: { id },
            attributes: ["id", "tarefa", "status"],
        });
        response.status(200).json(tarefaAtualizada);
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Erro ao atualizar status da tarefa" });
    }
};

export const getTarefaStatus = async (request, response) => {
    const situacaoValidation = situacaoSchema.safeParse(request.params);
    if (!situacaoValidation.success) {
        return response.status(400).json({ error: situacaoValidation.error });
    }
    const { situacao } = situacaoValidation.data;

    try {
        const tarefas = await Tarefa.findAll({ where: { status: situacao } });
        response.status(200).json(tarefas);
    } catch (error){
        console.log(error);
        response.status(500).json({ message: "Erro ao buscar tarefas por situação" });
    }
};

//DELETE -> del tarefa por id 
export const deleteTarefa = async (request, response) => {
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
