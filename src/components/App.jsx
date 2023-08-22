import { Profile } from "./Profile/QuizProfile";
import { Statistics } from "./Statistics/QuizStatistics";
import { FriendsList } from "./FriendsList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../data/user.json'
import friends from '../data/friends.json'
import data from '../data/data.json'
import transactionHistory from '../data/transactions.json'
import { DivApp } from "./App.styled"; 
export const App = () => {
  return (
    <DivApp>
      <Profile user={user} />
      <Statistics stats={data} title={"Upload stats"} />
      <FriendsList friends={friends} />
      <TransactionHistory transactionHistory={transactionHistory} />
    </DivApp>);
};
