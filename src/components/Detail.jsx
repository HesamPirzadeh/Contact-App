import React from 'react'

function Detail({data}) {
  console.log(data.id)
  return (
    <div>
      <ul>
        {data.map(contact => (<li key={contact.id}>{contact.name}</li>))}
      </ul>
    </div>
  )
}

export default Detail