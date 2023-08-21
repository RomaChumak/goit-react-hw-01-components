import { QuizDescription } from './QuizDescription'
import { QuizList } from './QuizProfList';
import user from '../user.json'
export const Profile = () => {
   return <div>
    <QuizDescription
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar} />
    <QuizList stats={user.stats}/>
    </div>
}