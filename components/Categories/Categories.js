import styles from "./Categories.module.css";
import classNames from "classnames";

export default function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.firstRow}>
        <button className={classNames(styles.item, styles.itemOne)}>
          Studies
        </button>
        <button className={classNames(styles.item, styles.itemTwo)}>
          Work
        </button>
        <button className={classNames(styles.item, styles.itemThree)}>
          Fun
        </button>
      </div>
      <div className={styles.secondRow}>
        <button className={classNames(styles.item, styles.itemFour)}>
          Fitness
        </button>
        <button className={classNames(styles.item, styles.itemFive)}>
          Art
        </button>
        <button className={classNames(styles.item, styles.itemSix)}>+</button>
      </div>
    </div>
  );
}
