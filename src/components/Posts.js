import PostsItem from "./PostsItem";
import styles from "./Posts.module.css";

const Posts = (props) => {
  const posts = props.posts;
  let content = <h2>No tasks found.</h2>;

  if (posts.length > 0)
    content = (
      <ul className={styles.cards}>
        {posts.map((post) => (
          <PostsItem
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.body}
          />
        ))}
      </ul>
    );

  return content;
};

export default Posts;
