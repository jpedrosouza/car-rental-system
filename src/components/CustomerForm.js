import { useState } from "react";

export default function CustomerForm({ action, createdId, createdName, createdEmail, createdPhone, createdAddress, createdCpf }) {
  const [name, setName] = useState(createdName);
  const [email, setEmail] = useState(createdEmail);
  const [phone, setPhone] = useState(createdPhone);
  const [address, setAddress] = useState(createdAddress);
  const [cpf, setCpf] = useState(createdCpf);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const url = action == 'STORE' ? '/api/admin/customer' : `/api/admin/customer/${createdId}`;
    const method = action == "STORE" ? "POST" : "PUT";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        cpf,
      }),
    });

    if (response.status == 200) {
      window.location.href = "/admin/customers";
    } else {
      alert("Ocorreu um erro ao cadastrar o cliente");
    }
  };

  return (
    <form className="w-1/2 mt-10 flex-flex-col" onSubmit={submitFormHandler}>
      <input
        className="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="name"
        type="text"
        id="name"
        value={name}
        placeholder="Nome"
        onChange={({ target }) => setName(target.value)}
      ></input>
      <input
        className="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="email"
        type="email"
        id="email"
        value={email}
        placeholder="Email"
        onChange={({ target }) => setEmail(target.value)}
      ></input>
      <input
        className="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="phone"
        type="tel"
        id="phone"
        value={phone}
        placeholder="Telefone"
        onChange={({ target }) => setPhone(target.value)}
      ></input>
      <input
        className="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="address"
        type="text"
        id="address"
        value={address}
        placeholder="Endereço"
        onChange={({ target }) => setAddress(target.value)}
      ></input>
      <input
        className="w-full h-12 p-2 mt-5 mb-5 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="cpf"
        type="number"
        id="cpf"
        value={cpf}
        placeholder="CPF"
        onChange={({ target }) => setCpf(target.value)}
      ></input>
      <input
        type="submit"
        value={action == 'STORE' ? "Cadastrar" : "Atualizar"}
        className="w-full h-12 mt-5 rounded-lg bg-blue-500 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white cursor-pointer"
      />
    </form>
  );
}
