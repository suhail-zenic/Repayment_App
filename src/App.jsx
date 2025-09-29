import React from 'react';
import './App.css';
import AccountList from './components/AccountList';
import WorkingModel from './components/WorkingModel';
import RepaymentModel from './components/RepaymentModel';

function App() {
  return (
    <div className="App">
      <h1>Repayment App</h1>
      <AccountList />
      <WorkingModel />
      <RepaymentModel />
    </div>
  );
}

export default App;
