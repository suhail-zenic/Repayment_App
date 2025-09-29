import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import AccountList from '../components/AccountList';

test('adds an account and displays it', () => {
  render(<Provider store={store}><AccountList /></Provider>);
  const input = screen.getByPlaceholderText(/Balance/i);
  const button = screen.getByText(/Add Account/i);

  fireEvent.change(input, { target: { value: '100' } });
  fireEvent.click(button);

  expect(screen.getByText('$100.00')).toBeInTheDocument();
});
