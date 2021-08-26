import { TOGGLE } from "../types";

const initialState = {
	collapse: true,
};

const toggleNavReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE:
			return { ...state, collapse: action.payload };

		default:
			return state;
	}
};
export default toggleNavReducer;
