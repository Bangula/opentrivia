import React, {useState} from 'react';
import {connect} from 'react-redux';

import { XmlEntities } from 'html-entities';
const entities = new XmlEntities();

function Questions({ questions, user, history }) {
    const [increm, setIncrem] = useState(0);
    const [correct, setCorrect] = useState([]);
    const [result, setResult] = useState(false);
    
    
    let numOfQuestions;
    if(questions.length > 0){
      numOfQuestions = questions.length
    }
    const nextQuestion = (e, correctAnsw) => {
      e.preventDefault();

      if(correctAnsw){
        setCorrect([...correct, 'correct']);
      }

      if(increm < numOfQuestions-1){
        setIncrem(increm => increm + 1);
      }else{
        console.log('no more questions')     
        setResult(true) ;
      }
    }
    
    let questionsArr = [];
    if(questions.length){

        questions[increm].incorrect_answers.forEach((item, index) => {
        let itemName = entities.decode(item)
        questionsArr.push( <button key={index} onClick={nextQuestion} className="questbtn">{ itemName }</button>)

      })

      let correctAnswer = entities.decode(questions[increm].correct_answer);
      questionsArr.push(  
        
        <button key={20} className="questbtn" onClick={(e) => nextQuestion(e, questions[increm].question)} >
          { correctAnswer }
        </button> )

      questionsArr.sort(() => Math.random() - 0.5);
    }

    let questionName;
    if(questions.length) {
      console.log(questions[increm].question)
      questionName = entities.decode(questions[increm].question)
    }else {
      questionName = null;
    }
  return (
      
    <div className="container questions">
       <div className='mt-5'>
          <p className='text-center'>Question num: { increm + 1 }</p>
          {/* <h3 className='text-center mb-4'>{ questions.length ? questions[increm].question : null }</h3> */}
          <h3 className='text-center mb-4'>{ questionName }</h3>
        
          {questionsArr && questionsArr}
        </div>
      { result && (
          <div className='result'>
            <p>Result for {user && user}</p>
            <p>{questions.length ? (correct.length & correct.length) : (null)} of {questions.length && questions.length} questions correct</p>
            <button onClick={() => history.push('/signin')} className='resultbtn'>Start new game</button>
            <button onClick={() => setResult(false)} className='resultbtn'>Close</button>
        </div>
      )}
      
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions.questions,
        user: state.user.user
    }
};

export default  connect(mapStateToProps)(Questions);