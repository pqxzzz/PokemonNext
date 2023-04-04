


// import styles from '@/styles/Home.module.css'
// export async function getStaticProps(){
//   const maxPokemons = 251
//   const api = 'https://pokeapi.co/api/v2/pokemon/'

// const res = await fetch(`${api}/?limit=${maxPokemons}`)
// const data = await res.json()
// // add pokemon ID
// data.results.forEach((item, index) => {
//   item.id = index + 1;
// });

// return {
//   props: {
//     pokemons: data.results,
//   },
// };
// }
// export default function Home({pokemons}) {
//   return (
//     <>
//      <h1>Pokemon Next</h1>
//       <ul>
//         {pokemons((pokemon)=>{
//           <li key={pokemon.id}>{pokemon.name}</li>
//         })}
//       </ul>
//     </>
//   )
// }


import pokebola from "../public/images/pokeball.png"

import Card from "../components/Card"

import Image from "next/image";

import styles from "../styles/Home.module.css"

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Pokemon <span>Next</span>
        </h1>
        <Image className={styles.logoimg}
          src={pokebola}
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
