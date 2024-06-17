import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./Auth/Reducer";
import projectReducer from "./Project/Reducer";
import chatReducer from "./Chat/Reducer"; // Nome do reducer corrigido
import commentReducer from "./Comment/Reducer";
import issueReducer from "./Issue/Reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  chat: chatReducer,
  comment: commentReducer,
  issue: issueReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
