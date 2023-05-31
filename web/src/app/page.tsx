 //otimização por parte do Next para a imagem permanecer leve
import { User } from 'lucide-react'


import { Copyright } from '@/components/Copyright'
import { TextHero } from '@/components/TextHero'
import { Login } from '@/components/Login'
import { EmptyMemory } from '@/components/EmptyMemory'
//Typescript + JSX = TSX
//JSX = JS + XML

export default function Home() { //Componente é uma função que retorna seu conteudo
  return ( //o tailwind é uma forma de resumir o que fariamos no css, mas isso sendo inline
    <main className='grid grid-cols-2 min-h-screen'>
      {/**Esquerda */}
      <div className='flex flex-col bg-[url(assets/bg-stars.svg)] items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10'>
        {/**Blur */}
        <div className='absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full'></div>
        {/**Stripes */}
        <div className='absolute right-2 top-0 bottom-0 w-2 bg-stripes '></div>
          <Login/>
          <TextHero/>
          <Copyright/>
      </div>
      <div className='flex flex-col p-16 bg-[url(assets/bg-stars.svg)] bg-cover'> {/**flex col para deixar um itetm a baixo do outro */}
       <EmptyMemory/>
      </div>
    </main>
  )
}

/* git devolve um codigo quando envia as infos para o front, um codigo como
validação -> o access token*/

/* 
OAuth é algo importante para o fluxo de autenticação
**/