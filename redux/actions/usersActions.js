import { getUsers, getUserById, deleteUserById } from "../../api"
import { dispatch } from "../store";
import { SET_USERS, SET_USER } from "../types";

export const setUsers = async () => {
    const res = await getUsers();
    if (res.success) {
        dispatch({ type: SET_USERS, payload: res.data })
    }
    else {
        dispatch({ type: SET_USERS, payload: [] });
    }
}

export const setUser = async (id) => {
    const res = await getUserById(id);
    if (res.success) {
        dispatch({ type: SET_USER, payload: res.data })
    }
    else {
        dispatch({ type: SET_USER, payload: [] });
    }
}

export const deleteUser = async (id) => {
    const res = await deleteUserById(id);
    if (res.success) {
        dispatch({ type: DELETE_USER, payload: res.data })
    }
    else {
        dispatch({ type: DELETE_USER, payload: [] });
    }
}


