import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.About}>            
            <h1 className={styles.title}>Hola! soy Fernando Nasso ♦ </h1> 
    
            <p className={styles.paragraph}>
                Tengo 35 años y Vivo en Villa Gral Belgrano, Cordoba, Argentina.
            </p>
            <p className={styles.paragraph}>
                Estudio desarrollo web Full Stack en Henry.
                </p>
            <p className={styles.paragraph}>
                 Esta es mi primera APP. Nos vemos en la proxima!
            </p>
        </div>   
    )

}

export default About;