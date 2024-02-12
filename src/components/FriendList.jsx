import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map((friend) => {
                <li key={friend.id} >
                    <FriendListItem friends={friend}
                    />
                </li>
            })}
        </ul>
    );
}; 