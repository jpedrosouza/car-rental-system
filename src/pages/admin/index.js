import Head from "next/head";

export default function Admin() {
  const navigateToPage = (page) => {
    window.location.href = page;
  }

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Aluga Mais - Administração</title>
      </Head>

      <main className="w-screen h-full overflow-hidden flex flex-col justify-center items-center">
        <h1>Área Administrativa Aluga Mais</h1>

        <div className="w-1/2 flex flex-row mt-20">
          <div onClick={() => navigateToPage("/admin/cars")} className="w-60 h-60 p-5 flex flex-col mr-5 shadow-2xl rounded-xl justify-center items-center cursor-pointer">
            <h1>Carros</h1>
            <span className="mt-5 text-center font-thin">Liste, adicione e atualize registros de veículos</span>
          </div>
          <div onClick={() => navigateToPage("/admin/customers")} className="w-60 h-60 p-5 flex flex-col mr-5 shadow-2xl rounded-xl justify-center items-center cursor-pointer">
            <h1>Clientes</h1>
            <span className="mt-5 text-center font-thin">Liste, adicione e atualize registros de clientes</span>
          </div>
          <div onClick={() => navigateToPage("/admin/rents")} className="w-60 h-60 p-5 flex flex-col mr-5 shadow-2xl rounded-xl justify-center items-center cursor-pointer">
            <h1>Alugueis</h1>
            <span className="mt-5 text-center font-thin">Liste, adicione e atualize registros de alugueis</span>
          </div>
        </div>
      </main>
    </div>
  );
}
