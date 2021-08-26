import { TOGGLE } from "../types";

export const toggle = (payload) => ({
	type: TOGGLE,
	payload,
});
