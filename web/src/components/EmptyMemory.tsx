export function EmptyMemory () {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <p className='text-center leading-relaxed w-[360px]'>
        Você ainda não registrou nenhuma lembrança, comece a{' '} {/**dar espaço entre as palavras*/}
        <a href='' className='underline hover:text-gray-300'>criar agora</a>!
      </p>
    </div>
  )
}