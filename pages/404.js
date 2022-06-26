import Link from "next/link";

const NotFound = () => {
  return (
      <div>
          <h1>Ooooops.........</h1>
          <h2>That page is cannot be found</h2>
          <p>Back to the <Link href={"/"}>Home</Link></p>
      </div>
  )
}

export default NotFound