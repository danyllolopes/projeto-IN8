import React from 'react'
import styles from './Sobre.module.css'
import rodape from '../../Assets/imagens/rodape-desktop.jpg'
import rodapeMobile from '../../Assets/imagens/rodape-mobile.jpg'
import useMedia from '../../Hooks/useMedia'

const Sobre = ({data}) => {
  const mobile = useMedia("(max-width: 480px)")
  
    const list = data && data.result.map((item) => {return item})
    const info = list &&  list.filter((dados, index) => {
       if(index === 0) return dados       
      })    
  return (
    <footer id='sobre' className={styles.footer}>  
    {
      mobile ? <img src={rodapeMobile} alt="Rodape" className={styles.rodapeMobile}/> : <img  src={rodape} alt="Rodape"/> 
    }      
    {info && info.map(({id, name, email, nascimento, telefone }) =>(
    <div key={id} className={`container ${styles.footerInfo}`}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{nascimento}</p>
      <p>{telefone}</p>
    </div>      
    ))}

  </footer>
  )
}

export default Sobre