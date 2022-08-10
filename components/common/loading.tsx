import styles from "../../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <div className={`${styles.wave} ${styles.topwave}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${styles.wave} ${styles.bottomwave}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* <p>Loading...</p> */}
      </div>
    </div>
  );
};

export default Loading;