import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'Lucas Mendes',
      telefone: '+5511991234567',
      email: 'lucas.mendes@email.com',
      id: 1,
      imagem:
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nome: 'Fernanda Costa',
      telefone: '+5521987654321',
      email: 'nanda.costa@servidor.net',
      id: 2,
      imagem:
        'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nome: 'Rafael Souza',
      telefone: '+5531998765432',
      email: 'rafa.souza@tech.io',
      id: 3,
      imagem:
        'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvc3RvfGVufDB8fDB8fHww'
    },
    {
      nome: 'Camila Lima',
      telefone: '+5541912345678',
      email: 'camila.design@studio.com',
      id: 4,
      imagem:
        'https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nome: 'Bruno Alves',
      telefone: '+5551923456789',
      email: 'bruno.alves@corporativo.com',
      id: 5,
      imagem:
        'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHJvc3RvfGVufDB8fDB8fHww'
    },
    {
      nome: 'Juliana Martins',
      telefone: '+5561934567890',
      email: 'jujumartins@webmail.com',
      id: 6,
      imagem:
        'https://plus.unsplash.com/premium_photo-1708271125737-d016bb801b69?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHJvc3RvfGVufDB8fDB8fHww'
    },
    {
      nome: 'Rodrigo Pereira',
      telefone: '+5571945678901',
      email: 'rodrigo.p@exemplo.org',
      id: 7,
      imagem:
        'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxyb3N0b3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      nome: 'Patrícia Rocha',
      telefone: '+5581956789012',
      email: 'paty.rocha@artes.net',
      id: 8,
      imagem:
        'https://plus.unsplash.com/premium_photo-1723773715903-fed95064c2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzgwfHxyb3N0b3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      nome: 'Gustavo Ribeiro',
      telefone: '+5591967890123',
      email: 'gustavo_rib@loja.com.br',
      id: 9,
      imagem:
        'https://plus.unsplash.com/premium_photo-1706547270028-c4ea7a5f25e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHxyb3N0b3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      nome: 'Mariana Dias',
      telefone: '+5511978901234',
      email: 'mari.dias@consultoria.com',
      id: 10,
      imagem:
        'https://plus.unsplash.com/premium_photo-1706543162519-db1284b8a09c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxyb3N0b3xlbnwwfHwwfHx8MA%3D%3D'
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
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLocaleLowerCase() ===
          action.payload.nome.toLocaleLowerCase()
      )

      if (contatoJaExiste) {
        alert('Esse contato já existe na sua lista')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
