import React, {useState} from 'react';
import {connect} from 'react-redux';

import {getQuestions} from '../../store/actions/getQuestions';

function SetupForm({ getQuestions, history }) {

  const [state, setState] = useState({
    amount: '',
    category: '',
    difficulty: ''
  })
  const categories = [
    {name: 'Any category', value: 0},
    {name: 'General knowledge', value: 9},
    {name: 'Entertaiment Books', value: 10},
    {name: 'Entertaiment Film', value: 11},
    {name: 'Entertaiment Music', value: 12},
    {name: 'Entertaiment Musical and Theatres', value: 13},
    {name: 'Entertaiment Television', value: 14},
    {name: 'Entertaiment Video games', value: 15},
    {name: 'Entertaiment Board games', value: 16},
    {name: 'Science and Nature', value: 17},
    {name: 'Science: Computers', value: 18},
    {name: 'Science: Mathematics', value: 19},
    {name: 'Mythology', value: 20},
    {name: 'Sports', value: 21},
    {name: 'Geography', value: 22},
    {name: 'History', value: 23},
    {name: 'Politics', value: 24},
    {name: 'Art', value: 25},
    {name: 'Celebreties', value: 26},
    {name: 'Animals', value: 27},
    {name: 'Vehicles', value: 28},
    {name: 'Entertaiment: Comics', value: 29},
    {name: 'Science Gadgets', value: 30},
    {name: 'Entertaiment: Japanese Anime', value: 31},
    {name: 'Entertaiment: Cartoon and Animation', value: 32}
  ]
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getQuestions(state);
    history.push('/questions');
    

  }
  return (
    <div className='container mt-5 setupform'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Number of questions:</label> <br/>
        <input type="number" name="amount" onChange={handleChange} className='form-control mb-3'/> <br/>

        <label>Select category</label> <br/>
        <select onChange={handleChange} name='category' className='form-control mb-3'> 

          {categories.map(item => {
            return <option key={item.value} value={item.value}>{ item.name }</option>
          })}
          
        </select><br/>

        <label>Difficulty</label><br/>
        <select onChange={handleChange} name='difficulty' className='form-control mb-2'>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <input type="submit" className='setupbtn' value='submit' />

        </div>
        
      </form>      
    </div>
  )
}

export default connect(null, {getQuestions})(SetupForm);

