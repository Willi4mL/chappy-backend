import { isKodaState, isRandomState, isGruppOneState, isGruppTwoState, isGruppThreeState } from "../../backend/data/recoil"
import { useRecoilState } from "recoil"
import Send from "./Send"

const Message = ({ fetchKodaMessage,
	fetchRandomMessage,
	fetchGruppOneMessage,
	fetchGruppTwoMessage,
	fetchGruppThreeMessage }) => {
	const [kodaMessages, setKodaMessages] = useRecoilState(isKodaState)
	const [randomMessages, setRandomMessages] = useRecoilState(isRandomState)
	const [gruppOneMessages, setGruppOneMessages] = useRecoilState(isGruppOneState)
	const [gruppTwoMessages, setGruppTwoMessages] = useRecoilState(isGruppTwoState)
	const [gruppThreeMessages, setGruppThreeMessages] = useRecoilState(isGruppThreeState)

	// Delete Koda
	const removeMessage = async (messageId) => {
		try {
			const response = await fetch(`/api/messages/${messageId}`, { method: 'DELETE' })
			if (response.status === 200) {

				fetchKodaMessage()
			} else {
				// Other error occurred
				throw new Error('An error occurred while deleting the message')
			}
		} catch (error) {
			console.error('An error occurred while deleting the message:', error)
		}
	}


	// Delete Random
	const removeRandom = async (messageId) => {
		try {
			const response = await fetch(`/api/messagesrandom/${messageId}`, { method: 'DELETE' })
			if (response.status === 200) {

				fetchRandomMessage()
			} else {
				// Other error occurred
				throw new Error('An error occurred while deleting the message')
			}
		} catch (error) {
			console.error('An error occurred while deleting the message:', error)
		}
	}


	// Delete Grupp1
	const removeGruppOne = async (messageId) => {
		try {
			const response = await fetch(`/api/messagesmemberone/${messageId}`, { method: 'DELETE' })
			if (response.status === 200) {

				fetchGruppOneMessage()
			} else {
				// Other error occurred
				throw new Error('An error occurred while deleting the message')
			}
		} catch (error) {
			console.error('An error occurred while deleting the message:', error)
		}
	}


	// Delete Grupp2
	const removeGruppTwo = async (messageId) => {
		try {
			const response = await fetch(`/api/messagesmembertwo/${messageId}`, { method: 'DELETE' })
			if (response.status === 200) {

				fetchGruppTwoMessage()
			} else {
				// Other error occurred
				throw new Error('An error occurred while deleting the message')
			}
		} catch (error) {
			console.error('An error occurred while deleting the message:', error)
		}
	}


	// Delete Grupp3
	const removeGruppThree = async (messageId) => {
		try {
			const response = await fetch(`/api/messagesmemberthree/${messageId}`, { method: 'DELETE' })
			if (response.status === 200) {

				fetchGruppThreeMessage()
			} else {
				// Other error occurred
				throw new Error('An error occurred while deleting the message')
			}
		} catch (error) {
			console.error('An error occurred while deleting the message:', error)
		}
	}



	return (
		<>
			{/* Koda message */}
			{kodaMessages && <>
				<div className="chat-area">
					<section className="heading">
						Chattar i <span className="chat-name"> #koda </span>
					</section>
					{kodaMessages.messages.map(message => (
						<section className="history" key={message.id}>
							<section className="align-right">
								<p> {message.author}: {message.message} </p>
								<p> 17:46 </p>
							</section>
							<button className='remove-btn' onClick={() => removeMessage(message.id)}>Ta bort</button>
						</section>
					))}
					<Send fetchMessage={fetchKodaMessage} />
				</div>
			</>}

			{/* Random message */}
			{randomMessages && <>
				<div className="chat-area">
					<section className="heading">
						Chattar i <span className="chat-name"> #random </span>
					</section>
					{randomMessages.messagesRandom.map(message => (
						<section className="history" key={message.id}>
							<section className="align-right">
								<p> {message.author}: {message.message} </p>
								<p> 17:46 </p>
							</section>
							<button className='remove-btn' onClick={() => removeRandom(message.id)}>Ta bort</button>
						</section>
					))}
					<Send fetchMessage={fetchRandomMessage} />
				</div>
			</>}

			{/* Grupp 1 message */}
			{gruppOneMessages && <>
				<div className="chat-area">
					<section className="heading">
						Chattar i <span className="chat-name"> #grupp1 </span>
					</section>
					{gruppOneMessages.messagesOne.map(message => (
						<section className="history" key={message.id}>
							<section className="align-right">
								<p> {message.author}: {message.message} </p>
								<p> 17:46 </p>
							</section>
							<button className='remove-btn' onClick={() => removeGruppOne(message.id)}>Ta bort</button>
						</section>
					))}
					<Send fetchMessage={fetchGruppOneMessage} />
				</div>
			</>}

			{/* Grupp 2 message */}
			{gruppTwoMessages && <>
				<div className="chat-area">
					<section className="heading">
						Chattar i <span className="chat-name"> #grupp2 </span>
					</section>
					{gruppTwoMessages.messagesTwo.map(message => (
						<section className="history" key={message.id}>
							<section className="align-right">
								<p> {message.author}: {message.message} </p>
								<p> 17:46 </p>
							</section>
							<button className='remove-btn' onClick={() => removeGruppTwo(message.id)}>Ta bort</button>
						</section>
					))}
					<Send fetchMessage={fetchGruppTwoMessage} />
				</div>
			</>}

			{/* Grupp 3 message */}
			{gruppThreeMessages && <>
				<div className="chat-area">
					<section className="heading">
						Chattar i <span className="chat-name"> #grupp3 </span>
					</section>
					{gruppThreeMessages.messagesThree.map(message => (
						<section className="history" key={message.id}>
							<section className="align-right">
								<p> {message.author}: {message.message} </p>
								<p> 17:46 </p>
							</section>
							<button className='remove-btn' onClick={() => removeGruppThree(message.id)}>Ta bort</button>
						</section>
					))}
					<Send fetchMessage={fetchGruppThreeMessage} />
				</div>
			</>}
		</>
	)
}

export default Message