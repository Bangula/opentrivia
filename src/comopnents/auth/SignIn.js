import React, {useState} from 'react';

// With Redux
// import {connect} from 'react-redux';
// import {setUser} from '../../store/actions/authActions';

import {QuestionContext} from '../../context/Context';

function SignIn({ history }) {
    const [userName, setUserName] = useState('');

    const { setUser } = React.useContext(QuestionContext);

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

// export default connect(null, {setUser})(SignIn);
export default SignIn;