import { atom } from "recoil"

export const loginState = atom({
	key: 'loginSate',
	default: false
})

export const isLoginState = atom({
	key: 'isLogin',
	default: false
})