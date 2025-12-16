import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'Goku',
      telefone: '+819034567890',
      email: 'kamehameha_master@capsulecorp.jp',
      id: 1,
      imagem:
        'https://static.wikia.nocookie.net/dragonball/images/e/e4/Goku_arrives_colored.PNG'
    },
    {
      nome: 'Monkey D. Luffy',
      telefone: '+829012345678',
      email: 'reidospiratas_borracha@grandline.com',
      id: 2,
      imagem:
        'https://static.wikia.nocookie.net/onepiece/images/b/b4/Luffy_at_Age_14.png'
    },
    {
      nome: 'Ichigo Kurosaki',
      telefone: '+869098765432',
      email: 'shinigami_substituto@soul.com',
      id: 3,
      imagem:
        'https://static.wikitide.net/deathbattlewiki/f/f6/Portrait.ichigokurosaki.png'
    },
    {
      nome: 'Eren Yeager',
      telefone: '+819055551212',
      email: 'ataquedetitas@muralhas.jp',
      id: 4,
      imagem:
        'https://static.wikia.nocookie.net/shingekinokyojin/images/3/3c/Eren_Jaeger_(Anime)_character_image_(850).png'
    },
    {
      nome: 'Saitama',
      telefone: '+829077773333',
      email: 'punch_man_careca@hero.org',
      id: 5,
      imagem:
        'https://static.wikia.nocookie.net/onepunchman/images/8/81/Saitama_Anime_Profile.png'
    },
    {
      nome: 'Frieren',
      telefone: '+819022224444',
      email: 'aelfa_milenares@magia.jp',
      id: 6,
      imagem:
        'https://static.wikia.nocookie.net/frieren/images/9/9c/Frieren_anime_portrait.png'
    },
    {
      nome: 'Tanjiro Kamado',
      telefone: '+869011110000',
      email: 'cacador_de_demonios@agua.com',
      id: 7,
      imagem:
        "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/a/a9/Tanjiro's_sad_smile_at_Kazumi's_words.png"
    },
    {
      nome: 'Gon Freecss',
      telefone: '+819077771111',
      email: 'hunter_explorer@ilha.net',
      id: 8,
      imagem:
        'https://static.wikia.nocookie.net/hunterxhunter/images/3/3e/HxH2011_EP147_Gon_Portrait.png'
    },
    {
      nome: 'Killua Zoldyck',
      telefone: '+829088880000',
      email: 'assassino_eletrico@zoldyck.jp',
      id: 9,
      imagem:
        'https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png'
    },
    {
      nome: 'Vegeta',
      telefone: '+869012312312',
      email: 'principe_dos_saiyajins@terra.com',
      id: 10,
      imagem:
        'https://static.wikia.nocookie.net/dragonball/images/e/ed/GT_clothes_Vegeta_DBS.png'
    },
    {
      nome: 'Roronoa Zoro',
      telefone: '+819045645645',
      email: 'caca_espadas@mugiwara.com',
      id: 11,
      imagem:
        'https://static.wikia.nocookie.net/onepiece/images/8/8e/Roronoa_Zoro_Pre_Timeskip_Portrait.png'
    },
    {
      nome: 'Izuku Midoriya (Deku)',
      telefone: '+869000011112',
      email: 'oneforall_heroi@academia.jp',
      id: 12,
      imagem:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3b/Obstacle_race_1.png'
    },
    {
      nome: 'Usagi Tsukino (Sailor Moon)',
      telefone: '+829066662222',
      email: 'guerreiradavida@lua.jp',
      id: 13,
      imagem:
        'https://static.wikia.nocookie.net/sailormoon/images/8/8a/Venus_Bust.png'
    },
    {
      nome: 'Yuji Itadori',
      telefone: '+869070707070',
      email: 'sukuna_receptaculo@jujutsu.jp',
      id: 14,
      imagem:
        'https://static.wikia.nocookie.net/vsbattles/images/5/5e/ItadoriIllustration1.jpg'
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
