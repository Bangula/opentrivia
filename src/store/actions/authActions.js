export const setUser = (newUser) => {
    return dispatch => {
        dispatch({
            type: "SET_USER",
            payload: newUser
        })
    }
}