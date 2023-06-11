import { useRecoilState } from 'recoil'
import { isGruppOneState, isGruppThreeState, isGruppTwoState, isKodaState, isLoginState, isRandomState } from '../../backend/data/recoil.js'
import { useEffect, useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const [kodaMessages, setKodaMessages] = useRecoilState(isKodaState)
  const [randomMessages, setRandomMessages] = useRecoilState(isRandomState)
  const [gruppOneMessages, setGruppOneMessages] = useRecoilState(isGruppOneState)
  const [gruppTwoMessages, setGruppTwoMessages] = useRecoilState(isGruppTwoState)
  const [gruppThreeMessages, setGruppThreeMessages] = useRecoilState(isGruppThreeState)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const sessionStorageKey = 'chappy-jwt'

  useEffect(() => {
    if (sessionStorage.getItem(sessionStorageKey)) {
      setIsLogin(true)
    }
  }, [])

  const handleLogin = async () => {
    let options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    }

    const response = await fetch('/api/login', options)
    if (response.status !== 200) {
      setMessage('Failed to login!')
      console.log('Login failed with status: ', response.status)
      return
    }

    const data = await response.json()
    let jwt = data.token
    sessionStorage.setItem(sessionStorageKey, jwt)

    setIsLogin(true)
  }

  const handleLogOut = () => {
    setIsLogin(false)
    setKodaMessages(false)
    setRandomMessages(false)
    setGruppOneMessages(false)
    setGruppTwoMessages(false)
    setGruppThreeMessages(false)
    sessionStorage.removeItem(sessionStorageKey)
  }

  const handleGetData = async () => {
    const sessionStorageKey = 'chappy-jwt'

    let isJwt = sessionStorage.getItem(sessionStorageKey)

    let options = {
      headers: {}
    }
    if (isJwt) {
      options.headers.Authorization = "Bearer: " + isJwt
    }

    let response = await fetch('/api/login', options)
    let data = await response.json()
    setMessage(data.message)
    console.log(message)
  }

  return (
    <>
      {isLogin ? (
        <div className="user-status">
          <span>Inloggad som VänligaVera</span>
          <button onClick={handleLogOut}>Logga ut</button>
        </div>
      ) : (
        <div className="user-status">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Logga in</button>
        </div>
      )}
      <button onClick={handleGetData}>Hämta</button>
    </>
  )
}

export default Login;


