import Link from 'next/link';
import styles from './Layout.module.css';
const Layout = ({ children }) => {
    return (

        <>
            <header className={styles.header}>
                <Link href='/'>
                    <h2>Auto gallery</h2>
                    {/* <p>choose an Buy your car</p> */}
                </Link>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                Auto gallery | &copy;
            </footer>

        </>
    );
};

export default Layout;