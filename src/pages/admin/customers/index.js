import Head from "next/head";
import { useState } from "react";

export default function Customers({ receivedCustomers }) {
  const [customers, setCustomers] = useState(receivedCustomers);

  const deleteCustomer = async (id) => {
    const response = await fetch(`/api/admin/customer/${id}`, {
      method: "DELETE",
    });

    if (response.status == 200) {
      /**
       * Delete from customers array when the customer is deleted
       */

      const newCustomers = customers.filter((customer) => customer.id != id);
      setCustomers(newCustomers);
    }
  };

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Aluga Mais - Clientes</title>
      </Head>

      <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="w-4/5 h-full flex flex-row jusfity-center items-center">
          <div className="mt-10 h-3/5 flex justify-center items-center">
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
                          Nome
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Telefone
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Endereço
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          CPF
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {customers.map((customer) => (
                        <tr key={customer.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {customer.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {customer.name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {customer.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {customer.phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {customer.address}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {customer.cpf}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href={`/admin/customers/customer/${customer.id}`}
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
  const response = await fetch("http://localhost:3000/api/admin/customer");
  const customers = await response.json();

  return {
    props: {
      receivedCustomers: customers,
    },
  };
}
