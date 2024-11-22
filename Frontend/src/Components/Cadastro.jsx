import { Caixa, Caixinha1, Caixinha2, H1, P, Btn, Btn2, LabelsInputs, Label, Input } from "../Styles/Cadastro.js"



const Cadastro = () => {
    return(
        <Caixa>
            <Caixinha1>
                <H1>Bem vindo(a) de volta!</H1>
                <P>Faça login na plataforma para poder criar ou se increver em eventos incríveis.</P>

                <Btn to='/PagLogin'>ENTRAR</Btn>
            </Caixinha1>

            <Caixinha2>
                <H1>Faça Cadastro no codemarket</H1>
                <LabelsInputs>
                    <Label >Email:</Label>
                    <Input type='text' id='email' name='Email'/>

                    <Label for='senha'>Senha:</Label>
                    <Input type='password' id='senha' name='Senha'/>

                    <Label for='repetirSenha'> Repetir senha:</Label>
                    <Input type='password' id='repetirSenha' name='RepetirSenha'/>
                </LabelsInputs>

                <Btn2>CADASTRAR</Btn2>
            </Caixinha2>
        </Caixa>

    )
}
export default Cadastro