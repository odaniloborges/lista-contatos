import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Jai Barcellos',
      telefone: '+119543432541',
      email: 'jai@gmail.com'
    },
    {
      id: 2,
      nome: 'Jai Barcellos',
      telefone: '+119543432541',
      email: 'jai@gmail.com'
    },
    {
      id: 3,
      nome: 'Jai Barcellos',
      telefone: '+119543432541',
      email: 'jai@gmail.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
