import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <div>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th className={s.tdHead}>Type</th>
            <th className={s.tdHead}>Amount</th>
            <th className={s.tdHead}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className={s.tdStyle}>{item.type}</td>
              <td className={s.tdStyle}>{item.amount}</td>
              <td className={s.tdStyle}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
