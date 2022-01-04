import styles from "./Buttons.module.css";
import { UilPlay, UilPause, UilCheck } from "@iconscout/react-unicons";

export default function Buttons() {
  return (
    <div className={styles.buttons}>
      <a href="#" className={styles.play}>
        <UilPlay size="48" color="#454545" />
      </a>
      <div className={styles.pauseDone}>
        <a href="#" className={styles.pause}>
          <UilPause size="35" color="#454545" />
        </a>
        <a href="#" className={styles.done}>
          <UilCheck size="35" color="#454545" />
        </a>
      </div>
    </div>
  );
}
