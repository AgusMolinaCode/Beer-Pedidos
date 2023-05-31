import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, title = '', description = '' }) {
  return (
    <>
      <Head>
            <title>{`Busch Beer - ${title}`}</title>
            <meta name="description" content={description}/>
        </Head>

      <div className="">
            <main >
                <div className="px-2">
                <div className="flex justify-center mt-5 mx-auto">
                <Image
                    width={150}
                    height={150}
                    src="/assets/images/logo2.png"
                    alt="imagen logotipo"
                />
              </div>
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}