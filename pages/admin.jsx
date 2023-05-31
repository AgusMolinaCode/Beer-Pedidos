import useSWR from 'swr'
import AdminLayout from '@/layout/AdminLayout'
import React from 'react'
import axios from 'axios'
import  {toast} from 'react-toastify'
import Image from 'next/image'

const Admin = () => {

  const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, { refreshInterval: 1000 })
  console.log(data)

  const complete = async (id) => {
      try {
        await axios.post(`/api/ordenes/${id}`)
        toast.success('Orden completada', {
          position: 'top-center',
          autoClose: 1300})
      } catch (error) {
        toast.error('Hubo un error')
      }
  }

  return (
    <AdminLayout title={'Cocina'} description="Administracion">
        <div>
            <div>
              <h1 className='font-principal text-center mt-10 text-4xl'>Administra tus Pedidos:</h1>
            </div>
            <div className=' md:mt-10 mb-20 gap-3 grid md:grid-cols-2 lg:grid-cols-3'>
                {data && data.length ? data.map((item, index) => (
                    <div key={index} className='mt-10 border-2 border-gray-300 rounded-xl p-4 relative'>
                      <div className='flex-col'>
                        <p className='font-principal  text-gray-500  text-2xl'>Cliente Nombre: <span className='text-black text-3xl'>{item.nombre}</span></p>
                        <p className='font-principal text-gray-500  text-2xl'>Mesa: <span className='text-black text-3xl'>{item.mesa}</span></p>
                        <p className='font-principal  text-gray-500 text-2xl'>Id de pedido: <span className='text-black text-3xl'>{item.id}</span></p>
                      </div>
                        <div className='mt-5 mb-12'>
                            {item.pedido.map(producto => (
                                <div key={producto.id}>
                                  <div className='flex justify-center mx-auto items-center'>
                                    <Image  width={80} height={80} alt={`Imagen Producto - ${producto.nombre}`}
                                    src={`/assets/images/${producto.imagen}.png`}/>
                                    <div className='flex-col gap-2 w-[200px] md:w-[300px]'>
                                      <p className='font-principal text-2xl md:text-3xl'>Producto: {producto.nombre}</p>
                                      <p className='font-principal text-2xl md:text-3xl'>Cantidad: {producto.cantidad}</p>
                                    </div>
                                  </div>
                                </div>
                            ))}
                        </div>

                        <button
                           className='p-2 bg-indigo-500 mt-5 rounded-2xl text-white font-principal text-2xl flex justify-center mx-auto w-[100px]'
                           onClick={() => complete(item.id)}
                        >
                            Listo
                        </button>
                    </div>
                )): <p className='font-principal text-3xl text-center'>No hay ordenes</p>}
            </div>
        </div>
    </AdminLayout>
  )
}

export default Admin
