import { ProfItem } from "./QuizProfList.styled"
import { ProfList } from "./QuizProfList.styled"
import { BoldText } from "./QuizProfList.styled"
export const QuizList = ({ stats }) => {
    return <ProfList>{[
     <ProfItem key={5}>
      <span >Followers</span>
      <BoldText >{stats.followers}</BoldText>
    </ProfItem>,
    <ProfItem key={6}>
      <span>Views</span>
      <BoldText>{stats.views}</BoldText>
    </ProfItem>,
    <ProfItem key={7}>
      <span>Likes</span>
        <BoldText>{stats.likes}</BoldText>
    </ProfItem>
    ]}</ProfList>
}