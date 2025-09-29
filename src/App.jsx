import React from 'react';
import AccountList from './components/AccountList';
import WorkingModel from './components/WorkingModel';
import RepaymentModel from './components/RepaymentModel';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Repayment App</h1>
      <AccountList />
      <WorkingModel />
      <RepaymentModel />
    </div>
  );
}

export default App;
