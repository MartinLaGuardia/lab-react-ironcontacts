import contactsFromApi from "./contacts.json";
import { useState } from 'react'
import './App.css';


function App() {

  const contactCopy = [...contactsFromApi]
  const firstFive = contactCopy.slice(0, 5)
  const [contacts, setContactsList] = useState(firstFive)

  const oneRandomContact = () => {
    let result = contactsFromApi[Math.floor(Math.random() * 52)];

    let contactsCopy2

    if (firstFive.indexOf(contactsFromApi) === -1) {
      contactsCopy2 = [...contacts]
      contactsCopy2.push(result)
      firstFive.push(result)
    }
    setContactsList(contactsCopy2)

    return firstFive

  }

  const sortPopularity = () => {
    let popularity = [...contacts].sort((firstCelebrity, secondCelebrity) => secondCelebrity.popularity - firstCelebrity.popularity)

    setContactsList(popularity)
  }

  const sortName = () => {
    let name = [...contactsFromApi].sort((firstCelebrity, secondCelebrity) => secondCelebrity.name > firstCelebrity.name ? 1 : -1)

    setContactsList(name)
  }

  const deleteCelebrity = celebrityID => {
    let newCelebrities = contacts.filter(elm => elm.id !== celebrityID)

    setContactsList(newCelebrities)
  }


  return (

    <div classname="app">
      <h1>IronContacts</h1>

      <div className="but">

        <div>
          <button onClick={oneRandomContact}>ADD RANDOM CONTACT</button>
        </div>

        <div>
          <button onClick={sortPopularity}>SORT BY POPULARITY</button>
        </div>

        <div>
          <button onClick={sortName}>SORT BY NAME</button>
        </div>
      </div>

      <br></br>


      <table className="table">
        <tr>
          <th>Picture:</th>
          <th>Name:</th>
          <th>Popularity:</th>
          <th>Won an Oscar:</th>
          <th>Won an Emmy:</th>
        </tr>

        {
          contacts?.map((contact, index) => {
            return (

              <tr key={index}>
                <td><img src={contact.pictureUrl}></img></td>
                <td>{contact.name}:</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <p> 🏆 </p> : <p> 🧌 </p>}</td>
                <td>{contact.wonEmmy ? <p> 🏆 </p> : <p> 🥭 </p>}</td>
                <td><button onClick={() => deleteCelebrity(contact.id)}>DELETE CELEBRITY</button></td>

              </tr>

            )
          })
        }
      </table>

    </div>


  )
}

export default App;
