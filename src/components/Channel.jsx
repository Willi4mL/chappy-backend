import { useRecoilState } from 'recoil'
import { isGruppOneState, isGruppThreeState, isGruppTwoState, isKodaState, isLoginState, isRandomState, getUsernameState } from '../../backend/data/recoil.js'
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
	const [loggedInUser, setLoggedInUser] = useRecoilState(getUsernameState)

	const sessionStorageKey = 'chappy-jwt'

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
		event.preventDefault()
		fetchKodaMessage()
	}

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
	useEffect(() => {
		fetchRandomMessage()
	}, [])

	const handleClickRandom = (event) => {
		event.preventDefault()
		fetchRandomMessage()
	}

	// Fetch grupp1
	const fetchGruppOneMessage = async () => {
		let isJwt = sessionStorage.getItem(sessionStorageKey)

		let options = {
			headers: {}
		}

		if (isJwt) {
			console.log(options.headers.Authorization = "Bearer: " + isJwt)

			try {
				const response = await fetch('/api/home')
				const data = await response.json()
				const messages = data.channelsMembers.find(channel => channel.name === 'grupp1')
				setGruppOneMessages(messages)
				setRandomMessages(false)
				setKodaMessages(false)
				setGruppTwoMessages(false)
				setGruppThreeMessages(false)
				console.log('Authorized');
			} catch (error) {
				console.log('Could not fetch messages' + error.message)
			}
		} else {
			console.log('Unauthorized')
		}
	}
	useEffect(() => {
		fetchGruppOneMessage()
	}, [setLoggedInUser])

	const handleClickGruppOne = (event) => {
		event.preventDefault()
		fetchGruppOneMessage()
	}

	// Fetch grupp2
	const fetchGruppTwoMessage = async () => {
		let isJwt = sessionStorage.getItem(sessionStorageKey)

		let options = {
			headers: {}
		}
		if (isJwt) {
			console.log(options.headers.Authorization = "Bearer: " + isJwt)
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
		} else {
			console.log('Unauthorized')
		}
	}
	useEffect(() => {
		fetchGruppTwoMessage()
	}, [setLoggedInUser])

	const handleClickGruppTwo = (event) => {
		event.preventDefault()
		fetchGruppTwoMessage()
	}

	// Fetch grupp3
	const fetchGruppThreeMessage = async () => {
		let isJwt = sessionStorage.getItem(sessionStorageKey)

		let options = {
			headers: {}
		}

		if (isJwt) {
			console.log(options.headers.Authorization = "Bearer: " + isJwt)
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
		} else {
			console.log('Unauthorized')
		}
	}
	useEffect(() => {
		fetchGruppThreeMessage()
	}, [setLoggedInUser])

	const handleClickGruppThree = (event) => {
		event.preventDefault()
		fetchGruppThreeMessage()
	}


	return (
		<>
			<nav>
				<ul>
					<li> [Kanaler] </li>
					<li><a href="#" onClick={handleClickKoda}>#koda </a></li>
					<li><a href="#" onClick={handleClickRandom}> #random </a> </li>
					{!isLogin ? (
						<>
							<li className="locked" onClick={handleClickGruppOne}><a href="#"> #grupp1 🔒 </a></li>
							<li className="locked"><a href="#" onClick={handleClickGruppTwo}> #grupp2 🔒 </a></li>
							<li className="locked"><a href="#" onClick={handleClickGruppThree}> #grupp3 🔒 </a></li>
						</>
					) : (
						<>
							<li className="selected"><a href="#" onClick={handleClickGruppOne}> #grupp1 🔑 </a></li>
							<li className="selected"><a href="#" onClick={handleClickGruppTwo}> #grupp2 🔑 </a></li>
							<li className="selected"><a href="#" onClick={handleClickGruppThree}> #grupp3 🔑 </a></li>
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
			<Message
				fetchKodaMessage={fetchKodaMessage}
				fetchRandomMessage={fetchRandomMessage}
				fetchGruppOneMessage={fetchGruppOneMessage}
				fetchGruppTwoMessage={fetchGruppTwoMessage}
				fetchGruppThreeMessage={fetchGruppThreeMessage}
			/>

		</>
	)
}

export default Channel