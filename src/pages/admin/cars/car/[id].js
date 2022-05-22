import Head from "next/head";
import CarForm from "../../../../components/CarForm";
import { NextPageContext } from "next";

/**
 * @param {{car: import("@prisma/client").cars, createdAllCarTypes: import("@prisma/client").car_types[], createdAllCustomers: import("@prisma/client").customers[]}} props
 */

export default function Car({ car, createdAllCarTypes, createdAllCustomers }) {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Head>
        <title>Aluga Mais - Editar Carro</title>
      </Head>

      <main className="w-screen flex flex-col justify-center items-center">
        <div className="w-1/2 h-full mt-10 mb-10 flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold">Editar Carro</h1>
          <CarForm
            action={"UPDATE"}
            createdId={car.id}
            createdCarType={car.car_type_id}
            createdCustomerId={car.customer_id}
            createdManufacturer={car.manufacturer}
            createdModel={car.model}
            createdYear={car.year}
            createdPrice={car.price}
            createdDescription={car.description}
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
  const responseCar = await fetch(
    `http://localhost:3000/api/admin/car/${context.query.id}`
  );
  const responseCarJson = await responseCar.json();

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
