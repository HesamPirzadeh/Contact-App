import { useState } from "react";
import Info from "./Info";

const data = [
  {
    type: "text",
    placeholder: "Name",
    name: "name",
  },
  {
    type: "text",
    placeholder: "Last Name",
    name: "lastName",
  },
  {
    type: "number",
    placeholder: "Phone Number",
    name: "number",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email",
  },
];

function Contact() {
  const [alert, setAlert] = useState("");
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
    if (!inputs.name || !inputs.lastName || !inputs.email || !inputs.number) {
      setAlert("please enter valid data");
      return;
    }
    setAlert("");
    setContacts((contacts) => [...contacts, inputs]);
    setInputs({
      name: "",
      lastName: "",
      number: "",
      email: "",
    });
    console.log(contacts);
  };

  return (
    <div>
      <div>
        {data.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={inputs[input.name]}
            onChange={showHandler}
          />
        ))}
        <button onClick={addHandler}>Add</button>
      </div>
      <div>{<p>{alert}</p>}</div>

      <Info data={contacts} />
    </div>
  );
}

export default Contact;
