import { useState } from "react";

/**
 *
 * @param {{action: string, createdId: number, createdCarType: number, createdCustomerId: number, createdManufacturer: string: , createdModel: string, createdYear: number, createdPrice: number, createdDescription: string, createdAllCarTypes: import("@prisma/client").car_types[], createdAllCustomers: import("@prisma/client").customers[]}} props
 * @returns
 */

export default function CarForm({
  action,
  createdId,
  createdCarType,
  createdCustomerId,
  createdManufacturer,
  createdModel,
  createdYear,
  createdPrice,
  createdDescription,
  createdAllCarTypes,
  createdAllCustomers,
}) {
  const [carTypeId, setCarTypeId] = useState(createdCarType);
  const [customerId, setCustomerId] = useState(createdCustomerId);
  const [manufacturer, setManufactures] = useState(createdManufacturer);
  const [model, setModel] = useState(createdModel);
  const [year, setYear] = useState(createdYear);
  const [price, setPrice] = useState(createdPrice);
  const [description, setDescription] = useState(createdDescription);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const url = action == "STORE" ? "/api/admin/car" : `/api/admin/car/${createdId}`;
    const method = action == "STORE" ? "POST" : "PUT";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        car_type_id: Number(carTypeId),
        customer_id: Number(customerId),
        manufacturer: manufacturer,
        model: model,
        year: Number(year),
        price: Number(price),
        description: description,
      }),
    });

    if (response.status == 200) {
      window.location.href = "/admin/cars";
    } else {
      alert("Ocorreu um erro ao cadastrar o cliente");
    }
  };

  return (
    <form
      className="w-1/2 h-full mt-10 flex-flex-col"
      onSubmit={submitFormHandler}
    >
      <select
        class="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        aria-label="Default select example"
        onChange={({ target }) => setCarTypeId(Number(target.value))}
      >
        <option selected>Tipo do carro</option>

        {createdAllCarTypes.map((carType) => (
          <option key={carType.id} value={carType.id}>
            {carType.name}
          </option>
        ))}
      </select>
      <select
        class="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        aria-label="Default select example"
        onChange={({ target }) => setCustomerId(Number(target.value))}
      >
        <option selected>Cliente</option>

        {createdAllCustomers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
      </select>
      <input
        className="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="manufacturer"
        type="tel"
        id="manufacturer"
        value={manufacturer}
        placeholder="Fabricante"
        onChange={({ target }) => setManufactures(target.value)}
      ></input>
      <input
        className="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="model"
        type="text"
        id="model"
        value={model}
        placeholder="Modelo"
        onChange={({ target }) => setModel(target.value)}
      ></input>
      <input
        className="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="year"
        type="number"
        id="year"
        value={year}
        placeholder="Ano"
        onChange={({ target }) => setYear(target.value)}
      ></input>
      <input
        className="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="price"
        type="number"
        id="price"
        value={price}
        placeholder="Preço"
        onChange={({ target }) => setPrice(target.value)}
      ></input>
      <input
        className="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="description"
        type="text"
        id="description"
        value={description}
        placeholder="Descrição"
        onChange={({ target }) => setDescription(target.value)}
      ></input>
      <input
        type="submit"
        value={action == "STORE" ? "Cadastrar" : "Atualizar"}
        className="w-full h-12 mt-5 rounded-lg bg-blue-500 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white cursor-pointer"
      />
    </form>
  );
}
