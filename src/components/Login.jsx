import { useRecoilState } from 'recoil'
import { isLoginState } from '../../backend/data/recoil.js'
import { useEffect } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        const user = data.users
        console.log(user)
      } catch (error) {
        console.log('Could not fetch users' + error.message);
      }
    }
    fetchUserData()
  }, [])

  const handleLogin = () => {
    setIsLogin(true);
  }

  const handleLogOut = () => {
    setIsLogin(false);
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
          <input type="text" id="username" />
          <input type="password" id="password" />
          <button onClick={handleLogin}>Logga in</button>
        </div>
      )}
    </>
  );
};

export default Login;


