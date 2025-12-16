class Contato {
  nome: string
  telefone: string
  email: string
  id: number
  imagem?: string | null | undefined

  constructor(
    nome: string,
    telefone: string,
    email: string,
    id: number,
    imagem?: string | null | undefined
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.id = id
    this.imagem = imagem
  }
}

export default Contato
