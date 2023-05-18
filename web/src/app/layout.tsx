import './globals.css'
import { ReactNode } from 'react'
import { 
  Bai_Jamjuree as BaiJamjuree, // deixando um padrão de reconhecimento para essas fonts
  Roboto_Flex as Roboto } from 'next/font/google' //Next usa a API de fonts da Google, de uma forma a já encontrar dentro do próprio código

const roboto = Roboto({ 
  subsets: ['latin'], 
  variable: '--font-roboto' 
})

const baiJamjuree = BaiJamjuree({ 
  subsets: ['latin'],
  weight: '700', 
  variable: '--font-baiJamjuree'
}) //definindo ambas as fontes, para serem utilizadas

//evita o Layout Shift

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo feita em React, Next JS, Tailwind e Javascript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      {/**Define as fontes que irão ser usadas, fundo e cor de letra */}
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`/**Faz com que a padronização da font sans utilize a var js como padrão */}>{children}</body>
    </html>
  )
}
