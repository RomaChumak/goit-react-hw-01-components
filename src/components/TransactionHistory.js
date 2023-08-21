import transactionHistory from '../transactions.json'
export const TransactionHistory = () => {
return (<table class="transaction-history"> 
 <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>{
        transactionHistory.map(item => {
       return <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  })}</tbody>
</table>)
}