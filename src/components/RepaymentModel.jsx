import React from 'react';
import { useSelector } from 'react-redux';

export default function RepaymentModel() {
  const accounts = useSelector(state => state.accounts.accounts);
  const monthlyPayment = useSelector(state => state.accounts.monthlyPayment);

  const computeRepayment = () => {
    let balances = accounts.map(a => a.balance);
    let timeline = [];
    while (balances.reduce((a, b) => a + b, 0) > 0) {
      let paymentRemaining = monthlyPayment;
      balances = balances.map(balance => {
        if (paymentRemaining >= balance) {
          paymentRemaining -= balance;
          return 0;
        } else {
          balance -= paymentRemaining;
          paymentRemaining = 0;
          return balance;
        }
      });
      timeline.push([...balances]);
      if (paymentRemaining === monthlyPayment) break; // avoid infinite loop if payment=0
    }
    return timeline;
  };

  const timeline = computeRepayment();

  return (
    <div>
      <h2>Repayment Model</h2>
      {timeline.length === 0 && <p>No payments applied yet.</p>}
      <ul>
        {timeline.map((balances, index) => (
          <li key={index}>
            Month {index + 1}: {balances.map(b => `$${b.toFixed(2)}`).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
