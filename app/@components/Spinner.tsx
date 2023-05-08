import styles from "./Spinner.module.css";

// ref: https://loading.io/css/
export default function Spinner() {
  return (
    <div style={{ width: "100%", height: "100%", margin: "0 auto" }}>
      <div className={styles["lds-dual-ring"]}></div>
    </div>
  );
}
