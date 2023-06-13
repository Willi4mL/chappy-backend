import { isKodaState, isRandomState, isGruppOneState, isGruppTwoState, isGruppThreeState, getUsernameState } from "../../backend/data/recoil"
import { useRecoilState } from "recoil"
import Send from "./Send"

import { useState } from "react"

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
	const [newMessage, setNewMessage] = useState('')
	const [visibleMessageId, setVisibleMessageId] = useState(null)
	const [loggedInUser, setLoggedInUser] = useRecoilState(getUsernameState)

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



	let author = loggedInUser || 'Anonym'

	// Change Koda
	const changeKodaMessage = async (id, sending) => {
		try {
			const response = await fetch(`/api/messages/${id}`, {
				method: 'PUT',
				body: JSON.stringify({
					author: author,
					message: sending
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			fetchKodaMessage()
		} catch (error) {
			console.log('Could not post message: ' + error.message)
		}

	}

	const displayChangeInput = (messageId) => {
		setVisibleMessageId(messageId)
	}

	const saveChangedMessage = (id) => {
		setVisibleMessageId(null)
		setNewMessage('')
		changeKodaMessage(id, newMessage)
	}

	const handleChange = (event) => {
		setNewMessage(event.target.value)
	}

	// Change Random
	const changeRandomMessage = async (id, sending) => {
		try {
			const response = await fetch(`/api/messagesrandom/${id}`, {
				method: 'PUT',
				body: JSON.stringify({
					author: author,
					message: sending
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			fetchRandomMessage()
		} catch (error) {
			console.log('Could not post message: ' + error.message)
		}

	}

	const displayChangeInputRandom = (messageId) => {
		setVisibleMessageId(messageId)
	}

	const saveChangedMessageRandom = (id) => {
		setVisibleMessageId(null)
		setNewMessage('')
		changeRandomMessage(id, newMessage)
	}

	const handleChangeRandom = (event) => {
		setNewMessage(event.target.value)
	}


	// Change Group one
	const changeGroupOneMessage = async (id, sending) => {
		try {
			const response = await fetch(`/api/messagesmemberone/${id}`, {
				method: 'PUT',
				body: JSON.stringify({
					author: author,
					message: sending
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			fetchGruppOneMessage()
		} catch (error) {
			console.log('Could not post message: ' + error.message)
		}

	}

	const displayChangeInputGroupOne = (messageId) => {
		setVisibleMessageId(messageId)
	}

	const saveChangedMessageGroupOne = (id) => {
		setVisibleMessageId(null)
		setNewMessage('')
		changeGroupOneMessage(id, newMessage)
	}

	const handleChangeGroupOne = (event) => {
		setNewMessage(event.target.value)
	}


	// Change Group two
	const changeGroupTwoMessage = async (id, sending) => {
		try {
			const response = await fetch(`/api/messagesmembertwo/${id}`, {
				method: 'PUT',
				body: JSON.stringify({
					author: author,
					message: sending
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			fetchGruppTwoMessage()
		} catch (error) {
			console.log('Could not post message: ' + error.message)
		}

	}

	const displayChangeInputGroupTwo = (messageId) => {
		setVisibleMessageId(messageId)
	}

	const saveChangedMessageGroupTwo = (id) => {
		setVisibleMessageId(null)
		setNewMessage('')
		changeGroupTwoMessage(id, newMessage)
	}

	const handleChangeGroupTwo = (event) => {
		setNewMessage(event.target.value)
	}


	// Change Group three
	const changeGroupThreeMessage = async (id, sending) => {
		try {
			const response = await fetch(`/api/messagesmemberthree/${id}`, {
				method: 'PUT',
				body: JSON.stringify({
					author: author,
					message: sending
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			fetchGruppThreeMessage()
		} catch (error) {
			console.log('Could not post message: ' + error.message)
		}

	}

	const displayChangeInputGroupThree = (messageId) => {
		setVisibleMessageId(messageId)
	}

	const saveChangedMessageGroupThree = (id) => {
		setVisibleMessageId(null)
		setNewMessage('')
		changeGroupThreeMessage(id, newMessage)
	}

	const handleChangeGroupThree = (event) => {
		setNewMessage(event.target.value)
	}


	return (
		<>
			{/* Koda message */}
			{kodaMessages && !randomMessages && (
				<div className="chat-area">
					<section className="heading">
						Chattar i <span className="chat-name">#koda</span>
					</section>
					{kodaMessages.messages.map((message) => (
						<section className="history" key={message.id}>
							<section className="align-right">
								<p>
									{message.author}: {message.message}
								</p>
								<p>17:46</p>
							</section>
							<button className="remove-btn" onClick={() => removeMessage(message.id)}>
								Ta bort
							</button>

							{/* Change Koda */}
							{visibleMessageId === message.id ? (
								<>
									<input className="change-message-input" value={newMessage} onChange={handleChange} />
									<button onClick={() => saveChangedMessage(message.id)}>Spara</button>
								</>
							) : (
								<button onClick={() => displayChangeInput(message.id)}>Ändra</button>
							)}
						</section>
					))}
					<Send fetchMessage={fetchKodaMessage} />
				</div>
			)}



			{/* Random message */}
			{randomMessages && !kodaMessages && <>
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

							{/* Change Random */}
							{visibleMessageId === message.id ? (
								<>
									<input className="change-message-input" value={newMessage} onChange={handleChangeRandom} />
									<button onClick={() => saveChangedMessageRandom(message.id)}>Spara</button>
								</>
							) : (
								<button onClick={() => displayChangeInputRandom(message.id)}>Ändra</button>
							)}
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

							{/* Change GroupOne */}
							{visibleMessageId === message.id ? (
								<>
									<input className="change-message-input" value={newMessage} onChange={handleChangeGroupOne} />
									<button onClick={() => saveChangedMessageGroupOne(message.id)}>Spara</button>
								</>
							) : (
								<button onClick={() => displayChangeInputGroupOne(message.id)}>Ändra</button>
							)}
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

							{/* Change GroupTwo */}
							{visibleMessageId === message.id ? (
								<>
									<input className="change-message-input" value={newMessage} onChange={handleChangeGroupTwo} />
									<button onClick={() => saveChangedMessageGroupTwo(message.id)}>Spara</button>
								</>
							) : (
								<button onClick={() => displayChangeInputGroupTwo(message.id)}>Ändra</button>
							)}
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

							{/* Change GroupThree */}
							{visibleMessageId === message.id ? (
								<>
									<input className="change-message-input" value={newMessage} onChange={handleChangeGroupThree} />
									<button onClick={() => saveChangedMessageGroupThree(message.id)}>Spara</button>
								</>
							) : (
								<button onClick={() => displayChangeInputGroupThree(message.id)}>Ändra</button>
							)}
						</section>
					))}
					<Send fetchMessage={fetchGruppThreeMessage} />
				</div>
			</>}
		</>
	)
}

export default Message