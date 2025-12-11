import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form } from './styles'

const Formulario = () => {
  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form>
        <Campo type="text" placeholder="Nome"></Campo>
        <Campo type="telefone" placeholder="Telefone"></Campo>
        <Campo type="email" placeholder="Email"></Campo>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
