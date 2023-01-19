import { legacy_createStore } from "redux";
import rootReducers from "./reducers";

export const store =legacy_createStore(rootReducers);

