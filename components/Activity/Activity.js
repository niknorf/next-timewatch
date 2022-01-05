import styles from './Activity.module.css';

export default function Activity() {
    return (
        <div className={styles.activity}>
            <div className={styles.time}>
                <span className={styles.startTime}>9:00</span>
                <span className={styles.spentTime}>1h 15m</span>
                <span className={styles.endTime}>10:15</span>
            </div>
            <div className={styles.activityTitle}>
                <span className={styles.activityTitleText}>Javascript course</span>
            </div>
        </div>
    )
}