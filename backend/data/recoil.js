import { atom } from "recoil"

export const loginState = atom({
	key: 'loginSate',
	default: false
})

export const isLoginState = atom({
	key: 'isLogin',
	default: false
})

export const isKodaState = atom({
	key:'isKodaState',
	default: false
})

export const isRandomState = atom({
	key: 'isRandomState', 
	default: false
})

export const isGruppOneState = atom({
	key: 'isGruppOneState',
	default: false
})

export const isGruppTwoState = atom({
	key: 'isGruppTwo',
	default: false
})

export const isGruppThreeState = atom({
	key: 'isGruppThreeState',
	default: false
})