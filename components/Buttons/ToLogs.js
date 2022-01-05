import styles from './ToLogs.module.css';
import Link from 'next/link';

export default function ToLogs() {
    return (
        <div className={styles.ToLogsContainer}>
            <Link href="/logs">
                <a className={styles.toLogsButton}>
                    Logs →
                </a>
            </Link>
        </div>
    )
}