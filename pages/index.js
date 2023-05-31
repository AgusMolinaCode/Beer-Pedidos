import Layout from "@/layout/Layout"
import useBeer from "@/hooks/useBeer"
import Productos from "@/components/Productos"


export default function Home() {

  const {categoriaActual} = useBeer()

  return (
    <Layout title={`${categoriaActual?.nombre}`} description="Menu Pagina">
      <div>
          <div className="pt-10">
              <p className="px-2 lg:px-20 font-principal text-xl mt-10 lg:text-[2rem] text-black">Realize su pedido a continuacion:</p>

              <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center justify-items-center pb-20">
                {
                  categoriaActual?.productos?.map(producto => (
                    <Productos key={producto.id} producto={producto}/>
                  ))
                }
              </div>
          </div>
      </div>
    </Layout>
  )
}


