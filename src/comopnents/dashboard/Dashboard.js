import React from 'react';
import {connect} from 'react-redux';

import SetupForm from './SetupForm';


function Dashboard({ history, user }) {

  if(!user){
    history.push('/signin');
  }
  return (
    <div className='container'>
        <h4 className='text-center' style={{marginTop: '200px', textAlign: 'center'}}>
            {user ? `Hello ${user}` : null}
        </h4>
        <div>
          <SetupForm history={history}/>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Dashboard);