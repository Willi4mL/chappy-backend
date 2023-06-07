import Channel from "./components/Channel"
import Message from "./components/Message"
import Login from "./components/login"


function App() {

  return (
    <>
      <header>
        <h1> Chappy </h1>
        <Login />
      </header>
      <main>
        <Channel />
        
          {/* <Message /> */}
          
      
      </main>

    </>
  )
}

export default App
