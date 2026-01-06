import styles from './Header.module.css'
function Header() {
    return(
        <nav className={styles.navbar}>
            <img src="" alt="logo" />
            <div className={styles.infoBtns}>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div className={styles.login}>
                <button className={styles.loginBtn}>Login</button>
            </div>
            <div className={styles.btnConainer}>
                <button></button>
                <button></button>
                <button></button>
            </div>

        </nav>
    )
}
export default Header;

