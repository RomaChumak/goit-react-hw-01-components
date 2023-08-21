import friend from '../friends.json'
export const FriendsList = () => {
    <ul>{
        friend.map(item => {
    <li key={item.id}>
    <span class="status"></span>
    <img class="avatar" src={item.avatar} alt="User avatar" width="48" />
        <p class="name">{item.name}</p>
    </li>
    })}</ul>
}