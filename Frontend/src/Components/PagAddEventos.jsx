import React from "react";
import { Form, Button} from 'react-bootstrap'
import { H1, Caixa1, Caixa, Label,Div, Linha1, Linha2,InputDescricao, Linha3, Btn, Input } from "../Styles/PagAddEventos"; // Certifique-se de que Input é importado
import "../Styles/PagAddEventos.css"
import axios  from "axios";

const PagAddEventos = () => {
    const [titulo, setTitulo] = React.useState(''); 
    const [descricao, setDescricao] = React.useState(null); 
    const [message, setMessage] = React.useState(null); 
    const [loading, setLoading] = React.useState(null); 
     
    const HandlePost = async (event) => {
  
      event.preventDefault();
      setLoading("Carregando...");
  
      try {
          await axios.post("http://localhost:3333/eventos/criar", {
              titulo,
              local,
              image,
              cidade,
              data,
              categoria,
              palestrante,
              vagas,
              ingresso,
              descricao
          })
          setMessage("Evento criado com sucesso!");
          setLoading("");
          
      } catch (error) {
          setMessage("Não foi possível salvar seu evento!");
      }
    };
  
    return (
      <Form onSubmit={HandlePost}>
      <Form.Group className="mb-3" controlId="tarefa">
        <Form.Label>Título:</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Digite o título da sua tarefa" 
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="tarefa">
        <Form.Label>Título:</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Digite o título da sua tarefa" 
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="tarefa">
        <Form.Label>Título:</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Digite o título da sua tarefa" 
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="tarefa">
        <Form.Label>Título:</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Digite o título da sua tarefa" 
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="tarefa">
        <Form.Label>Título:</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Digite o título da sua tarefa" 
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="tarefa">
        <Form.Label>Título:</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Digite o título da sua tarefa" 
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        required/>
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="descricao">
        <Form.Label>Descrição:</Form.Label>
        <Form.Control 
        type="textarea" 
        placeholder="Digite a descrição da seua tarefa"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
         />
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Concluir
      </Button>
      {message ? <p>{message}</p> : <p>{loading}</p>}
    </Form>
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
}

export default PagAddEventos;
