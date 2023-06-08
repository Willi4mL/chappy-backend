import { isKodaState, isRandomState, isGruppOneState, isGruppTwoState, isGruppThreeState } from "../../backend/data/recoil"
import { useRecoilState } from "recoil"

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
				{kodaMessages.messages.map(message => (
					<section className="history" key={message.id}>
						<section className="align-right">
							<p> {message.author}: {message.message} </p>
							<p> 17:46 </p>
						</section>
					</section>
				))}
			</>}

			{/* Random message */}
			{randomMessages && <>
				<section className="heading">
					Chattar i <span className="chat-name"> #random </span>
				</section>
				{randomMessages.messagesRandom.map(message => (
					<section className="history" key={message.id}>
						<section className="align-right">
							<p> {message.author}: {message.message} </p>
							<p> 17:46 </p>
						</section>
					</section>
				))}
			</>}

			{/* Grupp 1 message */}
			{gruppOneMessages && <>
				<section className="heading">
					Chattar i <span className="chat-name"> #grupp1 </span>
				</section>
				{gruppOneMessages.messagesOne.map(message => (
					<section className="history" key={message.id}>
						<section className="align-right">
							<p> {message.author}: {message.message} </p>
							<p> 17:46 </p>
						</section>
					</section>
				))}
			</>}

			{/* Grupp 2 message */}
			{gruppTwoMessages && <>
				<section className="heading">
					Chattar i <span className="chat-name"> #grupp2 </span>
				</section>
				{gruppTwoMessages.messagesTwo.map(message => (
					<section className="history" key={message.id}>
						<section className="align-right">
							<p> {message.author}: {message.message} </p>
							<p> 17:46 </p>
						</section>
					</section>
				))}
			</>}

			{/* Grupp 3 message */}
			{gruppThreeMessages && <>
				<section className="heading">
					Chattar i <span className="chat-name"> #grupp3 </span>
				</section>
				{gruppThreeMessages.messagesThree.map(message => (
					<section className="history" key={message.id}>
						<section className="align-right">
							<p> {message.author}: {message.message} </p>
							<p> 17:46 </p>
						</section>
					</section>
				))}
			</>}
		</>
	)
}

export default Message