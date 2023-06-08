import { useEffect, useState } from "react"
import { isKodaState, isRandomState, isGruppOneState, isGruppTwoState, isGruppThreeState } from "../../backend/data/recoil"
import { useRecoilState } from "recoil"
import { generateId } from "../../backend/data/validation"


const Send = ({ fetchKodaMessage }) => {
	const [kodaMessages, setKodaMessages] = useRecoilState(isKodaState)
	const [randomMessages, setRandomMessages] = useRecoilState(isRandomState)
	const [gruppOneMessages, setGruppOneMessages] = useRecoilState(isGruppOneState)
	const [gruppTwoMessages, setGruppTwoMessages] = useRecoilState(isGruppTwoState)
	const [gruppThreeMessages, setGruppThreeMessages] = useRecoilState(isGruppThreeState)
	const [inputValue, setInputValue] = useState('')

	// POST koda
	const post = async (sending) => {
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

			fetchKodaMessage()
		} catch (error) {
			console.log('Could not post message: ' + error.message)
		}
	}

	return (
		<>
			{kodaMessages && <section>
				<input type="text" placeholder="Ditt meddelande..." value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
				<button onClick={() => { post(inputValue); setInputValue('') }}> Skicka </button>
			</section>}

			{randomMessages && <section>
				<input type="text" placeholder="Ditt meddelande..." />
				<button> Skicka </button>
			</section>}

			{gruppOneMessages && <section>
				<input type="text" placeholder="Ditt meddelande..." />
				<button> Skicka </button>
			</section>}

			{gruppTwoMessages && <section>
				<input type="text" placeholder="Ditt meddelande..." />
				<button> Skicka </button>
			</section>}

			{gruppThreeMessages && <section>
				<input type="text" placeholder="Ditt meddelande..." />
				<button> Skicka </button>
			</section>}
		</>
	)
}

export default Send