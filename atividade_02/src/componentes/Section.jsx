import styles from './Section.module.css'
import img from '../assets/img.png'

function Section(){
  return(

    <section>
      <h1>Conteudo</h1>

      <img className={styles.img} src={img} alt="img" />
    </section>

  )
}

export default Section
