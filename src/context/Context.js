import React from 'react';
import axios from 'axios';

const QuestionContext = React.createContext();

const ContextProvider = (props) => {
    
    const [state, setState] = React.useState({
        user: '',
        questions: []
    })

    const setUser = (newUser) => {
        setState({
            ...state,
            user: newUser
        })
    }

    const getQuestions = ({ amount, category, difficulty }) => {

        let url;
        if(category === 0){
            url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;
        }else{
            url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
        }
        
        axios.get(url)
            .then(res => {
                setState({
                    ...state,
                    questions: res.data.results
                })
            })
        console.log(url);
    }
    
    return(
        <QuestionContext.Provider value={{state, setUser, getQuestions}}>
            { props.children }
        </QuestionContext.Provider>
    )
};

export {ContextProvider, QuestionContext};