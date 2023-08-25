import { FriendItem } from "./FriendsList.styled"
import { FriendText } from "./FriendsList.styled"
import { GrStatusGoodSmall } from "react-icons/gr";
import { Status } from "./FriendsList.styled";
import PropTypes from 'prop-types'

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendItem>
      <Status  $isOnline={isOnline} className="status">
        <GrStatusGoodSmall size={25} />
      </Status>
      <img  src={avatar} alt="User avatar" width="48" />
      <FriendText>{name}</FriendText>
    </FriendItem>
  );
};


FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};