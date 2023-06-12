import AddUser from "./components/AddUser"
import Channel from "./components/Channel"
import Login from "./components/Login"


function App() {

  return (
    <>
      <header>
        <h1> Chappy </h1>
        <Login />
      </header>
      <main>
        <Channel />
        <AddUser />
      </main> 
    </>
  )
}

export default App
