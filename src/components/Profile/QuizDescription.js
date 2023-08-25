import { AvatarProf } from "./QuizDescription.styled"
import { UserName } from "./QuizDescription.styled"
import { TextDesc } from "./QuizDescription.styled"
import { DescConteiners } from "./QuizDescription.styled"
import PropTypes from 'prop-types'

export const QuizDescription = ({ username, tag, location, avatar }) => {
  return <DescConteiners>{[
    <AvatarProf
      src={avatar}
      alt="User avatar"
    />,
    <UserName>{username}</UserName>,
    <TextDesc>@{tag}</TextDesc>,
    <TextDesc>{location}</TextDesc>]}
  </DescConteiners>

};


QuizDescription.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
