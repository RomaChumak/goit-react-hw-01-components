export const QuizList = ({stats}) => {
    return <ul>{[
     <li key={5}>
      <span >Followers</span>
      <span >{stats.followers}</span>
    </li>,
    <li key={6}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>,
    <li key={7}>
      <span>Likes</span>
        <span>{stats.likes}</span>
    </li>
    ]}</ul>
}