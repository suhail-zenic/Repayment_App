import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMonthlyPayment } from '../redux/accountsSlice';

export default function WorkingModel() {
  const monthlyPayment = useSelector(state => state.accounts.monthlyPayment);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setMonthlyPayment(Number(e.target.value)));
  };

  return (
    <div>
      <h2>Working Model</h2>
      <input
        type="number"
        value={monthlyPayment}
        onChange={handleChange}
        placeholder="Monthly Payment"
      />
    </div>
  );
}
