export const TransactionHistory = ({ items: { id, type, amount, currency } }) => {
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    
  <tbody>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
     </tr>
</tbody>
</table>
} 