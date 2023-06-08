import { isKodaState, isRandomState, isGruppOneState, isGruppTwoState, isGruppThreeState } from "../../backend/data/recoil"
import { useRecoilState } from "recoil"
import Send from "./Send"

const Message = () => {
	const [kodaMessages, setKodaMessages] = useRecoilState(isKodaState)
	const [randomMessages, setRandomMessages] = useRecoilState(isRandomState)
	const [gruppOneMessages, setGruppOneMessages] = useRecoilState(isGruppOneState)
	const [gruppTwoMessages, setGruppTwoMessages] = useRecoilState(isGruppTwoState)
	const [gruppThreeMessages, setGruppThreeMessages] = useRecoilState(isGruppThreeState)



	return (
		<>
			{/* Koda message */}
			{kodaMessages && <>
				<section className="heading">
					Chattar i <span className="chat-name"> #koda </span>
				</section>
				<div className="chat-area">
					{kodaMessages.messages.map(message => (
						<section className="history" key={message.id}>
							<section className="align-right">
								<p> {message.author}: {message.message} </p>
								<p> 17:46 </p>
							</section>
						</section>
					))}
					{/* <Send /> */}
				</div>
			</>}

			{/* Random message */}
			{randomMessages && <>
				<section className="heading">
					Chattar i <span className="chat-name"> #random </span>
				</section>
				<div className="chat-area">
					{randomMessages.messages.map(message => (
						<section className="history" key={message.id}>
							<section className="align-right">
								<p> {message.author}: {message.message} </p>
								<p> 17:46 </p>
							</section>
						</section>
					))}
					<section>
						<input type="text" placeholder="Ditt meddelande..." />
						<button> Skicka </button>
					</section>
				</div>
			</>}

			{/* Grupp 1 message */}
			{gruppOneMessages && <>
				<section className="heading">
					Chattar i <span className="chat-name"> #grupp1 </span>
				</section>
				<div className="chat-area">
					{gruppOneMessages.messages.map(message => (
						<section className="history" key={message.id}>
							<section className="align-right">
								<p> {message.author}: {message.message} </p>
								<p> 17:46 </p>
							</section>
						</section>
					))}
					<section>
						<input type="text" placeholder="Ditt meddelande..." />
						<button> Skicka </button>
					</section>
				</div>
			</>}

			{/* Grupp 2 message */}
			{gruppTwoMessages && <>
				<section className="heading">
					Chattar i <span className="chat-name"> #grupp2 </span>
				</section>
				<div className="chat-area">
					{gruppTwoMessages.messages.map(message => (
						<section className="history" key={message.id}>
							<section className="align-right">
								<p> {message.author}: {message.message} </p>
								<p> 17:46 </p>
							</section>
						</section>
					))}
					<section>
						<input type="text" placeholder="Ditt meddelande..." />
						<button> Skicka </button>
					</section>
				</div>
			</>}

			{/* Grupp 3 message */}
			{gruppThreeMessages && <>
				<section className="heading">
					Chattar i <span className="chat-name"> #grupp3 </span>
				</section>
				<div className="chat-area">
					{gruppThreeMessages.messages.map(message => (
						<section className="history" key={message.id}>
							<section className="align-right">
								<p> {message.author}: {message.message} </p>
								<p> 17:46 </p>
							</section>
						</section>
					))}
					<section>
						<input type="text" placeholder="Ditt meddelande..." />
						<button> Skicka </button>
					</section>
				</div>
			</>}
		</>
	)
}

export default Message