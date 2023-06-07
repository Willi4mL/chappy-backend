import { useRecoilState } from 'recoil'
import { isLoginState } from '../../backend/data/recoil.js'

const Channel = () => {
	const [isLogin, setIsLogin] = useRecoilState(isLoginState)

	return (
		<>
			<nav>
				<ul>
					<li> [Kanaler] </li>
					<li><a href="#"> #koda </a></li>
					<li><a href="#"> #random </a> </li>
					{!isLogin ? (
						<>
							<li className="locked"><a href="#"> #grupp1 🔒 </a></li>
							<li className="locked"><a href="#"> #grupp2 🔒 </a></li>
							<li className="locked"><a href="#"> #grupp3 🔒 </a></li>
						</>
					) : (
						<>
							<li className="selected"><a href="#"> #grupp1 🔑 </a></li>
							<li className="selected"><a href="#"> #grupp2 🔑 </a></li>
							<li className="selected"><a href="#"> #grupp3 🔑 </a></li>
							<li> <hr /> </li>
							<li title="Direktmeddelanden"> [DM] </li>
							<li><a href="#">PratgladPelle</a></li>
							<li><a href="#">SocialaSara</a></li>
							<li><a href="#">TrevligaTommy</a></li>
							<li><a href="#">VänligaVera</a></li>
							<li><a href="#">GladaGustav</a></li>
						</>
					)}
				</ul>
			</nav>
		</>
	)
}

export default Channel