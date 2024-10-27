import Link from "next/link";


export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Quiz App</h1>
      <Link href='/categories'>
        <button>Categories</button>
      </Link>
    </div>
  );
}
