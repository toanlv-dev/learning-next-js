import style from '../../styles/ninja.module.css'
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { ninjas: data }
  }
}


const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      { ninjas.map(ninja => (
          <Link href={`ninja/${ninja.id}`} key={ninja.id} >
            <a><p className={style.ninja}>{ninja.name}</p></a>
          </Link>
      )) }
    </div>
  );
}

export default Ninjas