import { combineReducers, createStore } from "redux";
import { ReducerUsuarios } from "../Reducers/ReducerDatos";

const reducers = combineReducers({
    usuarios: ReducerUsuarios
})



export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
