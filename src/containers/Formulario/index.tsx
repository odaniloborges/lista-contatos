import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [imagem, setImagem] = useState<string | null>(null)

  // converte arquivo para DataURL (base64)
  const fileToDataUrl = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        resolve(String(reader.result))
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })

  const handleImageChange = async (
    evento: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = evento.target.files?.[0]
    if (!file) {
      setImagem(null)
      return
    }

    // validação simples (tamanho/tipo) opcional:
    if (!file.type.startsWith('image/')) {
      // mostrar mensagem de erro para o usuário, se desejar
      return
    }

    try {
      const dataUrl = await fileToDataUrl(file)
      setImagem(dataUrl)
    } catch (err) {
      // lidar com erro de leitura
      console.error('Erro ao ler imagem', err)
    }
  }

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        telefone,
        email,
        imagem
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        ></Campo>
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="telefone"
          placeholder="Telefone"
        ></Campo>
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="Email"
        ></Campo>
        <Campo
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          // Como Campo é um styled.input, ele aceita type=file; se não for, substitua por <input />
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
