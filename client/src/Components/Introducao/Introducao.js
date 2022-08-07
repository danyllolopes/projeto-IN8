import React from 'react'
import styles from './Introducao.module.css'
import logo from '../../Assets/logo-in8-dev.svg'
import useMedia from '../../Hooks/useMedia'

const Introducao = () => {
  const mobile = useMedia("(max-width: 800px)")
  const [mobileMenu, setMobileMenu] = React.useState(false);
  return (
    <div className={styles.introBg}>
      <header className={`${styles.header} container animeTop`}>
      {mobile && (
              <button
                className={`${styles.mobileButton} ${
                  mobileMenu && styles.mobileButtonActive
                }`}
                aria-label="Menu"
                onClick={() => setMobileMenu(!mobileMenu)}
              ></button>
            )}
        <img src={logo} alt="Logo"/>        
        <nav className={`${mobile ? styles.navMobile : styles.headerNav} ${mobileMenu && styles.navMobileActive} `}>    
         <a href='#cadastro'>cadastro</a>
         <a href='#lista'>lista</a>
         <a href='#sobre'>sobre mim</a>       
        </nav>
      </header>
      <section className={`container animeTop ${styles.intro}`}>
        <h1>Estágio</h1>
        <p>Prova de Seleção</p>
      </section>
    </div>
  )
}

export default Introducao