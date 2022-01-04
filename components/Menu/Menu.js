import styles from "./Menu.module.css";
import { UilCog } from "@iconscout/react-unicons";
import ActiveLink from "../ActiveLink";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <ActiveLink activeClassName={styles.current} href="/">
        <a href="#" className={styles.menuItem}>
          New
        </a>
      </ActiveLink>
      <ActiveLink activeClassName={styles.current} href="/logs">
        <a href="#" className={styles.menuItem}>
          Logs
        </a>
      </ActiveLink>
      <ActiveLink activeClassName={styles.current} href="/stats">
        <a href="#" className={styles.menuItem}>
          Stats
        </a>
      </ActiveLink>
      <ActiveLink activeClassName={styles.current} href="/settings">
        <a href="#" className={styles.settings}>
          <UilCog size="30" color="#454545" />
        </a>
      </ActiveLink>
    </div>
  );
}
