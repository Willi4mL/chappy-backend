import { useRecoilState } from "recoil"
import { addUserState } from "../../backend/data/recoil"
import { useState } from "react"


const AddUser = () => {
	const [isAddForm, setIsAddForm] = useRecoilState(addUserState)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [usernameError, setUsernameError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)

	const handleAddUser = async () => {
		if (!username || !password) {
			console.log('Please enter both username and password')
			return
		}
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

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
		setUsernameError(false);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
		setPasswordError(false);
	};

	const handleUsernameBlur = () => {
		if (username.trim() === '') {
			setUsernameError(true);
		}
	};

	const handlePasswordBlur = () => {
		if (password.trim() === '') {
			setPasswordError(true);
		}
	};

	return (
		<>
			{isAddForm && <div className="add-user-container">
				<p className="add-user-heading">Lägg till användare</p>
				<input
					className={`add-username ${usernameError ? 'invalid-input' : ''}`}
					placeholder="Namn"
					type="text"
					value={username}
					onChange={handleUsernameChange}
					onBlur={handleUsernameBlur}
				></input>
				<input
					className={`add-password ${passwordError ? 'invalid-input' : ''}`}
					placeholder="Lösenord"
					type="password"
					value={password}
					onChange={handlePasswordChange}
					onBlur={handlePasswordBlur}
				></input>
				<div className="add-btn-container">
					<button className="add-close-btn" onClick={handleClose}>Avbryt</button>
					<button className="add-user-btn" onClick={handleAddUser}>Lägg till</button>
				</div>
			</div>}
		</>
	)
}

export default AddUser