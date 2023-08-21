import { FriendList } from "./FriendsList.styled"
import { FriendListItem } from "./FriendItem";

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </FriendList>
  );
};