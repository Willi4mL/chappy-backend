import { useRecoilState } from 'recoil'
import { isLoginState } from '../../backend/data/recoil.js'

const Login = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const handleLogin = () => {
    setIsLogin(true);
  }

  return (
    <>
      {isLogin ? (
        <div className="user-status">
          <span>Inloggad som VänligaVera</span>
          <button>Logga ut</button>
        </div>
      ) : (
        <div className="user-status">
          <div>
            <input type="text" id="username" />
            <input type="password" id="password" />
            <button onClick={handleLogin}>Logga in</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;


