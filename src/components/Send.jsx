import { useState } from "react"
import { isKodaState, isRandomState, isGruppOneState, isGruppTwoState, isGruppThreeState } from "../../backend/data/recoil"
import { useRecoilState } from "recoil"
import Message from "./Message"


const Send = ({ fetchMessage }) => {
	const [kodaMessages, setKodaMessages] = useRecoilState(isKodaState)
	const [randomMessages, setRandomMessages] = useRecoilState(isRandomState)
	const [gruppOneMessages, setGruppOneMessages] = useRecoilState(isGruppOneState)
	const [gruppTwoMessages, setGruppTwoMessages] = useRecoilState(isGruppTwoState)
	const [gruppThreeMessages, setGruppThreeMessages] = useRecoilState(isGruppThreeState)
	const [inputValue, setInputValue] = useState('')

	const { fetchKodaMessage, fetchRandomMessage, fetchGruppOneMessage, fetchGruppTwoMessage, fetchGruppThreeMessage } = fetchMessage

	// POST koda
	const postKoda = async (sending) => {
		try {
			const response = await fetch(`/api/messages`, {
				method: 'POST',
				body: JSON.stringify({
					author: 'Anonym',
					message: sending
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			fetchMessage()
		} catch (error) {
			console.log('Could not post message: ' + error.message)
		}
	}


	// POST Random
	const postRandom = async (sending) => {
		try {
			const response = await fetch(`/api/messagesrandom`, {
				method: 'POST',
				body: JSON.stringify({
					author: 'Anonym',
					message: sending
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			fetchMessage()
		} catch (error) {
			console.log('Could not post message: ' + error.message)
		}
	}



	// POST Grupp 1
	const postGruppOne = async (sending) => {
		try {
			const response = await fetch(`/api/messagesmemberone`, {
				method: 'POST',
				body: JSON.stringify({
					author: 'Anonym',
					message: sending
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			fetchMessage()
		} catch (error) {
			console.log('Could not post message: ' + error.message)
		}
	}

	// POST Grupp 2
	const postGruppTwo = async (sending) => {
		try {
			const response = await fetch(`/api/messagesmembertwo`, {
				method: 'POST',
				body: JSON.stringify({
					author: 'Anonym',
					message: sending
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			fetchMessage()
		} catch (error) {
			console.log('Could not post message: ' + error.message)
		}
	}


	// POST Grupp 3
	const postGruppThree = async (sending) => {
		try {
			const response = await fetch(`/api/messagesmemberthree`, {
				method: 'POST',
				body: JSON.stringify({
					author: 'Anonym',
					message: sending
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			fetchMessage()
		} catch (error) {
			console.log('Could not post message: ' + error.message)
		}
	}

	return (
		<>
			{kodaMessages && <section>
				<input type="text" placeholder="Ditt meddelande..." value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
				<button onClick={() => { postKoda(inputValue); setInputValue('') }}> Skicka </button>
			</section>}

			{randomMessages && <section>
				<input type="text" placeholder="Ditt meddelande..." value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
				<button onClick={() => { postRandom(inputValue); setInputValue('') }}> Skicka </button>
			</section>}

			{gruppOneMessages && <section>
				<input type="text" placeholder="Ditt meddelande..." value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
				<button onClick={() => { postGruppOne(inputValue); setInputValue('') }}> Skicka </button>
			</section>}

			{gruppTwoMessages && <section>
				<input type="text" placeholder="Ditt meddelande..." value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
				<button onClick={() => { postGruppTwo(inputValue); setInputValue('') }}> Skicka </button>
			</section>}

			{gruppThreeMessages && <section>
				<input type="text" placeholder="Ditt meddelande..." value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
				<button onClick={() => { postGruppThree(inputValue); setInputValue('') }}> Skicka </button>
			</section>}
		</>
	)
}

export default Send