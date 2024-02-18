import css from "./FriendListItem.module.css"
// import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
     
    return (
        <div className={css.container}>
            <img className={css.imag} src={avatar} alt={name} width="48" />
            <p className={css.titleName}>{name}</p>
            <p className={isOnline ? css.online : css.ofline }>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}
export default FriendListItem;