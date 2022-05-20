import Head from "next/head";
import CustomerForm from "../../../../components/CustomerForm";
import { NextPageContext } from "next";

export default function Customer({
  createdId,
  createdName,
  createdEmail,
  createdPhone,
  createdAddress,
  createdCpf,
}) {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Aluga Mais - Atualizar Cliente</title>
      </Head>

      <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold">Atualizar Cliente</h1>
          <CustomerForm
            action={"UPDATE"}
            createdId={createdId}
            createdName={createdName}
            createdEmail={createdEmail}
            createdPhone={createdPhone}
            createdAddress={createdAddress}
            createdCpf={createdCpf}
          />
        </div>
      </main>
    </div>
  );
}

/**
 *
 * @param {NextPageContext} context
 * @returns
 */

export async function getServerSideProps(context) {
  const { id } = context.query;

  const response = await fetch(
    `http://localhost:3000/api/admin/customer/${id}`
  );

  if (response.status == 200) {
    const data = await response.json();

    return {
      props: {
        createdId: data.id,
        createdName: data.name,
        createdEmail: data.email,
        createdPhone: data.phone,
        createdAddress: data.address,
        createdCpf: data.cpf,
      },
    };
  } else {
    return {
      props: {
        createdId: null,
        createdName: null,
        createdEmail: null,
        createdPhone: null,
        createdAddress: null,
        createdCpf: null,
      },
    };
  }
}
