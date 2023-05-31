import { ResumenProducto } from "@/components/ResumenProducto"
import useBeer from "@/hooks/useBeer"
import Layout from "@/layout/Layout"

export default function Resumen() {

    const {pedido} = useBeer()


    return (
        <Layout title={'Resumen'} description="Resumen Pagina">
            <div>
                <div className='flex-col justify-center items-center mt-20'>
                    <p className="font-principal text-[2rem] font-semibold text-center text-black">Resumen:</p>
                </div>

                <div className="pb-20 px-2">
                    {
                        pedido.map(producto => (
                            <ResumenProducto key={producto.id} producto={producto}/>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )

}