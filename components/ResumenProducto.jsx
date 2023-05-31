import Image from 'next/image';
import React from 'react'
import useBeer from "@/hooks/useBeer"
import { BsXCircle } from "react-icons/bs";

export const ResumenProducto = ({producto}) => {
  const subtotal = (producto.precio * producto.cantidad).toFixed(2);

  const {categoriaActual,handleEditarCantidad,handleEliminarProducto} = useBeer()    


  return (
    <div>
        <div className='flex flex-wrap mx-auto justify-center items-center border-2 border-gray-400 rounded-xl mt-5 p-2'>
            
            <Image className='w-[80px] md:[150px]'  src={`/assets/images/${producto.imagen}.png`} alt="imagen producto" width="150" height="150" />

            <div className='flex-col items-center mx-auto md:w-[450px] justify-center'>
              <h1 className='font-principal text-[1.55rem] md:text-5xl'>{producto.nombre}</h1>
              <p className='font-principal  text-xl md:text-2xl mt-5'>Cantidad: {producto.cantidad}</p>
              <p className='font-principal text-3xl md:text-4xl mt-2 text-indigo-600'>Precio ${producto.precio}</p>
              <p className='font-principal text-xl md:text-2xl mt-2'>SubTotal: ${subtotal}</p>
            </div>

            <div className=''>

              <button 
                onClick={() => handleEditarCantidad(producto.id)}
                className='md:text-2xl text-lg font-principal text-indigo-500 flex gap-2'>
                <BsXCircle size={32} /> Editar
              </button>

              <button 
                onClick={() => handleEliminarProducto(producto.id)}
                className='mt-4 text-lg md:text-2xl font-principal text-red-500 flex gap-2'>
                <BsXCircle size={32} /> Eliminar
              </button>

            </div>

        </div>
    </div>
  )
}
