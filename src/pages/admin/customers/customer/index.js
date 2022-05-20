import Head from "next/head";
import CustomerForm from "../../../../components/CustomerForm";

export default function Customer() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Aluga Mais - Adicionar Cliente</title>
      </Head>

      <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold">Adicionar Cliente</h1>
          <CustomerForm action={"STORE"} />
        </div>
      </main>
    </div>
  );
}
