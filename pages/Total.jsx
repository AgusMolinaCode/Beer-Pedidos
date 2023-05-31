import Layout from "@/layout/Layout";
import useBeer from "@/hooks/useBeer";
import { toast } from "react-toastify";
import router from "next/router";

export default function Total() {
    const {pedido, nombre, setNombre,mesa,setMesa,enviarOrden,total} = useBeer()

    const Total = total.toFixed(2)

    const handleInput = (e) => {
        const value = e.target.value;
        if (!/^\d+$/.test(value) || parseInt(value) < 0 || parseInt(value) > 20) {
            e.target.value = value.slice(0, -1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Producto agregado al pedido', {
            autoClose: 1300,
            position: 'top-center',
        });
        enviarOrden(e);
        setTimeout(() => {
            router.push('/').then(() => {
                window.location.reload();
            });
        }, 2900);
    };

    return (
        <Layout title={'Total'} description="Total Pagina">
            <div className="pb-20">
                <div className='flex-col justify-center items-center mt-20'>
                    <p className="font-principal text-[2rem] font-semibold text-center text-black">Confirmar pedido:</p>
                </div>

                <div className="flex justify-center px-2">
                   
                    <form 
                        action=""
                        onSubmit={handleSubmit}
                    >

                        <div className="flex-col justify-center items-center mt-16 w-[310px] md:w-[500px]">

                            <div className="grid">
                                <label htmlFor="nombre" className="font-principal text-[2rem] font-semibold text-center text-black">Nombre:</label>
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    id="nombre" 
                                    className="border-2 border-black rounded-md p-2 " 
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="grid mt-10">
                                <label htmlFor="mesa" className="font-principal text-[2rem] font-semibold text-center text-black"><span className="text-red-500">*</span> Mesa numero:</label>
                                <input
                                    type="text"
                                    name="mesa"
                                    id="mesa"
                                    className="border-2 border-black rounded-md p-2"
                                    onInput={handleInput}
                                    value={mesa}
                                    onChange={(e) => setMesa(e.target.value)}
                                />
                            </div>

                            <p className="text-[3rem] text-indigo-600 text-center mt-10 font-principal">TOTAL: ${Total}</p>

                        </div> 

                        <button 
                            className={`${pedido.length === 0 || nombre.trim() === '' || nombre.length < 4 || mesa.trim() === '' ? 'bg-red-200 text-gray-300' : 'text-black bg-red-400'} font-principal mt-10 flex justify-center mx-auto text-xl lg:text-3xl uppercase font-bold p-3 rounded-xl`}
                            disabled={pedido.length === 0 || nombre.trim() === '' || nombre.length < 4 || mesa.trim() === ''}
                        >
                            Confirmar pedido
                        </button>

                    </form>

                </div>

                <div className="mt-20 flex gap-2 px-20">
                    <span className="text-red-500 text-[2rem]">*</span>
                    <p className="max-w-[500px] font-secondary">Por favor, revise el cartel sobre su mesa para encontrar su número de mesa. Si no encuentra su número, no dude en llamar a nuestro amable personal para ayudarle.</p>
                </div>
            </div>
        </Layout>
    )
}
