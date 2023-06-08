import { useRecoilState } from 'recoil'
import { isGruppOneState, isGruppThreeState, isGruppTwoState, isKodaState, isLoginState, isRandomState } from '../../backend/data/recoil.js'
import Message from './Message.jsx'
import { useEffect } from 'react'
import Send from './Send.jsx'

const Channel = () => {
	const [isLogin, setIsLogin] = useRecoilState(isLoginState)
	const [kodaMessages, setKodaMessages] = useRecoilState(isKodaState)
	const [randomMessages, setRandomMessages] = useRecoilState(isRandomState)
	const [gruppOneMessages, setGruppOneMessages] = useRecoilState(isGruppOneState)
	const [gruppTwoMessages, setGruppTwoMessages] = useRecoilState(isGruppTwoState)
	const [gruppThreeMessages, setGruppThreeMessages] = useRecoilState(isGruppThreeState)


	// Fetch koda
	const fetchKodaMessage = async () => {
		try {
			const response = await fetch('/api/home')
			const data = await response.json()
			const messages = data.channels.find(channel => channel.name === 'koda')
			setKodaMessages(messages)
			setRandomMessages(false)
			setGruppOneMessages(false)
			setGruppTwoMessages(false)
			setGruppThreeMessages(false)
		} catch (error) {
			console.log('Could not fetch messages' + error.message)
		}
	}
	useEffect(() => {
		fetchKodaMessage()
	}, [])

	const handleClickKoda = (event) => {
		event.preventDefault();
		fetchKodaMessage();
	  };

	// Fetch random
	const fetchRandomMessage = async () => {
		try {
			const response = await fetch('/api/home')
			const data = await response.json()
			const messages = data.channels.find(channel => channel.name === 'random')
			setRandomMessages(messages)
			setKodaMessages(false)
			setGruppOneMessages(false)
			setGruppTwoMessages(false)
			setGruppThreeMessages(false)
		} catch (error) {
			console.log('Could not fetch messages' + error.message)
		}
	}

	// Fetch grupp1
	const fetchGruppOneMessage = async () => {
		try {
			const response = await fetch('/api/home')
			const data = await response.json()
			const messages = data.channelsMembers.find(channel => channel.name === 'grupp1')
			setGruppOneMessages(messages)
			setRandomMessages(false)
			setKodaMessages(false)
			setGruppTwoMessages(false)
			setGruppThreeMessages(false)
		} catch (error) {
			console.log('Could not fetch messages' + error.message)
		}
	}

	// Fetch grupp2
	const fetchGruppTwoMessage = async () => {
		try {
			const response = await fetch('/api/home')
			const data = await response.json()
			const messages = data.channelsMembers.find(channel => channel.name === 'grupp2')
			setGruppTwoMessages(messages)
			setGruppOneMessages(false)
			setRandomMessages(false)
			setKodaMessages(false)
			setGruppThreeMessages(false)
		} catch (error) {
			console.log('Could not fetch messages' + error.message)
		}
	}

	// Fetch grupp3
	const fetchGruppThreeMessage = async () => {
		try {
			const response = await fetch('/api/home')
			const data = await response.json()
			const messages = data.channelsMembers.find(channel => channel.name === 'grupp3')
			setGruppThreeMessages(messages)
			setGruppTwoMessages(false)
			setGruppOneMessages(false)
			setRandomMessages(false)
			setKodaMessages(false)
		} catch (error) {
			console.log('Could not fetch messages' + error.message)
		}
	}


	return (
		<>
			<nav>
				<ul>
					<li> [Kanaler] </li>
					<li><a href="#" onClick={handleClickKoda}>#koda </a></li>
					<li><a href="#" onClick={fetchRandomMessage}> #random </a> </li>
					{!isLogin ? (
						<>
							<li className="locked"><a href="#"> #grupp1 🔒 </a></li>
							<li className="locked"><a href="#"> #grupp2 🔒 </a></li>
							<li className="locked"><a href="#"> #grupp3 🔒 </a></li>
						</>
					) : (
						<>
							<li className="selected"><a href="#" onClick={fetchGruppOneMessage}> #grupp1 🔑 </a></li>
							<li className="selected"><a href="#" onClick={fetchGruppTwoMessage}> #grupp2 🔑 </a></li>
							<li className="selected"><a href="#" onClick={fetchGruppThreeMessage}> #grupp3 🔑 </a></li>
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
			<Message />
			<Send fetchKodaMessage={fetchKodaMessage} />

		</>
	)
}

export default Channel