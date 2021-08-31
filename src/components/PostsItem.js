import styles from "./PostItem.module.css";

const PostsItem = (props) => {
  return (
    <li className={styles.card}>
      <p className={styles.id}>{props.id >= 10 ? props.id : "0" + props.id}</p>
      <div className={styles.content}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
    </li>
  );
};

export default PostsItem;
