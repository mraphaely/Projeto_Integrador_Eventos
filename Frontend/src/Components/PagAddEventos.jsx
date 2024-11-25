import React from "react";
import { Form, Button } from "react-bootstrap";
import {
  H1,
  Caixa1,
  Caixa,
  Label,
  Div,
  Linha1,
  Linha2,
  InputDescricao,
  Linha3,
  Btn,
  Input,
} from "../Styles/PagAddEventos"; // Certifique-se de que Input é importado
import "../Styles/PagAddEventos.css";
import axios from "axios";

const PagAddEventos = () => {
  const [titulo, setTitulo] = React.useState("");
  const [local, setLocal] = React.useState("");
  const [imagem, setImagem] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [data, setData] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  const [palestrante, setPalestrante] = React.useState("");
  const [vagas, setVagas] = React.useState("");
  const [ingresso, setIngresso] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const handleFileChange = (event) => {
    setImagem(event.target.files[0].name);
  };

  const HandlePost = async (event) => {
    event.preventDefault();
    setLoading("Carregando...");

    try {
      await axios.post("http://localhost:3333/eventos/criar", {
        titulo,
        local,
        imagem,
        cidade,
        data,
        categoria,
        palestrante,
        vagas,
        ingresso,
        descricao,
      });
      setMessage("Evento criado com sucesso!");
      setLoading("");
    } catch (error) {
      console.log(error);
      setMessage("Não foi possível salvar seu evento!");
    }
  };

  return (
    <Caixa1>
      <Caixa className="caixa">
        <H1>Área de Cadastro de Eventos </H1>

        <Form onSubmit={HandlePost}>
          <Div>
            <Linha1>
              <Form.Group className="mb-3" controlId="titulo">
                <Label>Título:</Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o título do seu evento"
                  value={titulo}
                  onChange={(event) => setTitulo(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="local">
                <Label>Local:</Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o local do evento"
                  value={local}
                  onChange={(event) => setLocal(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="imagem">
                <Label>Imagem:</Label>
                <Form.Control
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cidade">
                <Label>Cidade:</Label>
                <Form.Control
                  type="text"
                  placeholder="Digite a cidade do seu evento"
                  value={cidade}
                  onChange={(event) => setCidade(event.target.value)}
                  required
                />
              </Form.Group>
            </Linha1>
            <Linha2>
              <Form.Group className="mb-3" controlId="data">
                <Label>Data:</Label>
                <Form.Control
                  type="date"
                  value={data}
                  onChange={(event) => setData(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="categoria">
                <Label>Categoria:</Label>
                <Form.Control
                  type="text"
                  placeholder="Digite a categoria do seu evento"
                  value={categoria}
                  onChange={(event) => setCategoria(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="palestrante">
                <Label>Palestrante:</Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o palestrante do seu evento"
                  value={palestrante}
                  onChange={(event) => setPalestrante(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="vagas">
                <Label>vagas:</Label>
                <Form.Control
                  type="number"
                  placeholder="Digite a quantidade de vagas do seu evento"
                  value={vagas}
                  onChange={(event) => setVagas(event.target.value)}
                  required
                />
              </Form.Group>
            </Linha2>
          </Div>
          <Linha3>
            <Form.Group className="mb-3" controlId="vagas">
              <Label>Ingresso:</Label>
              <Form.Control
                type="number"
                placeholder="Digite a quantidade de ingressos do seu evento"
                value={ingresso}
                onChange={(event) => setIngresso(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="descricao">
              <Label>Descrição:</Label>
              <Form.Control
                type="textarea"
                placeholder="Digite a descrição da seua tarefa"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
              />
            </Form.Group>
          </Linha3>

          <Btn variant="primary" type="submit">
            CADASTRAR
          </Btn>
          {message ? <p>{message}</p> : <p>{loading}</p>}
        </Form>
      </Caixa>
    </Caixa1>
  );
  // return (
  //     <Caixa1>
  //         <Caixa className="caixa">

  //         <H1>Área de Cadastro de Eventos </H1>

  //         <Div>

  //         <Linha1>
  //             <Label>Título do Evento:</Label>
  //             <Input type='text' id='titulo' name='Titulo'/>

  //             <Label>Upload de Imagem:</Label>
  //             <Input type='file' id='imagem' name='Imagem'/>

  //             <Label>Data:</Label>
  //             <Input type='date' id='data' name='Data'/>

  //             <Label>Categoria:</Label>
  //             <Input type='text' id='categoria' name='Categoria'/>

  //             <Label>Total de Vagas:</Label>
  //             <Input type='number' id='vagas' name='Vagas'/>
  //         </Linha1>
  //         <Linha2>
  //             <Label>Local:</Label>
  //             <Input type='text' id='local' name='Local'/>

  //             <Label>Cidade:</Label>
  //             <Input type='text' id='cidade' name='Cidade'/>

  //             <Label>Horário:</Label>
  //             <Input type='time' id='horario' name='Horario'/>

  //             <Label>Nome do Palestrante:</Label>
  //             <Input type='text' id='palestrante' name='Palestrante'/>

  //             <Label>Valor do Ingresso:</Label>
  //             <Input type='number' id='valor' name='Valor'/>
  //         </Linha2>

  //         </Div>

  //        <Linha3>
  //             <Label>Descrição:</Label>
  //             <InputDescricao type='text' id='descricao' name='Descricao'/>
  //        </Linha3>

  //         <Btn to="/pathToSubmit">CADASTRAR</Btn> {/* Ajuste a rota conforme necessário */}
  //         </Caixa>
  //     </Caixa1>
  // );
};

export default PagAddEventos;
