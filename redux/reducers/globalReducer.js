import { TOGGLE_SIDEBAR } from "../types";

const initialState = {
    isSidebarShow: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state, isSidebarShow: !state.isSidebarShow
            }
        default: return state;
    }
}

export default reducer;