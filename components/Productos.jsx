import React from 'react'
import useBeer from '@/hooks/useBeer'
import Image from 'next/image'


const Productos = ({producto}) => {

  const {handleSetProducto,handleModal,categoriaActual} = useBeer()    

  const {nombre,precio,imagen,descripcion} = producto


  return (
    <div>
        <div className='flex-col justify-center items-center mt-10'>
            <p className="font-principal text-[1.6rem] font-semibold text-center text-black">{nombre}</p>
            <button
                className=''
                onClick={() => {
                    handleModal()
                    handleSetProducto(producto)
                }}
            >
                <Image className='flex justify-center mx-auto hover:scale-105 duration-500' src={`/assets/images/${imagen}.png`} alt="imagen producto" width="250" height="250" />
            </button>
            <p className='text-center font-bold text-[2.85rem] font-principal'>${precio}</p>
        </div>
    </div>
  )
}

export default Productos