import { Button } from '@/components/Button'
import Image from 'next/image' //otimização por parte do Next para a imagem permanecer leve
import { User } from 'lucide-react'

import  nlwLogo  from './assets/logo.svg'
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

        {/**login */}
        <a href="" className='flex items-center gap-3 text-left hover:text-gray-300 transition-colors'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
            <User className='h-5 w-5 text-gray-700'></User>
          </div>

          <p className='text-sm leading-snug max-w-[140px] '>
            <span className='underline'>Crie sua conta</span>  e salve suas memórias!
          </p>
        </a>
          {/**Hero */}
          <div className='space-y-5'>
            <Image src={nlwLogo} alt="NLW"/>
            
            <div className='max-w-[420px] space-y-1'>
              <h1 className='text-5xl font-bold leading-tight text-gray-50'>
                Sua cápsula do tempo
              </h1>
              <p className='text-lg leading-relaxed'>
                Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
              </p>
            </div>

            <a className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600 transition-colors' href="">CADASTRAR LEMBRANÇA</a>
          </div>
          {/**Hero */}
          <div className='text-sm leading-relaxed text-gray-200'>
            Feito com 💜 no NLW da {' '} 
            <a 
              href="" 
              rel='noreferrer' 
              target='blank' 
              className='underline hover:text-gray-100'
            >
              Rocketseat</a> 
          </div>
      </div>
      
      {/**Direita */}
      <div className='flex flex-col p-16 bg-[url(assets/bg-stars.svg)] bg-cover'> {/**flex col para deixar um itetm a baixo do outro */}
        <div className='flex flex-1 items-center justify-center'>
          <p className='text-center leading-relaxed w-[360px]'>
            Você ainda não registrou nenhuma lembrança, comece a{' '} {/**dar espaço entre as palavras*/}
            <a href='' className='underline hover:text-gray-300'>criar agora</a>!
          </p>
        </div>
        
      </div>
    </main>
  )
}
