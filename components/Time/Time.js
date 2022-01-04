import styles from "./Time.module.css";

export default function Time() {
	return (
		<div className={styles.time}>
			<span className={styles.activityTitle}>Javascript course</span>
			<div className={styles.timeSpentContainer}>
				<span className={styles.timeSpentTitle}>Time spent: </span>
				<span className={styles.timeSpent}>1 hour 15 minutes </span>
			</div>
		</div>
	);
}
