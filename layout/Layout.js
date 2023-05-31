import Navbar from "@/components/Navbar"
import Head from "next/head"
import Modal from 'react-modal';
import { ToastContainer } from "react-toastify";
import useBeer from "@/hooks/useBeer";
import { ModalProducto } from "@/components/ModalProducto";
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "@/components/Footer";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

export default function Layout({children, title = '', description = ''}) {

  const { modal } = useBeer()


  return (
    <>
        <Head>
            <title>{`Busch Beer - ${title}`}</title>
            <meta name="description" content={description}/>
        </Head>

        <div className="bg-gradient-to-tr from-gray-100 to-gray-300 back min-h-screen">
        <Navbar />

        {children}

        </div>

        {modal && (
          <Modal
            isOpen={modal} style={customStyles}
          >
            <ModalProducto />
          </Modal>
        )}

        <ToastContainer />

        <Footer />

    </>
  )
}