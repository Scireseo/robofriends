import { 
    CHANGE_SEARCH_FIELD, 
    CHANGE_COUNT,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from "./constants" 

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
})

export const setCount = (count) => ({
    type: CHANGE_COUNT,
    payload: count,
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}