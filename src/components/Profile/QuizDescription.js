import { AvatarProf } from "./QuizDescription.styled"
import { UserName } from "./QuizDescription.styled"
import { TextDesc } from "./QuizDescription.styled"
import { DescConteiners } from "./QuizDescription.styled"

export const QuizDescription = ({ username, tag, location, avatar }) => {
    return <DescConteiners>{[
    <AvatarProf
      src={avatar}
      alt="User avatar"
      key={1}
    />,
    <UserName key={2}>{username}</UserName>,
    <TextDesc key={3}>@{tag}</TextDesc>,
    <TextDesc key={4}>{location}</TextDesc>]}
  </DescConteiners>

}