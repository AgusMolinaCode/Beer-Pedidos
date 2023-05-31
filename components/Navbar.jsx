import Image from 'next/image'
import React from 'react'
import useBeer from "@/hooks/useBeer"
import Categoria from "@/components/Categoria"
import Link from 'next/link'
import router from 'next/router'

const Navbar = () => {

  const {categorias,pedido} = useBeer()

  const handleClickResumen = (event) => {
    if (pedido.length === 0) {
      event.preventDefault();
    } else {
      router.push('/Resumen');
    }
  };

  const handleClickTotal = (event) => {
    if (pedido.length === 0) {
      event.preventDefault();
    } else {
      router.push('/Total');
    }
  };

  return (
    <div className='flex justify-around gap-4 pt-4 items-center px-2'>

      <div className='flex justify-center'>

        <div className='hidden md:block'>
          <Link href={'/'}>
            <Image src="/assets/images/logo2.png" alt="logo" width="150" height="150" />
          </Link>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-4'>
           {
            categorias.map(categoria => (
                <Categoria key={categoria.id} categoria={categoria}/>
            ))
          }
        </div>

      </div>  

      <div className='flex items-center gap-4 justify-center'>

        <Link 
          onClick={handleClickResumen}
          href={'/Resumen'} 
          className={`${pedido.length === 0 ? 'bg-red-200 text-gray-300 disabled' : 'text-black bg-red-400'} font-principal text-xl lg:text-3xl uppercase font-bold p-3 rounded-xl`}>
            Resumen
        </Link>

        <Link 
          onClick={handleClickTotal}
          href={'/Total'} 
          className={`${pedido.length === 0 ? 'bg-red-200 text-gray-300 disabled' : 'text-black bg-red-400'} font-principal text-xl lg:text-3xl uppercase font-bold p-3 rounded-xl`}>
            Total
        </Link>

        
      </div>
        
    </div>
  )
}

export default Navbar