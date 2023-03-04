import './App.css';
import axios from 'axios'
import react from 'react'

function App() {
  const [user, setUser] = react.useState('')

  react.useEffect(() => {
    getUser()
  },[])

  async function getUser() {
    try {
      const response = await axios('http://localhost:3000/api/users/email@email.com', {
        method: 'GET',
        headers: {
          "Content-Type":"application/json"
        }
      })
      if (response.status === 200) {
        setUser(response.data.user)
        
      }
    } catch (error) {
      throw new Error(error.message)
    }  
  }


  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>Id: {user.id}</li>
          <li>Nombre: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
