import styles from '../styles/About.module.css'
import charizard from '../public/images/charizard.png'
import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Pokemons obtidos por uma API e pagina
        feita apartir de conhecimentos de 
        Java Script, Html, Css, React 
      </p>
      <Image
        src={charizard}
        alt="Charizard"
        width="300"
        height="300"
      />
    </div>
  )
}