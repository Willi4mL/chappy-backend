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
        <div className="chat-area">
          <Message />
          <section>
            <input type="text" placeholder="Ditt meddelande..." />
            <button> Skicka </button>
          </section>
        </div>
      </main>

    </>
  )
}

export default App
