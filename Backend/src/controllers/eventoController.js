import  Evento  from "../models/eventoModel.js";
import { z } from "zod";

const eventoSchema = z.object({
  titulo: z.string().trim().min(1, { message: "O título é obrigatório" }),
  tipo: z.string().trim().min(1, { message: "O tipo de evento é obrigatório" }),
  data: z.date().trim().min(1, { message: "O data é obrigatória" }),
  hora: z.string().trim().min(1, { message: "O hora é obrigatória" }),
  local: z.string().trim().min(1, { message: "O local é obrigatória" }),
});


export const getEventos = (resquest, response) => {

  const query = /*sql */`SELECT * FROM eventos`

  Evento.query(query, (error, data) => {
    if (error) {
      return response.json(error)
    }
    return response.status(200).json(data)
  });
};

export const addEventos = (request, response) => {

  const validation = eventoSchema.safeParse(request.body);
  if (!validation.success) {
    return response.status(400).json("Foi barrado na minha validação!");
  }

  const query = "INSERT INTO books(`titulo`, `autor`, `editora`) VALUES (?)"
  const values = [
    validation.data.titulo,
    validation.data.tipo,
    validation.data.data,
  ]

  Evento.query(query, [values], (error) => {
    if (error) {
      return response.json(error)
    }
    return response.status(200).json({ message: "Livro cadastrado com sucesso!" })
  });
};

export const deleteBook = (request, response) => {
  const query = "DELETE FROM books WHERE id = ?"

  Evento.query(query, [request.params.id], (error) => {
    if (error) {
      return response.status(500).json(error);
    }
    return response.status(200).json({ message: "Livro deletado com sucesso!" });
  });
};

export const updateBook = (request, response) => {

  const validation = eventoSchema.safeParse(request.body);
  if (!validation.success) {
    return response.status(400).json(validation.error.issues);
  }

  const query = "UPDATE books SET titulo = ?, autor = ?, editora = ? WHERE id = ?";

  const values = [
    validation.data.titulo,
    validation.data.autor,
    validation.data.editora
  ];

  Evento.query(query, [...values, request.params.id], (error) => {
    if (error) {
      return response.status(500).json(error);
    }
    return response.status(200).json({ message: "Livro atualizado com sucesso!" });
  });
};