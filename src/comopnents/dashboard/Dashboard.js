import React from 'react';

import SetupForm from './SetupForm';
import {QuestionContext} from '../../context/Context';

function Dashboard({ history }) {

  const {state} = React.useContext(QuestionContext);

  if(!state.user){
    history.push('/signin');
  }

  return (
    <div className='container'>
        <h4 className='text-center' style={{marginTop: '200px', textAlign: 'center'}}>
            {state.user ? `Hello ${state.user}` : null}
        </h4>
        <div>
          <SetupForm history={history}/>
        </div>
    </div>
  )
}

export default Dashboard;