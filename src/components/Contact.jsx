import { useState } from "react";
import data from "../constant/data";
import Detail from "./Detail";
import { v4 } from "uuid";


function Contact() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [inputs, setInputs] = useState({
    id:"",
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
    const newContact = {...inputs,id: v4()}
    setAlert("");
    setContacts((contacts) => [...contacts, newContact]);
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

      <Detail data={contacts}/>
    </div>
  );
}

export default Contact;
