import Head from "next/head";
import CarForm from "../../../../components/CarForm";
import { NextPageContext } from "next";

/**
 * @param {{createdAllCarTypes: import("@prisma/client").car_types[], createdAllCustomers: import("@prisma/client").customers[]}} props
 */

export default function Car({ createdAllCarTypes, createdAllCustomers }) {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Head>
        <title>Aluga Mais - Adicionar Carro</title>
      </Head>

      <main className="w-screen flex flex-col justify-center items-center">
        <div className="w-1/2 h-full mt-10 mb-10 flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold">Adicionar Carro</h1>
          <CarForm
            action={"STORE"}
            createdAllCarTypes={createdAllCarTypes}
            createdAllCustomers={createdAllCustomers}
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
  const responseCarTypes = await fetch(
    "http://localhost:3000/api/admin/car_type"
  );
  const responseCarTypesJson = await responseCarTypes.json();

  const responseCustomer = await fetch(
    "http://localhost:3000/api/admin/customer"
  );
  const responseCustomerJson = await responseCustomer.json();

  return {
    props: {
      car: responseCarJson,
      createdAllCarTypes: responseCarTypesJson,
      createdAllCustomers: responseCustomerJson,
    },
  };
}
