import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Head>
        <title>Aluga Mais</title>
        <meta name="description" content="Aluga Mais, aluguel de veículos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen overflow-hidden">
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-[url('/assets/images/publicity/appresentation_site_background.jpg')] bg-no-repeat bg-cover">
          <div className="w-screen h-screen bg-black opacity-70 flex flex-col justify-center items-center">
            <div className="mb-20 flex flex-col justify-center items-center self-center">
              <h1 className="text-3xl font-bold text-white">
                Bem Vindo à Aluga Mais
              </h1>
              <span className="text-white font-thin">Aluguel de veículos</span>
            </div>

            <Image alt="Scroll down animation" width={50} height={50} src={'/assets/gifs/mouse_scroll_animation.gif'}></Image>
          </div>
        </div>
        <div className="mt-20 mb-20 flex flex-col justify-center items-center">
          <h1 className="text-black text-xl">Escolha um modelo</h1>
          <div className="w-1/2 mt-10 flex flex-row flex-wrap justify-center items-center">
            <div className="w-52 h-56 mr-5 mb-5 drop-shadow-2xl flex flex-col justify-center items-center bg-white rounded-md opacity-100 cursor-pointer">
              <h1 className="p-2 font-thin text-black mb-5 text-center">
                Grupo A - Compacto (ECMN)
              </h1>
              <Image
                alt="Car image"
                width={180}
                height={101}
                src={"/assets/images/cars/uno_1.0.png"}
              ></Image>
            </div>
            <div className="w-52 h-56 mr-5 mb-5 drop-shadow-2xl flex flex-col justify-center items-center bg-white rounded-md opacity-100 cursor-pointer">
              <h1 className="p-2 font-thin text-black mb-5 text-center">
                Grupo B - Compactos com Ar (ECMR)
              </h1>
              <Image
                alt="Car image"
                width={180}
                height={101}
                src={"/assets/images/cars/kwid_1.0.png"}
              ></Image>
            </div>
            <div className="w-52 h-56 mr-5 mb-5 drop-shadow-2xl flex flex-col justify-center items-center bg-white rounded-md opacity-100 cursor-pointer">
              <h1 className="p-2 font-thin text-black mb-5 text-center">
                Grupo C - Econômico Com Ar (EDMR)
              </h1>
              <Image
                alt="Car image"
                width={180}
                height={101}
                src={"/assets/images/cars/sandero_1.0.png"}
              ></Image>
            </div>
            <div className="w-52 h-56 mr-5 mb-5 drop-shadow-2xl flex flex-col justify-center items-center bg-white rounded-md opacity-100 cursor-pointer">
              <h1 className="p-2 font-thin text-black mb-5 text-center">
                Grupo CK - Econômico C/ Ar Fast (HDMR)
              </h1>
              <Image
                alt="Car image"
                width={180}
                height={101}
                src={"/assets/images/cars/onix_1.0.png"}
              ></Image>
            </div>
            <div className="w-52 h-56 mr-5 mb-5 drop-shadow-2xl flex flex-col justify-center items-center bg-white rounded-md opacity-100 cursor-pointer">
              <h1 className="p-2 font-thin text-black mb-5 text-center">
                Grupo CE - Econômico Especial C/ar (HCMR)
              </h1>
              <Image
                alt="Car image"
                width={180}
                height={101}
                src={"/assets/images/cars/argo_1.0.png"}
              ></Image>
            </div>
            <div className="w-52 h-56 mr-5 mb-5 drop-shadow-2xl flex flex-col justify-center items-center bg-white rounded-md opacity-100 cursor-pointer">
              <h1 className="p-2 font-thin text-black mb-5 text-center">
                Grupo CS - Econômico Sedan C/ar (EXMR)
              </h1>
              <Image
                alt="Car image"
                width={180}
                height={101}
                src={"/assets/images/cars/prisma_1.0.png"}
              ></Image>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
