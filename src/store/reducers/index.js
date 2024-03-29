import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import toggleNavReducer from "./toggleNav";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = () =>
	combineReducers({
		toggleNav: toggleNavReducer,
	});

export default persistReducer(persistConfig, rootReducer());
