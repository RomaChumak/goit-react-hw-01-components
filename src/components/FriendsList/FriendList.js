import { FriendList } from "./FriendsList.styled"
import { FriendListItem } from "./FriendItem";
import PropTypes from 'prop-types'

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </FriendList>
  );
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};