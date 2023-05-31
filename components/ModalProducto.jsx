import React, { useState, useEffect } from 'react'
import useBeer from '@/hooks/useBeer'
import Image from 'next/image'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import {BsXCircle} from "react-icons/bs"

export const ModalProducto = () => {

    const { productos, handleModal, handlePedido, pedido } = useBeer()

    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    useEffect(() => {
        if (pedido.some((pedidoState) => pedidoState.id === productos.id)) {
            const productoEdicion = pedido.find(
                (pedidoState) => pedidoState.id === productos.id
            )
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
    }, [productos, pedido])

    if (cantidad < 1) setCantidad(1)

    if (cantidad > 5) setCantidad(5)

    return (
        <div>
            <div className=' flex justify-center m-2'>
                    <button
                        onClick={handleModal}
                        className=''
                    >
                        <BsXCircle 
                           color='red' size={30} 
                        />
                    </button>
                </div>
            <div className='flex flex-wrap justify-center mx-auto relative px-2'>

                <Image
                    width={390}
                    height={320}
                    className='md:w-[390px] md:h-full w-[100px] h-[200px]'
                    alt={`Imagen Producto - ${productos.nombre}`}
                    src={`/assets/images/${productos.imagen}.png`}
                />

                <div className='flex-col items-center'>
                    <h1 className='text-3xl font-principal'>{productos.nombre}</h1>
                    <div className='hidden md:block w-[300px] font-secondary mt-10'>
                        <h1>{productos.descripcion}</h1>
                    </div>
                    <p className='flex text-center justify-center mt-5 font-principal text-5xl'>${productos.precio}</p>
                    <div className='flex justify-center mt-6 gap-4'>

                        <button
                            onClick={() => setCantidad(cantidad - 1)}
                        >
                            <AiOutlineMinusCircle size={32} />
                        </button>

                        <p className='text-2xl font-principal'>{cantidad}</p>

                        <button
                            onClick={() => setCantidad(cantidad + 1)}
                        >
                            <AiOutlinePlusCircle size={32} />
                        </button>
                    </div>

                    <div>
                        <button
                            className='bg-indigo-400 hover:bg-indigo-500 duration-300 mt-8 flex justify-center mx-auto text-white font-principal text-2xl px-4 py-2 rounded-xl'
                            onClick={() => handlePedido({ ...productos, cantidad })}
                        >
                            {edicion ? 'Modificar Pedido' : 'Agregar'}
                        </button>
                    </div>
                </div>

                
            </div>
        </div>
    )
}
