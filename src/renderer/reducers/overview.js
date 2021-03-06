// consensus.js: Sia-UI consensus reducer
import { RECEIVE_CONSENSUS } from '../constants/consensus.js'
import { RECEIVE_WALLET } from '../constants/wallet.js'
import { RECEIVE_GATEWAY } from '../constants/gateway.js'
import { API_ERROR } from '../constants/error.js'
// Initial Sia-UI overview state
const initialState = {
	balance: '',
	peers: 0,
	height: 0,
}
// Sia-UI overview reducer
export default function overview(state = initialState, action) {
	switch (action.type) {
	case RECEIVE_CONSENSUS:
		return {
			...state,
			height: action.height,
		}
	case RECEIVE_WALLET:
		return {
			...state,
			balance: action.confirmedsiacoinbalance,
		}
	case RECEIVE_GATEWAY:
		return {
			...state,
			peers: action.peers.length,
		}
	case API_ERROR:
		console.error(action.error)
	default:
		return state
	}
}
