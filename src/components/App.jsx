import { Profile } from "./QuizProfile";
import { Statistics } from "./QuizStatistics";
import { FriendsList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";
export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendsList />
      <TransactionHistory/>
    </div>);
};
