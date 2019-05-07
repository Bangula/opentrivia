import axios from 'axios';

export const getQuestions = ({ amount, category, difficulty}) => {
    return dispatch => {
        let url;
        if(category === 0){
            url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
        }
        url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
        axios.get(url)
            .then(res => {
                dispatch({
                    type: "SET_QUESTION",
                    payload: res.data
                })
            })
        console.log(url);
    }
}
 
