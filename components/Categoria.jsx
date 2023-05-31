import React from 'react'
import useBeer from "@/hooks/useBeer"
import Link from 'next/link'
import { useRouter } from 'next/router'

const Categoria = ({ categoria }) => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  const { categoriaActual, handleClickCategoria } = useBeer()

  const { nombre, id } = categoria

  return (
    <div className='flex gap-4'>
      <Link href='/'
        
          onClick={() => handleClickCategoria(id)}
          className={`${
            isHomePage && categoriaActual?.id === id
              ? 'underline underline-offset-4 text-black'
              : 'text-gray-600'
          } font-principal text-2xl lg:text-3xl uppercase font-bold  duration-300`}
        >
          {nombre}
        
      </Link>
    </div>
  )
}

export default Categoria
