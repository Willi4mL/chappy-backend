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
      </main> 
    </>
  )
}

export default App
