import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import useAxios from "../hooks/use-axios";
import styles from "./Dashboard.module.css";
import Posts from "./Posts";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  const { isLoading, error, getPosts } = useAxios();

  useEffect(() => {
    const transformPosts = (posts) => {
      setPosts(posts);
    };

    getPosts(transformPosts);
  }, [getPosts]);

  return (
    <section className={styles.glass}>
      {!isLoading && !error && <Posts posts={posts} />}
      {isLoading && !error && <Loader type="TailSpin" height={80} width={80} />}
      {error && !isLoading && <p>{error}</p>}
    </section>
  );
};

export default Dashboard;
