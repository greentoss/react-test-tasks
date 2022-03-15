import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

//display users on page
//make search piece of word, and press search and display name that included

const users = [
  {id: '1', name: "Alexander"},
  {id: '2', name: "Ivan"},
  {id: '3', name: "Mihael"},
]

function App() {
  const [foundUsers, setFoundUsers] = useState(users)
  const searchRefValue = useRef(null)

  const handleSearchNames = () => {
      const filteredUsers = users.filter((user) => {
          return user.name.toLowerCase().includes(searchRefValue.current.value.toLowerCase())
      })
      setFoundUsers(filteredUsers);
  }

  return (
    <div className="App">
      <input ref={searchRefValue} type={'text'} />
      <button type={'button'} onClick={handleSearchNames}>Search</button>
        {foundUsers.map(user => {
            return <li key={user.id}>{user.name}</li>
        })}
    </div>
  );
}

export default App;
