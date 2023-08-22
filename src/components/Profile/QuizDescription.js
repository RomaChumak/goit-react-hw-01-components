import { AvatarProf } from "./QuizDescription.styled"
import { UserName } from "./QuizDescription.styled"
import { TextDesc } from "./QuizDescription.styled"
import { DescConteiners } from "./QuizDescription.styled"

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

}