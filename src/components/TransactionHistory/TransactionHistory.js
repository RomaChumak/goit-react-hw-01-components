import { TransTr } from "./TransactionHistory.styled"
import { TransTh } from "./TransactionHistory.styled"
import { TransTable } from "./TransactionHistory.styled"
import { TransBodyTr } from "./TransactionHistory.styled"
import { TransTd } from "./TransactionHistory.styled"
import PropTypes from 'prop-types'

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


TransactionHistory.propTypes = {
  transactionHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};