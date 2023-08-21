import friend from '../friends.json'
export const FriendsList = () => {
   return <ul>{
        friend.map(item => {
   return <li key={item.id}>
    <span></span>
    <img src={item.avatar} alt="User avatar" width="48" />
        <p>{item.name}</p>
    </li>
    })}</ul>
}