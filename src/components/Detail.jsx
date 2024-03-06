import React from "react";
import ContactList from "./ContactList";
import styles from "./Detail.module.css";

function Detail({ data , deleteHandler}) {
  console.log(data.id)

  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      {data.length ? (
        <ul className={styles.contacts}>
          {data.map((contact) => (
            <ContactList key={contact.id} list={contact}  deleteHandler={deleteHandler} />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>no contact yet</p>
      )}
    </div>
  );
}

export default Detail;
