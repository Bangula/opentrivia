import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setUser} from '../../store/actions/authActions';

function SignIn({ history, setUser }) {
    const [userName, setUserName] = useState('');
    const handleChange = (e) => {
        setUserName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(userName);
        history.push('/');
    }
  return (
    <div className='container signin'>
      <form onSubmit={handleSubmit}>
          <h4 className="">Sign in</h4>
          <div className="">
            <label htmlFor="email">Your name:</label>
            <input type="text" className="form-control" onChange={handleChange}/>
            <input type="submit" value='Submit' className='signbtn' />
          </div>
      </form>
    </div>
  )
}

export default connect(null, {setUser})(SignIn);
