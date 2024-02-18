
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  
    return (
      <div className={css.container}>
  <div >
      <img className={css.imag}
      src={image}
      alt={name}
    />
    <p className={css.titleName}>{name}</p>
    <p className={css.title}>@{tag}</p>
    <p className={css.title}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <span className={css.elementsItem}>Followers</span>
      <span className={css.elements}>{followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.elementsItem}>Views</span>
      <span className={css.elements}>{views}</span>
    </li>
    <li className={css.item}>
      <span className={css.elementsItem}>Likes</span>
      <span className={css.elements}>{likes}</span>
    </li>
  </ul>
</div>
 ); 
}

export default Profile;