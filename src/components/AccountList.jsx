import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAccount } from '../redux/accountsSlice';

export default function AccountList() {
  const [balance, setBalance] = useState('');
  const accounts = useSelector(state => state.accounts.accounts);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (balance !== '') {
      dispatch(addAccount(Number(balance)));
      setBalance('');
    }
  }

  return (
    <div>
      <h2>Accounts</h2>
      <input
        type="number"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        placeholder="Balance"
      />
      <button onClick={handleAdd}>Add Account</button>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>${account.balance.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}
