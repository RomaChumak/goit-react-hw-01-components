import { QuizDescription } from './QuizDescription'
import { QuizList } from './QuizProfList';
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