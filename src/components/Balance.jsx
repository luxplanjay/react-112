import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../redux/balanceSlice';

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);

  const handleDeposit = () => {
    dispatch(deposit(50));
  };

  const handleWithdraw = () => {
    // відправити action зняття коштів
    // щоб сповістити store що щось відбулось
    const withdrawAction = withdraw(20);
    dispatch(withdrawAction);
  };

  return (
    <div>
      <p>Balance: {balance} credits</p>
      {/* <input type="number" /> */}
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleWithdraw}>Withdraw credits</button>
    </div>
  );
}
