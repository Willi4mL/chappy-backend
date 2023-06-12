import { useRecoilState } from "recoil"
import { addUserState } from "../../backend/data/recoil"
import { useState } from "react"


const AddUser = () => {
	const [isAddForm, setIsAddForm] = useRecoilState(addUserState)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleAddUser = async () => {
		try {
		  const response = await fetch(`/api/users`, {
			method: 'POST',
			body: JSON.stringify({
			  username: username,
			  password: password
			}),
			headers: {
			  'Content-Type': 'application/json'
			}
		  })
	
		} catch (error) {
		  console.log('Could not post message: ' + error.message)
		}
		setIsAddForm(false)
		setUsername('')
		setPassword('')
	  }

	  const handleClose = () => {
		setIsAddForm(false)
		setUsername('')
		setPassword('')
	  }

	return (
		<>
			{isAddForm && <div className="add-user-container">
				<p className="add-user-heading">Lägg till användare</p>
				<input className="add-username" placeholder="Namn" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
				<input className="add-password" placeholder="Lösenord" type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
				<div className="add-btn-container">
					<button className="add-close-btn" onClick={handleClose}>Avbryt</button>
					<button className="add-user-btn" onClick={handleAddUser}>Lägg till</button>
				</div>
			</div>}
		</>
	)
}

export default AddUser