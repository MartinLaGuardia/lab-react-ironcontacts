import contactsFromJson from "./contacts.json";
import './App.css';
import { useState } from 'react'

function App() {

  const [contacts, setContactsList] = useState(contactsFromJson)

  let firstFive = contacts.slice(10, 15)

  let removeContact = contactID => {
    const newContacts = contacts.filter(elm => elm.id != contactID)              // retorna nuevo array
    setContactsList(newContacts)
  }

  return (

    <div className="App">
      <table>
        <tr>
          <th>Picture:</th>
          <th>Name:</th>
          <th>Popularity:</th>
          <th>Won an Oscar:</th>
          <th>Won an Emmy:</th>
        </tr>

        {
          firstFive.map(contact => {
            return (
              <tr>

                <td>{contact.name}</td>
                <td><img src={contact.pictureUrl}></img></td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <p> 🏆  </p> : <p>No tuvo Oscar</p>}</td>
                <td>{contact.wonEmmy ? <p> 🏆  </p> : <p>No tuvo Emmy</p>}</td>
                <td><button className="btn-delete" onClick={() => removeContact(contact.id)
                }>Delete</button></td>

              </tr>
            )
          })
        }
      </table>



    </div>
  )
}

export default App;
