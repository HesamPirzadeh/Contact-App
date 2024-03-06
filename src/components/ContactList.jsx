import styles from "./ContactList.module.css";

function ContactList({list : {name,lastName,email,number,id}, deleteHandler}) {
  
  return (
    <div>
        <li className={styles.item}>
              <p>
                {name} {lastName}
              </p>
              <p>
                <span>📧</span>
                {email}
              </p>
              <p>
                <span>📱</span>
                {number}
              </p>
              <button onClick={()=> deleteHandler(id)} >🗑️</button>
            </li>
    </div>
  )
}

export default ContactList