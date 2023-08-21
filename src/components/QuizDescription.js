export const QuizDescription = ({username, tag, location, avatar}) => {
    return <div>{[
    <img
      src={avatar}
      alt="User avatar"
      key={1}
    />,
    <p key={2}>{username}</p>,
    <p key={3}>@{tag}</p>,
    <p key={4}>{location}</p>]}
  </div>

}