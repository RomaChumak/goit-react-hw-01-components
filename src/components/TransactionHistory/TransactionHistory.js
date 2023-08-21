import { TransTr } from "./TransactionHistory.styled"
import { TransTh } from "./TransactionHistory.styled"
import { TransTable } from "./TransactionHistory.styled"
import { TransBodyTr } from "./TransactionHistory.styled"
import { TransTd } from "./TransactionHistory.styled"

export const TransactionHistory = ({ transactionHistory }) => {
return (<TransTable> 
 <thead>
    <TransTr>
      <TransTh>Type</TransTh>
      <TransTh>Amount</TransTh>
      <TransTh>Currency</TransTh>
    </TransTr>
  </thead>

    <tbody>{
        transactionHistory.map(item => {
       return <TransBodyTr key={item.id}>
      <TransTd>{item.type}</TransTd>
      <TransTd>{item.amount}</TransTd>
      <TransTd>{item.currency}</TransTd>
    </TransBodyTr>
  })}</tbody>
</TransTable>)
}