import styles from './UserInfo.module.css';

export default function UserInfo({ user }) {
    return (
        <div className={styles.container}>
            <img
                src={user.image}
                alt={user.firstName}
                className={styles.avatar}
            />
            <div className={styles.info}>
                <h2 className={styles.name}>
                    {user.firstName} {user.lastName}
                </h2>
                <p className={styles.detail}>
                    <strong>Age:</strong> {user.age}
                </p>
                <p className={styles.detail}>
                    <strong>Email:</strong> {user.email}
                </p>
                <p className={styles.detail}>
                    <strong>Phone:</strong> {user.phone}
                </p>
                <p className={styles.detail}>
                    <strong>Address:</strong> {user.address.city},{' '}
                    {user.address.state}
                </p>
                <h3 className={styles.sectionTitle}>Company</h3>
                <p className={styles.detail}>
                    <strong>Name:</strong> {user.company.name}
                </p>
                <p className={styles.detail}>
                    <strong>Department:</strong> {user.company.department}
                </p>
                <p className={styles.detail}>
                    <strong>Title:</strong> {user.company.title}
                </p>
            </div>
        </div>
    );
}
