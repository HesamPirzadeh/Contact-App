import { useState } from "react";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    lastName: "",
    number: "",
    email: "",
  });

  const showHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const addHandler = () => {
    setContacts((contacts) => [...contacts, inputs]);
    setInputs({
      name: "",
      lastName: "",
      number: "",
      email: "",
    })
    con
  };

  return (
    <div>
      <input
        type="text"
        placeholder=""
        name="name"
        value={inputs.name}
        onChange={showHandler}
      />
      <input
        type="text"
        placeholder=""
        name="lastName"
        value={inputs.lastName}
        onChange={showHandler}
      />
      <input
        type="number"
        placeholder=""
        name="number"
        value={inputs.number}
        onChange={showHandler}
      />
      <input
        type="email"
        placeholder=""
        name="email"
        value={inputs.email}
        onChange={showHandler}
      />
      <button onClick={addHandler}>Add</button>
    </div>
  );
}

export default Contact;