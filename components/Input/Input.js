import { UilMicrophone } from "@iconscout/react-unicons";
import styles from "./Input.module.css";

export default function Input() {
  return (
    <div className={styles.activityInput}>
      <input
        type="text"
        name="input"
        className={styles.input}
        placeholder="New activity:"
      />
      <button className={styles.mic}>
        <UilMicrophone size="24" color="#454545" />
      </button>
    </div>
  );
}
