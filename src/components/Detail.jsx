import React from "react";
import ContactList from "./ContactList";

function Detail({ data , deleteHandler}) {
  console.log(data.id);

  return (
    <div>
      <h3>Contact List</h3>
      {data.length ? (
        <ul>
          {data.map((contact) => (
            <ContactList key={contact.id} list={contact}  deleteHandler={deleteHandler} />
          ))}
        </ul>
      ) : (
        <p>no contact yet</p>
      )}
    </div>
  );
}

export default Detail;
