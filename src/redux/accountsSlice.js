import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accounts: [],
  monthlyPayment: 0,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.accounts.push({ balance: action.payload });
    },
    setMonthlyPayment: (state, action) => {
      state.monthlyPayment = action.payload;
    },
    applyPayment: (state) => {
      const totalBalance = state.accounts.reduce((acc, a) => acc + a.balance, 0);
      let remainingPayment = state.monthlyPayment;
      state.accounts = state.accounts.map(account => {
        if (remainingPayment >= account.balance) {
          remainingPayment -= account.balance;
          return { balance: 0 };
        } else {
          account.balance -= remainingPayment;
          remainingPayment = 0;
          return account;
        }
      });
    }
  }
});

export const { addAccount, setMonthlyPayment, applyPayment } = accountsSlice.actions;
export default accountsSlice.reducer;

