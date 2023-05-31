import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const BeerContext = createContext();

const BeerProvider = ({ children }) => {

  const [categorias,setCategorias] = useState([]);  
  const [categoriaActual,setCategoriaActual] = useState({});
  const [productos,setProductos] = useState([]);
  const [modal,setModal] = useState(false);
  const [pedido,setPedido] = useState([]);
  const [nombre,setNombre] = useState('');
  const [mesa,setMesa] = useState('');
  const [total,setTotal] = useState(0);

  const obtenerCategorias = async () => {
    const {data} = await axios('/api/categorias')
    setCategorias(data)
  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  useEffect(() => {
    setCategoriaActual(categorias[0])
  }, [categorias])

  useEffect(() => {
    const total = pedido.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0)
    setTotal(total)
  }, [pedido])

  const handleClickCategoria = id => {
    const categoria = categorias.filter(categoria => categoria.id === id)
    setCategoriaActual(categoria[0])
  }

  const handleSetProducto  = producto => {
    setProductos(producto)
  }

  const handleModal = () => {
    setModal(!modal)
  }


  const handlePedido = ({categoriaId,...producto}) => {

    if(pedido.some(productoState => productoState.id === producto.id)) {
      const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
      setPedido(pedidoActualizado)
      toast.success('Producto actualizado',{
        autoClose: 1300,
        position: 'top-center'

      })
    } else {
      setPedido([...pedido,producto])
      toast.success('Producto agregado al pedido',{
        autoClose: 1300,
        position: 'top-center'
      })
    }
    setModal(!modal)
  }

  const handleEditarCantidad = id => {
    const productoActualizar = pedido.filter(producto => producto.id === id)
    setProductos(productoActualizar[0])
    setModal(!modal)
  }

  const handleEliminarProducto = id => {
    const productosRestantes = pedido.filter(producto => producto.id !== id)
    setPedido(productosRestantes)
    toast.success('Producto eliminado',{
      autoClose: 1300,
      position: 'top-center'
    })
  }

  const enviarOrden = async (e) => {
    e.preventDefault();
  
    try {
      const fechaFormateada = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
  
      // Mapear el pedido para incluir solo la cantidad y el nombre
      const pedidoReducido = pedido.map((producto) => ({
        nombre: producto.nombre,
        cantidad: producto.cantidad,
      }));
  
      const { data } = await axios.post("/api/ordenes", {
        pedido, // Enviar el pedido reducido
        nombre,
        mesa,
        total,
        fecha: fechaFormateada,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BeerContext.Provider 
        value={{
            categorias,
            handleClickCategoria,
            categoriaActual,
            handleSetProducto,
            productos,
            modal,
            handleModal,
            handlePedido,
            pedido,
            handleEditarCantidad,
            handleEliminarProducto,
            nombre,
            setNombre,
            mesa,
            setMesa,
            enviarOrden,
            total,
        }}
    >
      {children}
    </BeerContext.Provider>
  );
};

export { BeerContext, BeerProvider as default };
