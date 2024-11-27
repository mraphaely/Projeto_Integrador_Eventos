import { Caixa, Caixinha1, Caixinha2, H1, P, Btn2, LabelsInputs, Label, Input } from "../Styles/Contato.js"



const Contato = () => {
    return(
        <Caixa>
            <Caixinha1>
                <H1>Entre em contato por aqui</H1>
                <P>Envie suas dúvidas ou sugestões, será um prazer lhe responder!</P>
            </Caixinha1>

            <Caixinha2 className="caixa">
                <H1>codemarket</H1>
                <LabelsInputs>
                    <Label >Mensagem:</Label>
                    <Input type='text'/>
                </LabelsInputs>

                <Btn2>ENVIAR</Btn2>
            </Caixinha2>
        </Caixa>
    )
}
export default Contato;