import Image from 'next/image';
import React from 'react'
import useBeer from "@/hooks/useBeer"
import { BsXCircle } from "react-icons/bs";

export const ResumenProducto = ({producto}) => {
  const subtotal = (producto.precio * producto.cantidad).toFixed(2);

  const {categoriaActual,handleEditarCantidad,handleEliminarProducto} = useBeer()    


  return (
    <div>
        <div className='flex gap-5 justify-center items-center'>
            
            <Image className={`${categoriaActual?.id === 1 ? 'w-[150px]' : 'w-[150px]'} `} src={`/assets/images/${producto.imagen}.png`} alt="imagen producto" width="150" height="150" />

            <div className='flex-col items-center w-[450px] justify-center'>
              <h1 className='font-principal text-5xl'>{producto.nombre}</h1>
              <p className='font-principal text-2xl mt-5'>Cantidad: {producto.cantidad}</p>
              <p className='font-principal text-4xl mt-2 text-indigo-600'>Precio ${producto.precio}</p>
              <p className='font-principal text-2xl mt-2'>SubTotal: ${subtotal}</p>
            </div>

            <div>

              <button 
                onClick={() => handleEditarCantidad(producto.id)}
                className='text-2xl font-principal text-indigo-500 flex gap-2'>
                <BsXCircle size={32} /> Editar
              </button>

              <button 
                onClick={() => handleEliminarProducto(producto.id)}
                className='mt-4 text-2xl font-principal text-red-500 flex gap-2'>
                <BsXCircle size={32} /> Eliminar
              </button>

            </div>

        </div>
    </div>
  )
}
