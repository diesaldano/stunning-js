import styles from '../styles/Header.module.css'
const Header = () =>{
    return (
        <header className="mb-16">
            <h1 className={styles.title}>
                33 Conceptos de Javascript 
            </h1>
            <h5 className={styles.title}>
                que todo desarrollador debería saber
            </h5>
        </header>
    )
}

export default Header;