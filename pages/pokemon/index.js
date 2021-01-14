import Head from "next/head";
import Link from "next/link";

function PokemonIndex({ paths }) {
  return (
    <>
      <Head>
        <title>Pokemons List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        Welcome,
        <ul>
          {paths.map((p) => (
            <li>
              <Link href={p}>
                <a>{p}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokemon = await res.json();

  let paths = pokemon.results.map((p) => {
    return `/pokemon/${p.name}`;
  });

  return {
    props: {
      paths,
    },
  };
}

export default PokemonIndex;
