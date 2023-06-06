function isAuthorizedUser(user) {

    if ((typeof user) !== 'object') {
        return false
    } else if (user === null) {
        return false
    }

    let usernameIsValid = (typeof user.name) === 'string'
    usernameIsValid = usernameIsValid && user.name !== ''

    let passwordIsValid = (typeof user.password) === 'string'
    passwordIsValid = passwordIsValid && user.password !== ''


    if (!usernameIsValid || !passwordIsValid) {
        return false
    }
    return true
}

function generateId() {
    return Math.round(Math.random() * 1000000)
}


export {  isAuthorizedUser, generateId}