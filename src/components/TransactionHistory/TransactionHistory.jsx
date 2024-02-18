import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.container}>
      <thead>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>

      
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionHistory;