import Dashboard from "./components/Dashboard";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.background}>
      <Dashboard />
      <div className={styles["circle-one"]}></div>
      <div className={styles["circle-two"]}></div>
    </main>
  );
}

export default App;
