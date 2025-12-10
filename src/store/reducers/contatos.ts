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
      id: 1
    },
    {
      nome: 'Monkey D. Luffy',
      telefone: '+829012345678',
      email: 'reidospiratas_borracha@grandline.com',
      id: 2
    },
    {
      nome: 'Ichigo Kurosaki',
      telefone: '+869098765432',
      email: 'shinigami_substituto@soul.com',
      id: 3
    },
    {
      nome: 'Eren Yeager',
      telefone: '+819055551212',
      email: 'ataquedetitas@muralhas.jp',
      id: 4
    },
    {
      nome: 'Saitama',
      telefone: '+829077773333',
      email: 'punch_man_careca@hero.org',
      id: 5
    },
    {
      nome: 'Frieren',
      telefone: '+819022224444',
      email: 'aelfa_milenares@magia.jp',
      id: 6
    },
    {
      nome: 'Tanjiro Kamado',
      telefone: '+869011110000',
      email: 'cacador_de_demonios@agua.com',
      id: 7
    },
    {
      nome: 'Lelouch Lamperouge',
      telefone: '+819066669999',
      email: 'zero_geass@britannia.net',
      id: 8
    },
    {
      nome: 'Spike Spiegel',
      telefone: '+829033338888',
      email: 'bebop_bounty@cosmos.io',
      id: 9
    },
    {
      nome: 'Ken Kaneki',
      telefone: '+869044442222',
      email: 'ghoul_cafeteria@anteiku.com',
      id: 10
    },
    {
      nome: 'Gon Freecss',
      telefone: '+819077771111',
      email: 'hunter_explorer@ilha.net',
      id: 11
    },
    {
      nome: 'Killua Zoldyck',
      telefone: '+829088880000',
      email: 'assassino_eletrico@zoldyck.jp',
      id: 12
    },
    {
      nome: 'Vegeta',
      telefone: '+869012312312',
      email: 'principe_dos_saiyajins@terra.com',
      id: 13
    },
    {
      nome: 'Roronoa Zoro',
      telefone: '+819045645645',
      email: 'caca_espadas@mugiwara.com',
      id: 14
    },
    {
      nome: 'Levi Ackerman',
      telefone: '+829078978978',
      email: 'capitao_maisforte@titas.org',
      id: 15
    },
    {
      nome: 'Izuku Midoriya (Deku)',
      telefone: '+869000011112',
      email: 'oneforall_heroi@academia.jp',
      id: 16
    },
    {
      nome: 'Jotaro Kujo',
      telefone: '+819033337777',
      email: 'oraoraora_starplatinum@stand.com',
      id: 17
    },
    {
      nome: 'Usagi Tsukino (Sailor Moon)',
      telefone: '+829066662222',
      email: 'guerreiradavida@lua.jp',
      id: 18
    },
    {
      nome: 'Shinji Ikari',
      telefone: '+869099990000',
      email: 'eva01_piloto@nerv.org',
      id: 19
    },
    {
      nome: 'Makima',
      telefone: '+819020202020',
      email: 'controle_demonios@publicsafety.com',
      id: 20
    },
    {
      nome: 'Roy Mustang',
      telefone: '+829050505050',
      email: 'alquimista_das_chamas@estado.jp',
      id: 21
    },
    {
      nome: 'Kenshin Himura',
      telefone: '+869080808080',
      email: 'battousai_samurai@meiji.com',
      id: 22
    },
    {
      nome: 'Inuyasha',
      telefone: '+819010101010',
      email: 'hanyou_tessaiga@erafeudal.net',
      id: 23
    },
    {
      nome: 'Fubuki (Tornado do Inferno)',
      telefone: '+829040404040',
      email: 'esfera_psiquica@classeB.org',
      id: 24
    },
    {
      nome: 'Yuji Itadori',
      telefone: '+869070707070',
      email: 'sukuna_receptaculo@jujutsu.jp',
      id: 25
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
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
