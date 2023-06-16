# chappy-backend

## Description
This API has been developed specifically for a school assignment that involves creating a simplified Chatapp. To assist users in understanding and utilizing the API effectively, I have provided the following resources: Dependencies, Usage Documentation, and examples. These resources aim to provide clear guidance and instructions to anyone using the API for their project

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Examples](#examples)
- [Contributing](#Contributing)
- [License](#License)
- [Contact_Information](#Contact_Information)

<br>
<br>


## Installation
<a name="installation"></a>
Dependencies:

    
    "cors": "^2.8.5",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "lowdb": "^6.0.1",
    "react": "^18.2.0",
    "react-icons": "^4.9.0",
    "recoil": "^0.7.7"

<br>
<br>

## Usage
<a name="usage"></a>
The API handling data for a chatapp, it handles channels, messages, login and users in the database. 

<br>
<br>



## API Documentation
<a name="api-documentation"></a>

## Home
### 1.[GET] /api/home
> Get all data from database 

<br>

## Channels
### 1.[GET]  /api/channels 
> Get unauthorized channels
### 2.[GET]  /api/channels/id
> Get individual channels 
### 3.[POST]  /api/channels/ 
> Request body 	{	username } 
### 4.[DELETE] /api/channels/id 
> Remove a channel by calling the assigned ID.
### 5.[PUT] api/channels/”channelId”  
> Modify an existing channel, Request Body { username }

<br>

## Authorized channels
### 1.[GET]  /api/channelsmember 
> Get all authorized channels
### 2.[GET]  /api/channels/id
> Get individual channels 
### 3.[POST]  /api/channels/ 
> Request body 	{	username } 
### 4.[DELETE] /api/channels/id 
> Remove a channel by calling the assigned ID.
### 5.[PUT] api/channels/”channelId”  
> Modify an existing channel, Request Body { username }

<br>

## Users
### 1.[GET] /api/users  
> Get all users.
### 2.[GET] /api/users/id  
> Get individual user
### 3.[POST] /api/users/  
> Request body { username, password } 
### 4.[DELETE]  /Api/users/id 
> Remove a user by calling the assigned ID. 
### 5.[PUT] api/users/id 
> Modify an existing user. Request body { username, password }

<br>

## Messages channel koda
### 1.[GET] /api/messages  
> Get all messages from channel koda.
### 2.[GET] /api/messages/id  
>  Get specified message from channel koda
### 3.[POST] /api/messages/id  
> Request body { author, message } 
### 4.[DELETE]  /Api/messages/id
> Remove a message by calling the assigned ID. 
### 5.[PUT] api/messag/id
> Modify an existing message. Request body { name, password }

<br>

## Messages channel random
### 1.[GET] /api/messagesrandom  
> Get all messages from channel random.
### 2.[GET] /api/messagesrandom/id  
> Get specified message from channel random
### 3.[POST] /api/messagesrandom/id  
> Request body { author, message } 
### 4.[DELETE]  /Api/messagesrandom/id
> Remove a message by calling the assigned ID. 
### 5.[PUT] api/messagesrandom/id
> Modify an existing message. Request body { name, password }

<br>

## Messages channel group one
### 1.[GET] /api/messagesmembersone  
> Get all messages from channel group one.
### 2.[GET] /api/messagesmembersone/id  
> Get specified message from channel group one
### 3.[POST] /api/messagesmembersone/id  
> Request body { author, message } 
### 4.[DELETE]  /Api/messagesmembersone/id
> Remove a message by calling the assigned ID. 
### 5.[PUT] api/messagesmembersone/id
> Modify an existing message. Request body { name, password }

<br>

## Messages channel group two
### 1.[GET] /api/messagesmemberstwo  
> Get all messages from channel group two.
### 2.[GET] /api/messagesmemberstwo/id  
> Get specified message from channel group two
### 3.[POST] /api/messagesmemberstwo/id  
> Request body { author, message } 
### 4.[DELETE]  /Api/messagesmemberstwo/id
> Remove a message by calling the assigned ID. 
### 5.[PUT] api/messagesmemberstwo/id
> Modify an existing message. Request body { name, password }

<br>

## Messages channel group three
### 1.[GET] /api/messagesmembersthree  
> Get all messages from channel group three.
### 2.[GET] /api/messagesmembersthree/id  
> Get specified message from channel group three
### 3.[POST] /api/messagesmembersthree/id  
> Request body { author, message } 
### 4.[DELETE]  /Api/messagesmembersthree/id
> Remove a message by calling the assigned ID. 
### 5.[PUT] api/messagesmembersthree/id
> Modify an existing message. Request body { name, password }

<br>

## Login
### 1.[POST] /api/login
> Request body { username, password } 


<br>
<br>


## Examples
<a name="examples"></a>
[POST] New message to channel koda

	const postKoda = async (sending) => {
		try {
			const response = await fetch(`/api/messages`, {
				method: 'POST',
				body: JSON.stringify({
					author: author,
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
  
  <br>
  
  [GET] Get all data from channel with name random
  
  	const fetchRandomMessage = async () => {
		try {
			const response = await fetch('/api/home')
			const data = await response.json()
			const messages = data.channels.find(channel => channel.name === 'random')
			setRandomMessages(messages)
		
		} catch (error) {
			console.log('Could not fetch messages' + error.message)
		}
	}
  
  <br>
  
  [DELETE] Delete one message from koda channel
  
	const removeMessage = async (messageId) => {
		try {
			const response = await fetch(`/api/messages/${messageId}`, { method: 'DELETE' })
			if (response.status === 200) {
        console.log('Successful')
			} else {
				// Other error occurred
				throw new Error('An error occurred while deleting the message')
			}
		} catch (error) {
			console.error('An error occurred while deleting the message:', error)
		}
	}
  
  <br>
  <br>

## Contributing
<a name="Contributing"></a>
If you have any issues or problems with the API, please let me know. I would be glad to address any concerns or faults you encounter in order to make improvements for future projects.


<br>

## License
<a name="License"></a>
<br>

¯\\_(ツ)_/¯ 

<br>


## Contact_Information
<a name="Contact_Information"></a>

<br>
https://github.com/Willi4mL
