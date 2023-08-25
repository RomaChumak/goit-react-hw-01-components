import { ProfItem } from "./QuizProfList.styled"
import { ProfList } from "./QuizProfList.styled"
import { BoldText } from "./QuizProfList.styled"
import PropTypes from 'prop-types'

export const QuizList = ({ stats }) => {
    return <ProfList>{[
     <ProfItem >
      <span >Followers</span>
      <BoldText >{stats.followers}</BoldText>
    </ProfItem>,
    <ProfItem>
      <span>Views</span>
      <BoldText>{stats.views}</BoldText>
    </ProfItem>,
    <ProfItem>
      <span>Likes</span>
        <BoldText>{stats.likes}</BoldText>
    </ProfItem>
    ]}</ProfList>
}


QuizList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};