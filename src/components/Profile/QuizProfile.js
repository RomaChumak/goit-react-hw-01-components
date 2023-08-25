import { QuizDescription } from './QuizDescription'
import { QuizList } from './QuizProfList';
import PropTypes from 'prop-types'
import { ProfileStyled } from "./Profile.styled"
export const Profile = ({user}) => {
   return <ProfileStyled>
    <QuizDescription
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar} />
    <QuizList stats={user.stats}/>
    </ProfileStyled>
}


Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};