import { dispatch } from "../store";
import { TOGGLE_SIDEBAR } from "../types";

export const toggleSidebar = () => dispatch({ type: TOGGLE_SIDEBAR });