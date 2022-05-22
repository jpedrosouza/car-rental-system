import Head from "next/head";
import { useState } from "react";

export default function Cars({ receivedCars }) {
  const [cars, setCars] = useState(receivedCars);

  const deleteCustomer = async (id) => {
    const response = await fetch(`/api/admin/car/${id}`, {
      method: "DELETE",
    });

    if (response.status == 200) {
      /**
       * Delete from customers array when the customer is deleted
       */

      const newCustomers = cars.filter((customer) => customer.id != id);
      setCars(newCustomers);
    }
  };

  const navigateToAddCarPage = () => {
    window.location.href = "/admin/cars/car";
  };

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Aluga Mais - Carros</title>
      </Head>

      <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="w-4/5 h-screen flex flex-col jusfity-center items-center">
          <button
            onClick={navigateToAddCarPage}
            className="mt-10 p-2 border rounded-full self-end ease-in-out duration-300 hover:shadow-xl"
          >
            Adicionar Carro
          </button>
          <div className="mt-5 flex justify-center items-center">
            <div className="-my-2 overflow-y-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-6edium text-gray-500 uppercase tracking-wider"
                        >
                          Id
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Tipo Id
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Client Id
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Fabricante
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Modelo
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Ano
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Preço
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Descrição
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cars.map((car) => (
                        <tr key={car.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {car.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {car.car_type_id}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {car.customer_id}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {car.manufacturer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {car.model}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {car.year}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {car.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {car.description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href={`/admin/cars/car/${car.id}`}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Editar
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a className="text-red-600 hover:text-indigo-900">
                              Apagar
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/admin/car");
  const cars = await response.json();

  return {
    props: {
      receivedCars: cars,
    },
  };
}
