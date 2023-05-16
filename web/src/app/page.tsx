import { Button } from '@/components/Button'
import Image from 'next/image'
//Typescript + JSX = TSX
//JSX = JS + XML

export default function Home() { //Componente é uma função que retorna seu conteudo
  return ( //o tailwind é uma forma de resumir o que fariamos no css, mas isso sendo inline
    <div className='h-screen bg-zinc-900 text-zinc-50 p-6'>
      <h1>Capsula do tempo!</h1>
      <Button/>
    </div>
  )
}
