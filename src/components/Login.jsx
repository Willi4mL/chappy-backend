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

  const sessionStorageKey = 'jwt'

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        const user = data.users
        console.log(user)
      } catch (error) {
        console.log('Could not fetch users' + error.message)
      }
    }
    fetchUserData()
  }, [])

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (response.ok) {
        const data = await response.json()
        const jwt = data.token

        sessionStorage.setItem(sessionStorageKey, jwt)
        setIsLogin(true);
      } else {
        console.log('Login failed')
      }
    } catch (error) {
      console.log('Error during login:', error)
    }
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
    </>
  );
};

export default Login;


