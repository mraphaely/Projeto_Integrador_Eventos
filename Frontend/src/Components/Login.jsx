import { Caixa, Caixinha1, Caixinha2, H1, P, Btn, Btn2, LabelsInputs, Label, Input } from "../Styles/Login.js"



const Login = () => {
    return(
        <Caixa>
            <Caixinha1>
                <H1>Novo(a) por aqui?</H1>
                <P>Crie sua conta para criar ou descobrir eventos incríveis.</P>

                <Btn to={'/PagCadastro'}>CADASTRO</Btn>
            </Caixinha1>

            <Caixinha2 className="caixa">
                <H1>Faça login no codemarket</H1>
                <LabelsInputs>
                    <Label >Email:</Label>
                    <Input type='text' id='email' name='Email'/>

                    <Label for='senha'>Senha:</Label>
                    <Input type='text' id='senha' name='Senha'/>
                </LabelsInputs>

                <Btn2>ENTRAR</Btn2>
            </Caixinha2>
        </Caixa>

    )
}
export default Login